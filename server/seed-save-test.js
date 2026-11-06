import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';

const out = process.env.PIP_SEED_SAVE_QA_OUTPUT || fs.mkdtempSync(path.join(os.tmpdir(), 'pip-seed-save-'));
fs.mkdirSync(out, { recursive: true });
const postgres = process.argv.includes('--postgres');
if (postgres && !process.env.PIP_TEST_DATABASE_URL) throw Error('An isolated PIP_TEST_DATABASE_URL is required.');
Object.assign(process.env, {
  NODE_ENV: 'test', DATABASE_URL: postgres ? process.env.PIP_TEST_DATABASE_URL : '',
  PIP_DATABASE_SSL: 'false', OPENAI_API_KEY: '', PIP_AI_DISABLED: 'true',
  PIP_MEMORY_FILE: path.join(out, 'memory.json'), PIP_BRIDGE_SECRET: 'fictional-seed-save-test',
  PIP_RATE_LIMIT_MAX: '10000', PIP_ALLOWED_ORIGINS: 'http://127.0.0.1:4277',
  DOTENV_CONFIG_PATH: path.join(out, 'absent.env')
});
const memory = await import('./pipMemory.js');
if (!postgres) memory.resetMemoryForTests();
const { app } = await import('./index.js');
const { issuePipSession } = await import('./pipAuth.js');
const server = await new Promise(resolve => { const s = app.listen(4277, '127.0.0.1', () => resolve(s)); });
const base = 'http://127.0.0.1:4277', member = { id: 'seed-save-' + Date.now(), name: 'Seed save tester' };
const subscription = { active: true, plan: 'pip_pro' }, token = issuePipSession({ member, subscription });
let browser;
async function req(url, method = 'GET', body, auth = token) {
  const response = await fetch(base + '/api/pip' + url, { method, headers: { Authorization: 'Bearer ' + auth, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  return { status: response.status, data: await response.json() };
}
async function api(url, method, body, auth) { const r = await req(url, method, body, auth); assert.ok(r.status < 300, JSON.stringify(r)); return r.data; }
try {
  const a = (await api('/projects', 'POST', { type: 'existing_system_setup', title: 'Grow A', systemProfile: { onboardingComplete: true } })).project;
  const b = (await api('/projects', 'POST', { type: 'existing_system_setup', title: 'Grow B', systemProfile: { onboardingComplete: true } })).project;
  const root = '/projects/' + a.id, seed = { crop: 'Lettuce', variety: 'Retry test', packsOnHand: 2 };
  const retries = await Promise.all(Array.from({ length: 6 }, () => api(root + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' })));
  assert.equal(new Set(retries.map(r => r.seed.id)).size, 1);
  assert.equal((await api(root + '/seeds')).seeds.length, 1);
  const saved = retries[0].seed;
  assert.equal((await api(root + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' })).seed.createdAt, saved.createdAt);
  const updated = (await api(root + '/seeds/' + saved.id, 'PATCH', { patch: { notes: 'Keep later edit' }, expectedUpdatedAt: saved.updatedAt })).seed;
  assert.equal((await api(root + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' })).seed.updatedAt, updated.updatedAt);
  assert.equal((await api(root + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' })).seed.notes, 'Keep later edit');
  assert.notEqual((await api('/projects/' + b.id + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' })).seed.id, saved.id);
  assert.notEqual((await api(root + '/seeds', 'POST', { seed: { ...seed, packsOnHand: 3 }, idempotencyKey: 'one-operation' })).seed.id, saved.id);
  const intentional = await Promise.all([api(root + '/seeds', 'POST', { seed }), api(root + '/seeds', 'POST', { seed })]);
  assert.notEqual(intentional[0].seed.id, intentional[1].seed.id);
  const other = { id: member.id + '-other', name: 'Other tester' }, otherToken = issuePipSession({ member: other, subscription });
  assert.equal((await req(root + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' }, otherToken)).status, 404);
  const otherGrow = (await api('/projects', 'POST', { title: 'Other account grow', type: 'existing_system_setup', systemProfile: { onboardingComplete: true } }, otherToken)).project;
  assert.notEqual((await api('/projects/' + otherGrow.id + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' }, otherToken)).seed.id, saved.id);
  const free = issuePipSession({ member, subscription: { active: false, plan: 'free_member' } });
  assert.equal((await req(root + '/seeds', 'POST', { seed, idempotencyKey: 'one-operation' }, free)).status, 402);
  console.log('PASS Concurrent create retries save once; replay preserves later edits; operation, grow and account isolation; access checks');
  if (process.argv.includes('--ui')) {
    const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE || 'playwright');
    browser = await chromium.launch();
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await context.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.abort());
    const page = await context.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const session = (who = member, auth = token) => page.evaluate(data => window.postMessage(data, location.origin), { type: 'HYDROPIP_PIP_SESSION', sessionToken: auth, member: who, subscription });
    const ready = () => page.waitForFunction(() => document.querySelector('[data-pro-panel=seeds]').getAttribute('aria-busy') === 'false');
    async function openForm() { await page.locator('[data-pro-page=seeds]').click(); if (!await page.locator('[data-rack-key=proSeedForm]').evaluate(e => e.open)) await page.locator('[data-rack-key=proSeedForm]>summary').click(); }
    const field = name => page.locator('#proSeedForm [name=' + name + ']');
    const submit = page.locator('#proSeedForm button[type=submit]');
    const records = async () => (await api(root + '/seeds')).seeds;
    await page.goto(base + '/pip.html?pro=1&projectId=' + a.id + '&focus=seeds'); await session(); await ready(); await openForm();
    await field('crop').fill('Basil'); await field('variety').fill('Double tap');
    let release, writes = 0; const blocked = new Promise(r => release = r);
    await context.route('**/seeds', async route => { if (route.request().method() === 'POST') { writes++; await blocked; } await route.continue(); });
    const savedResponse = page.waitForResponse(r => r.url().endsWith('/seeds') && r.request().method() === 'POST');
    await submit.evaluate(el => { el.click(); el.click(); });
    assert.equal(await submit.isDisabled(), true); release(); await savedResponse;
    await page.waitForFunction(() => !document.querySelector('#proSeedForm button[type=submit]').disabled);
    assert.equal(writes, 1); assert.equal((await records()).filter(s => s.variety === 'Double tap').length, 1);
    await context.unroute('**/seeds');
    console.log('PASS Rapid double tap disables the form and saves one record');

    await openForm(); await field('crop').fill('Basil'); await field('source').fill('Seed company'); await field('packsOnHand').fill('4'); await field('notes').fill('Grow A unfinished');
    await page.locator('#proProjectSelect').selectOption(b.id); await ready(); await openForm(); await field('crop').fill('Cilantro'); await field('notes').fill('Grow B unfinished');
    await page.locator('#proProjectSelect').selectOption(a.id); await ready();
    assert.equal(await field('notes').inputValue(), 'Grow A unfinished'); assert.equal(await field('source').inputValue(), 'Seed company'); assert.equal(await field('packsOnHand').inputValue(), '4');
    await page.reload(); await session(); await ready(); assert.equal(await field('notes').inputValue(), 'Grow A unfinished');
    await session(other, otherToken); await ready(); assert.equal(await field('notes').inputValue(), '');
    await session(); await ready(); await page.locator('#proProjectSelect').selectOption(a.id); await ready(); assert.equal(await field('notes').inputValue(), 'Grow A unfinished');
    console.log('PASS Draft fields survive grow switch and reload, and stay separated across accounts');

    const attempts = []; let dropped = false;
    await context.route('**/seeds', async route => { if (route.request().method() === 'POST') { attempts.push(route.request().postDataJSON()); if (!dropped) { dropped = true; await route.fetch(); return route.abort(); } } await route.continue(); });
    await openForm(); await submit.click(); await page.waitForFunction(() => !document.querySelector('#proSeedForm button[type=submit]').disabled);
    assert.equal(await field('notes').inputValue(), 'Grow A unfinished'); await submit.click();
    await page.waitForFunction(() => !document.querySelector('#proSeedForm button[type=submit]').disabled && document.querySelector('#proSeedForm [name=crop]').value === '');
    assert.equal(attempts.length, 2); assert.equal(attempts[0].idempotencyKey, attempts[1].idempotencyKey);
    assert.equal((await records()).filter(s => s.notes === 'Grow A unfinished').length, 1); await context.unroute('**/seeds');
    console.log('PASS Lost save response preserves draft; retry uses the same operation and creates no duplicate');

    await openForm(); await field('crop').fill('Parsley'); await field('notes').fill('Pending grow A');
    let finish; const pending = new Promise(r => finish = r);
    await context.route('**/seeds', async route => { if (route.request().method() === 'POST') await pending; await route.continue(); });
    const completed = page.waitForResponse(r => r.url().endsWith('/seeds') && r.request().method() === 'POST');
    await submit.click(); await page.locator('#proProjectSelect').selectOption(b.id); await ready();
    assert.equal(await field('notes').inputValue(), 'Grow B unfinished'); await field('notes').fill('Grow B stays intact'); finish(); await completed;
    await page.waitForTimeout(100); assert.equal(await field('notes').inputValue(), 'Grow B stays intact');
    await context.unroute('**/seeds'); await page.locator('#proProjectSelect').selectOption(a.id); await ready();
    assert.equal(await field('notes').inputValue(), ''); assert.equal((await records()).filter(s => s.notes === 'Pending grow A').length, 1);
    console.log('PASS Pending save clears only its original draft, leaving the other grow untouched');

    const editable = (await api(root + '/seeds', 'POST', { seed: { crop: 'Dill', variety: 'Edit draft' } })).seed;
    await page.reload(); await session(); await ready(); await openForm();
    await page.locator('[data-seed-id="' + editable.id + '"] [data-seed-action=edit]').click();
    await field('notes').fill('Unfinished edit');
    await page.locator('#proProjectSelect').selectOption(b.id); await ready(); await page.locator('#proProjectSelect').selectOption(a.id); await ready();
    assert.equal(await field('id').inputValue(), editable.id); assert.equal(await field('notes').inputValue(), 'Unfinished edit');
    await submit.click(); await page.waitForFunction(() => !document.querySelector('#proSeedForm button[type=submit]').disabled && document.querySelector('#proSeedForm [name=id]').value === '');
    assert.equal((await records()).find(s => s.id === editable.id).notes, 'Unfinished edit');
    console.log('PASS Restored seed edits retain their record identity and version');

    await page.locator('#proProjectSelect').selectOption(b.id); await ready(); await openForm();
    await page.locator('#proSeedForm').getByRole('button', { name: 'Discard draft', exact: true }).click();
    await page.reload(); await session(); await ready(); await page.locator('#proProjectSelect').selectOption(b.id); await ready(); assert.equal(await field('notes').inputValue(), '');
    assert.deepEqual(errors, []); await page.screenshot({ path: path.join(out, 'seed-save-phone.png'), fullPage: true });
    console.log('PASS Explicit discard clears the draft; no uncaught browser errors');
    await page.evaluate(() => { Storage.prototype.setItem = function() { throw Error('Storage unavailable'); }; Storage.prototype.getItem = function() { throw Error('Storage unavailable'); }; Storage.prototype.removeItem = function() { throw Error('Storage unavailable'); }; });
    await openForm(); await field('crop').fill('Mint'); await field('notes').fill('Memory fallback');
    await page.locator('#proProjectSelect').selectOption(a.id); await ready(); await page.locator('#proProjectSelect').selectOption(b.id); await ready();
    assert.equal(await field('notes').inputValue(), 'Memory fallback');
    console.log('PASS In-memory draft fallback survives grow switching when browser storage is unavailable');
  }
} finally { await browser?.close(); await new Promise(resolve => server.close(resolve)); await memory.closeMemoryForTests(); }

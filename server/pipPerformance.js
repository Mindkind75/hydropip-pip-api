import { AsyncLocalStorage } from 'node:async_hooks';

const activeTiming = new AsyncLocalStorage();
const phases = ['memory', 'retrieval', 'save', 'client', 'quota', 'model', 'tools', 'followup', 'relevance', 'repair'];
const milliseconds = value => Math.max(0, Math.round(value));
const tokens = value => Number.isSafeInteger(value) && value >= 0 ? value : 0;

export function createPipTiming() {
  const started = performance.now();
  const durations = Object.fromEntries(phases.map(phase => [phase, 0]));
  const providerCalls = [];
  return {
    run(work) { return activeTiming.run(this, work); },
    async measure(phase, work) {
      const start = performance.now();
      try { return await work(); }
      finally { durations[phase] += performance.now() - start; }
    },
    measureSync(phase, work) {
      const start = performance.now();
      try { return work(); }
      finally { durations[phase] += performance.now() - start; }
    },
    async provider(phase, work) {
      const start = performance.now();
      let response;
      try { response = await this.measure(phase, work); return response; }
      finally {
        providerCalls.push({
          phase, durationMs: milliseconds(performance.now() - start),
          status: response ? 'completed' : 'failed',
          inputTokens: tokens(response?.usage?.input_tokens),
          outputTokens: tokens(response?.usage?.output_tokens),
          cachedInputTokens: tokens(response?.usage?.input_tokens_details?.cached_tokens),
          reasoningTokens: tokens(response?.usage?.output_tokens_details?.reasoning_tokens)
        });
      }
    },
    snapshot() {
      return { answerMs: milliseconds(performance.now() - started),
        ...Object.fromEntries(phases.map(phase => [phase + 'Ms', milliseconds(durations[phase])])),
        providerCalls: providerCalls.map(call => ({ ...call })) };
    }
  };
}

export function timePipStage(phase, work) {
  const timing = activeTiming.getStore();
  return timing ? timing.measure(phase, work) : work();
}
export function timePipStageSync(phase, work) {
  const timing = activeTiming.getStore();
  return timing ? timing.measureSync(phase, work) : work();
}
export function timePipProvider(phase, work) {
  const timing = activeTiming.getStore();
  return timing ? timing.provider(phase, work) : work();
}

// Only timings and fixed application outcomes go to logs, never grow context,
// messages, account identifiers, session tokens, or provider error bodies.
export function logPipTiming({ status, serverMs, preAnswerMs, answer, mode }) {
  if (process.env.PIP_LOG_PERFORMANCE === 'false') return;
  console.info('[pip-performance] ' + JSON.stringify({ status, mode: mode || 'pre_answer',
    serverMs: milliseconds(serverMs), preAnswerMs: milliseconds(preAnswerMs ?? serverMs),
    postAnswerMs: answer ? milliseconds(serverMs - preAnswerMs - answer.answerMs) : 0,
    ...(answer || {}) }));
}

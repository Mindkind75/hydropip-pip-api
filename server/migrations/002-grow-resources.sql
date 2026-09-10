-- Additive only: existing account estimates and grow profiles remain untouched.
ALTER TABLE pip_projects ADD COLUMN IF NOT EXISTS grow_resources jsonb NOT NULL DEFAULT '{}'::jsonb;

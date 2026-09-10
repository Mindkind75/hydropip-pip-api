CREATE TABLE IF NOT EXISTS pip_action_reviews (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES pip_projects(id) ON DELETE CASCADE,
  user_id text NOT NULL REFERENCES pip_users(id) ON DELETE CASCADE,
  review jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS pip_action_reviews_owner_idx ON pip_action_reviews(user_id, project_id, created_at DESC);

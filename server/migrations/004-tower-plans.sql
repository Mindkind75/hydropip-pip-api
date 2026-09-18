create table if not exists pip_tower_plans (
  project_id text primary key references pip_projects(id) on delete cascade,
  user_id text not null references pip_users(id) on delete cascade,
  plan jsonb not null default '{}'::jsonb
);

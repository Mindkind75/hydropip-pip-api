-- Additive migration. Existing conversation names, messages and starter markers stay intact.
begin;
alter table pip_conversations add column if not exists topic_key text;
alter table pip_conversations add column if not exists topic_summary jsonb not null default '{}'::jsonb;
alter table pip_conversations add column if not exists auto_created boolean not null default false;
alter table pip_messages add column if not exists exchange_id text;
create index if not exists pip_messages_exchange_idx on pip_messages(user_id, project_id, exchange_id);
create index if not exists pip_messages_page_idx on pip_messages(conversation_id, created_at desc, id desc);
create table if not exists pip_chat_exchanges (
  id text not null,
  user_id text not null references pip_users(id) on delete cascade,
  project_id text not null references pip_projects(id) on delete cascade,
  conversation_id text references pip_conversations(id) on delete set null,
  origin_conversation_id text references pip_conversations(id) on delete set null,
  last_move_from text,
  last_mutation_id text,
  request_hash text not null,
  status text not null default 'running',
  reply jsonb,
  revision integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);
create index if not exists pip_chat_exchanges_project_idx on pip_chat_exchanges(project_id, created_at desc);
create table if not exists pip_schema_migrations (version text primary key, applied_at timestamptz not null default now());
insert into pip_schema_migrations(version) values ('001-conversation-routing') on conflict do nothing;
commit;

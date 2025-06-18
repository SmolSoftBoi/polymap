-- Maps
create table public.maps (
  id         uuid primary key default gen_random_uuid(),
  owner_id   uuid references auth.users not null,
  name       text not null,
  visibility text check (visibility in ('private','invite','public')) default 'private',
  created_at timestamptz default now()
);

-- Memberships
create table public.memberships (
  map_id  uuid references public.maps on delete cascade,
  user_id uuid references auth.users,
  role    text check (role in ('owner','editor','viewer')) default 'viewer',
  primary key (map_id, user_id)
);

-- Nodes
create table public.nodes (
  id       uuid primary key default gen_random_uuid(),
  map_id   uuid references public.maps on delete cascade,
  label    text,
  icon     text,
  pronouns text,
  metadata jsonb
);

-- Edges
create table public.edges (
  id      uuid primary key default gen_random_uuid(),
  map_id  uuid references public.maps on delete cascade,
  source  uuid references public.nodes on delete cascade,
  target  uuid references public.nodes on delete cascade,
  type    text,
  since   date
);

-- ✅ Row-Level Security
alter table public.maps  enable row level security;
alter table public.nodes enable row level security;
alter table public.edges enable row level security;

create policy "read-own-or-member" on public.maps
  for select using (
    owner_id = auth.uid()
    or exists (select 1 from public.memberships m
               where m.map_id = id and m.user_id = auth.uid())
  );

create policy "owner-can-all" on public.maps
  for all using (owner_id = auth.uid());

create table if not exists public.blog_admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.blog_admins enable row level security;
drop policy if exists "Admins can read their own allowlist record" on public.blog_admins;
create policy "Admins can read their own allowlist record"
  on public.blog_admins for select to authenticated
  using (user_id = auth.uid());
grant select on public.blog_admins to authenticated;

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null,
  excerpt text not null default '',
  content text not null,
  category text not null check (category in ('digital-marketing', 'full-stack')),
  cover_image_url text,
  cover_image_path text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  author_id uuid not null references auth.users (id),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check ((status = 'draft' and published_at is null) or (status = 'published' and published_at is not null))
);

create index if not exists blog_posts_public_listing_idx
  on public.blog_posts (category, published_at desc)
  where status = 'published';

alter table public.blog_posts enable row level security;
drop policy if exists "Published posts are public and admins can read all posts" on public.blog_posts;
create policy "Published posts are public and admins can read all posts"
  on public.blog_posts for select to anon, authenticated
  using (
    status = 'published'
    or exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  );

drop policy if exists "Admins can create blog posts" on public.blog_posts;
create policy "Admins can create blog posts"
  on public.blog_posts for insert to authenticated
  with check (
    exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
    and author_id = auth.uid()
  );

drop policy if exists "Admins can update blog posts" on public.blog_posts;
create policy "Admins can update blog posts"
  on public.blog_posts for update to authenticated
  using (
    exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  );

drop policy if exists "Admins can delete blog posts" on public.blog_posts;
create policy "Admins can delete blog posts"
  on public.blog_posts for delete to authenticated
  using (
    exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  );

create or replace function public.set_blog_posts_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = pg_catalog.now();
  return new;
end;
$$;

drop trigger if exists set_blog_posts_updated_at on public.blog_posts;
create trigger set_blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_blog_posts_updated_at();

grant select on public.blog_posts to anon, authenticated;
grant insert, update, delete on public.blog_posts to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-images',
  'blog-images',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Blog cover images are public" on storage.objects;
create policy "Blog cover images are public"
  on storage.objects for select to public
  using (bucket_id = 'blog-images');

drop policy if exists "Admins can upload blog cover images" on storage.objects;
create policy "Admins can upload blog cover images"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'blog-images'
    and exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  );

drop policy if exists "Admins can update blog cover images" on storage.objects;
create policy "Admins can update blog cover images"
  on storage.objects for update to authenticated
  using (
    bucket_id = 'blog-images'
    and exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  )
  with check (
    bucket_id = 'blog-images'
    and exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  );

drop policy if exists "Admins can delete blog cover images" on storage.objects;
create policy "Admins can delete blog cover images"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'blog-images'
    and exists (
      select 1 from public.blog_admins
      where blog_admins.user_id = auth.uid()
    )
  );

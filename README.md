# Polymap

Enable Corepack before installing dependencies:

```bash
corepack enable
```

Use Yarn commands to work across all workspaces:

```bash
yarn dev
yarn lint --fix
yarn typecheck
yarn test
yarn e2e:ci
yarn build
```

## Environment Variables

Create an `.env.local` file inside `apps/web` and define Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

Without these values the application will fail to start.

See [docs/architecture.md](docs/architecture.md) for an overview of the monorepo and [docs/styleguide.md](docs/styleguide.md) for coding standards.


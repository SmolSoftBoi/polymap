# Architecture Overview

This repository is a Yarn workspaces monorepo. The root `package.json` manages common dependencies and scripts for all workspaces.

## Directory Structure

- `apps/` – application source code. Currently contains `web`, a Next.js 15 project.
- `scripts/` – reusable Node.js utilities.
- `supabase/` – configuration for local Supabase development.

Each workspace defines its own `package.json` with scripts for development, linting, type checking, testing and building.

### Web App

The `apps/web` workspace is a Next.js 15 application written in TypeScript. It uses Tailwind CSS for styling and Vitest for unit tests. Playwright powers the end‑to‑end tests. React components follow a functional style with named exports.

### Supabase

The `supabase` folder contains settings for running a local Supabase stack. Environment files and migrations are excluded from version control and must not be accessed by automated agents.


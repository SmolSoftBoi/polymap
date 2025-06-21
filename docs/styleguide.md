# Polymap Style Guide

This guide summarises the UI and code standards used across the monorepo.

## Code

- Use TypeScript with `strict` and `noUncheckedIndexedAccess` enabled.
- Prefer functional React components and hooks. Avoid `class` components.
- Export all components and utilities by name—no default exports.
- Run `yarn lint --fix` before committing. ESLint and Prettier enforce formatting rules.
- Tailwind classes must be sorted with the `@tailwindcss/typography` plugin.
- Keep scripts under `scripts/` small and provide a `--help` flag with `yargs`.

## UI

- Style components with Tailwind CSS. Keep the generated bundle under 200 KB gzipped.
- Provide a Storybook story for each new component.
- Use `react-force-graph` for network visualisations. Do not bundle `three` directly.
- Aim for a Lighthouse performance score above 90 in CI (`yarn lhci autorun`).

## Testing

- Unit tests run with Vitest and jsdom.
- Snapshot tests reside in `vitest/__snapshots__` and run via `yarn test --run vitest/__snapshots__`.
- End-to-end tests run with Playwright (`yarn e2e:ci`).

## Documentation

Store documentation in `/docs` and keep this style guide referenced from the root `AGENTS.md` file.

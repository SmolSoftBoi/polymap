## ✨ Purpose

Guidance for OpenAI Codex and other autonomous agents working in this repo.  
Focus on **Next.js 15 + TypeScript** monorepo using **Yarn** workspaces.

---

## 🖋️ Code Style

- Run `yarn lint` (ESLint + Prettier) and fix issues automatically with `--fix`.
- Tailwind classes must be sorted by `@tailwindcss/typography` plugin order.
- No default exports in React components—use named exports only.
- Prefer functional components + hooks; no legacy `class extends React.Component`.
- Enforce `strict` & `noUncheckedIndexedAccess` in `tsconfig.json`.

---

## 🧪 Testing

1. Unit tests: `yarn test` (vitest + jsdom).
2. Component snapshots: `yarn test --run vitest/__snapshots__`.
3. End-to-end: `yarn e2e:ci` (Playwright).  
   All three stages **must pass** before pushing or opening a PR.

---

## 🛠️ Build / CI

- **Dev build:** `yarn dev`.
- **Prod build:** `yarn build && yarn start -p 0`.
- Agent should run `yarn typecheck` before committing.

---

## 🔐 Protected Files

The agent **must never** read or write:

- `.env*`, `supabase/.env*`
- `supabase/migrations/*`
- `public/user-uploads/*`
- Any file > 2 MB

---

## 💬 Commit & PR Conventions

- **Commit:** Conventional Commits (`feat:`, `fix:`, `chore:` …).
- **PR title:** `[Codex] <concise description>`.
- Include a “## Test Plan” section summarising which Yarn scripts passed.

---

## 🤖 Approval Mode

Default to `suggest`.  
Allowed to escalate to `auto-edit` **only** when:

- All tests pass _and_
- Modified files scoped to `/app`, `/components`, or `/utils`.

---

## ✅ Safe Commands

```bash
yarn lint --fix
yarn test
yarn e2e:ci
yarn build
git add -A && git commit -m "<msg>"
```

---

## 📃 References

See `/docs/architecture.md` for project overview and `/docs/styleguide.md` for detailed UI standards.

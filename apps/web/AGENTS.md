## 🎨 Component rules

- Use `react-force-graph` for all network visualisations.
- Do **not** bundle `three` directly; rely on the package’s peer dependency.
- Every new component needs a Storybook story (`*.stories.tsx`).

## ⚡ Performance budget

- Web bundle < 200 KB gzipped.
- Lighthouse score ≥ 90 on “Performance” in CI (`yarn lhci autorun`).

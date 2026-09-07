// DistroMap scoring — pure, explainable, no dependencies.
// fit = audienceOverlap (0..1) * reachWeight * integrationEase, each factor reported.

const REACH_WEIGHT = { S: 0.5, M: 0.75, L: 1.0, XL: 1.15 };
const INTEGRATION_EASE = {
  content: 1.0, community: 1.0, affiliate: 0.95, widget: 0.9, card: 0.9, bot: 0.85,
  event: 0.8, store: 0.7, partnership: 0.65, "mini-app": 0.6, spot: 0.55, api: 0.6,
};

export function scoreSurface(surface, targetTags) {
  const target = new Set(targetTags.map((t) => t.toLowerCase()));
  const matched = surface.audience.filter((t) => target.has(t.toLowerCase()));
  const overlap = target.size ? matched.length / target.size : 0;
  const reach = REACH_WEIGHT[surface.reach] ?? 0.5;
  const ease = Math.max(...surface.integration.map((i) => INTEGRATION_EASE[i] ?? 0.5));
  const score = Math.round(overlap * reach * ease * 100);
  return {
    id: surface.id,
    name: surface.name,
    score,
    factors: { overlap: +overlap.toFixed(2), matched, reach: surface.reach, reachWeight: reach, ease, easiestIntegration: surface.integration.find((i) => INTEGRATION_EASE[i] === ease) },
    wayIn: surface.wayIn,
    example: surface.example,
  };
}

export function rankSurfaces(surfaces, targetTags, limit = 12) {
  return surfaces
    .map((s) => scoreSurface(s, targetTags))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function toPlaybook(product, targetTags, ranked) {
  const lines = [
    `# Distribution playbook — ${product}`,
    ``,
    `Target user tags: ${targetTags.join(", ")}`,
    ``,
    `## Shortlist`,
    ``,
    `| # | Surface | Fit | Reach | Easiest way in | Why |`,
    `|---|---|---|---|---|---|`,
    ...ranked.map((r, i) => `| ${i + 1} | ${r.name} | ${r.score} | ${r.factors.reach} | ${r.factors.easiestIntegration} | matched: ${r.factors.matched.join(", ")} |`),
    ``,
    `## Pitch angles`,
    ``,
    ...ranked.slice(0, 5).map((r) => `### ${r.name}\n${r.wayIn}${r.example ? `\n\n_Precedent: ${r.example}_` : ""}\n`),
    `## KPI to negotiate`,
    ``,
    `Ask for qualified actions (sign-ups, tracked portfolios, completed flows), never impressions.`,
  ];
  return lines.join("\n");
}

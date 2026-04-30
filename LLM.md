# LLM.md - Zoo Industries

## Project

Marketing site for Zoo Industries Inc & Zoo Labs Foundation (501(c)(3))
— the open AI research network behind DeAI, DeSci, and the Zen model family.

- URL: https://zoo.industries
- Stack: Next.js 15 (App Router, static export) + React 19 + TypeScript + Tailwind 4 + Framer Motion
- Dev: `pnpm dev` (port 8080)
- Build: `pnpm build` (static export to `out/`)
- Deploy: GitHub Pages (auto on push to `main`)

## Single Source of Truth

`site.config.ts` is the canonical brand data file. Fork it (and the public
assets in `public/`) to rebrand the entire site. New components MUST pull
brand strings from `siteConfig` rather than hardcoding "Zoo".

## Architecture

Next.js App Router with `output: 'export'` for static GitHub Pages hosting.
All marketing pages live under a `(marketing)` route group sharing a common
layout (Navbar + Footer + ChatWidget).

```
app/
  layout.tsx                    # Root layout, theme provider, fonts
  globals.css
  (marketing)/
    layout.tsx                  # Navbar + Footer + GlobalChatWidget
    page.tsx                    # Homepage
    about/, models/, careers/, contact/, research/, ...
    products/[slug]/            # Dynamic product pages
components/
  ui/                           # shadcn/ui primitives (Radix)
  Navbar.tsx, Footer.tsx, Hero.tsx, Logo.tsx
  GlobalChatWidget.tsx          # AI chat (SSE streaming)
  Leadership.tsx, CaseStudies.tsx, ResearchHighlights.tsx
  Contact.tsx, CommandPalette.tsx
  navigation/                   # Navbar containers, dropdowns
  team/                         # Team member cards
contexts/                       # ThemeContext (legacy; prefer next-themes)
lib/
  data/                         # products.ts, zen-models.ts
  constants/                    # navigation.ts, iconMappings.ts
  utils.ts
hooks/
public/
  CNAME                         # zoo.industries
  llms.txt                      # LLM-readable site summary
  zoo-logo.svg                  # Brand mark from @zooai/brand
```

## Theme System

Three modes (light / dark / system) via next-themes. Brand is monochrome by
default (black / white / neutral grays). Zoo accent palette available from
`@zooai/brand` if needed: yellow #FCF006, magenta #EA018E, cyan #01ACF1.

## Verified Stats

| Metric | Verified Count | Display Label |
|--------|---------------|---------------|
| Total repos across all orgs | ~2,804 | 2,500+ OSS Projects |
| Unique .tex papers | ~134 | 130+ Research Papers |
| AI model repos (zenlm) | 48 | 45+ AI Models |
| Modalities | 7 | text, vision, video, audio, 3D, code, agents |
| Max params | 1T+ | zen4-max (MoE) |

## AI Models (Zen Family)

10 model families, 45+ models — co-developed with Zen LM partners:

| Family | Examples |
|--------|----------|
| Foundation | zen-nano (0.6B), zen-eco (4B), zen (8–32B), zen-pro (32B), zen-max (1T+ MoE), zen-next |
| Zen 4 | zen4-mini (8B), zen4-pro (80B MoE), zen4 (744B MoE), zen4-max (1.04T MoE), zen4-ultra |
| Code | zen4-coder-flash, zen4-coder, zen4-coder-pro, zen-coder |
| Vision & Image | zen-vl, zen-omni, zen-artist, zen-artist-edit, zen-designer |
| Video | zen-director, zen-video, zen-video-i2v, zen-voyager |
| Audio & Speech | zen-musician, zen-foley, zen-dub, zen-dub-live, zen-scribe, zen-translator, zen-live |
| 3D & Spatial | zen-3d, zen-world |
| Safety | zen-guard, zen-guard-gen, zen-guard-stream |
| Embedding | zen-embedding, zen-reranker |
| Agents | zen-agent |

## Research Papers

130+ unique papers across 4 partner orgs. Zoo Labs Foundation papers track DeAI,
DeSci, DSO (Decentralized Semantic Optimization), and PoAI (Proof of AI).

| Org | Repo |
|-----|------|
| Zoo Labs | `zoofoundation/papers` |
| Zen LM | `zenlm/papers` |
| Lux | `luxfi/papers` |
| Hanzo (partner) | `hanzoai/papers` |

## Brand Policy: No Upstream References

**CRITICAL**: All public-facing docs must present Zen models as our own family.
- Never reference upstream model names (GLM, Kimi, Qwen3, Moonshot, Zhipu, etc.)
- Keep factual specs (params, context, architecture type) accurate
- Brand methodology: **Zen MoDE (Mixture of Diverse Experts)**

## Key GitHub Orgs

| Org | Notable |
|-----|---------|
| zooai | Zoo Network apps, libs, contracts (canonical) |
| zoofoundation | Foundation papers, ZIPs, governance |
| zoo-labs | Legacy foundation repos |
| zenlm | Zen model family weights and configs |
| luxfi | Settlement layer (partner) |
| hanzoai | Infrastructure partner |

## Key Protocols

- **DSO** (Decentralized Semantic Optimization) — ZIP-001
- **PoAI** (Proof of AI) — ZIP-002
- **ZIPs** — Zoo Improvement Proposals at zips.zoo.ngo

## Tokens

- **$ZOO** — fixed-supply governance token (100% minted at genesis)
- **$AI** — mineable compute token via partner network

## Rules for AI Assistants

1. **ALWAYS** update LLM.md with significant discoveries
2. **NEVER** commit symlinked files (.AGENTS.md, CLAUDE.md, etc.) — they're in .gitignore
3. **NEVER** create random summary files — update THIS file
4. Use `pnpm` for Node.js, `uv` for Python
5. Pull brand strings from `site.config.ts`, never hardcode
6. Zen models: present as our own family — never reference upstream names

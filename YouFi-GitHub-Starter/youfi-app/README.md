# YouFi App (Next.js + MiniKit • Base L2)

Frontend oficial do YouFi. Integra **OnchainKit/MiniKit**, UX *gasless* (ERC‑4337) e Base L2.

## Stack
- Next.js (App Router) + TypeScript + Tailwind
- @coinbase/onchainkit (MiniKit/Wagmi/React Query)
- Base & Base Sepolia
- CI (GitHub Actions)

## Setup
```bash
pnpm i
cp .env.example .env.local
pnpm dev
```

## Variáveis
Veja `.env.example`. Nunca comite secrets.

## Scripts
- `pnpm dev` — local dev
- `pnpm build` — build
- `pnpm start` — prod
- `pnpm lint`, `pnpm typecheck`, `pnpm format`

## Estrutura
```
app/            # rotas (App Router)
src/components/ # ui, módulos
src/lib/        # providers, chains, onchain helpers
public/         # assets
.github/        # ci, templates
```

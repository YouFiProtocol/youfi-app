# YouFi × Base + Self ZK — Starter

Monorepo de referência com **Next.js + OnchainKit (MiniKit)**, **Hardhat (Solidity)** e **FastAPI**.

## Estrutura
```
youfi-base-starter/
  apps/web/           # Next.js App Router + OnchainKit
  contracts/          # Hardhat + OpenZeppelin + Base (Sepolia/Mainnet)
  backend/            # FastAPI (PIX, ZK challenge stubs)
  .github/workflows/  # CI básico
```

## Como usar
1) Clone e instale
```bash
pnpm i -g pnpm
# web
cd apps/web && pnpm install && cd ../..
# contracts
cd contracts && pnpm install && cd ..
# backend
python -m venv .venv && source .venv/bin/activate
pip install -r backend/requirements.txt
```

2) Configure variáveis `.env` (ver `.env.example` na raiz e subprojetos).

3) Dev
```bash
# Frontend
cd apps/web && pnpm dev

# Backend
uvicorn backend.app.main:app --reload

# Contracts
cd contracts && pnpm hardhat compile
```

## Deploy de teste (Base Sepolia)
- Configure `BASE_SEPOLIA_RPC`, `PRIVATE_KEY` em `contracts/.env.contracts`
- `pnpm hardhat run script/deploy.ts --network baseSepolia`

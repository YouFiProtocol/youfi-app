# YouFi Protocol

[![Base Network](https://img.shields.io/badge/Base-L2%20Blockchain-0052FF?style=for-the-badge&logo=ethereum&logoColor=white)](https://base.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 
[![Coinbase CDP](https://img.shields.io/badge/Coinbase-CDP-0052FF?style=for-the-badge&logo=coinbase&logoColor=white)](https://www.coinbase.com/developer-platform)

> **Transformamos metas financeiras em reputação na Web3** usando **Base L2**, **Zero-Knowledge Identity** (Self SDK) e **UX gasless** (ERC-4337) para máxima privacidade e usabilidade.

**Plataforma brasileira que combina objetivos financeiros inteligentes com tecnologia blockchain. Interface mobile-first, pool USDC (~4,10% a.a.), contratos automáticos e SBT soul-bound para reputação.**

## Nossos Projetos

| Repositório | Descrição | Tecnologia | Status |
|-------------|-----------|------------|---------|
| **[YouFi App](https://github.com/YouFiProtocol/youfi-app)** | Mini App PWA na Base L2 | Next.js + MiniKit + Wagmi | `ATIVO` |
| **[YouFi Contracts](https://github.com/YouFiProtocol/youfi-contracts)** | Smart Contracts e testes | Foundry + Solidity | `ATIVO` |
| **[YouFi Docs](https://github.com/YouFiProtocol/youfi-docs)** | Documentação técnica | Docusaurus + MDX | `DESENVOLVIMENTO` |
| **[YouFi Infra](https://github.com/YouFiProtocol/youfi-infra)** | DevOps e automação | Docker + N8n + NGINX | `DESENVOLVIMENTO` |

## Stack Tecnológico

### Frontend & Mobile
```typescript
// Core Framework
Next.js 15+ with App Router
React 19+ with TypeScript 5.0
Tailwind CSS 3.4+ (Design System)
PWA com Service Workers

// Web3 & Blockchain  
Wagmi v2 + Viem (Ethereum interactions)
Coinbase MiniKit SDK + OnchainKit (Base L2)
Self SDK (Zero-Knowledge Identity)
ERC-4337 Smart Accounts + Paymaster
WalletConnect v2 (Universal wallet)


Blockchain & Infrastructure

// Primary Network
Base L2 (Coinbase Layer 2)
ERC-4337 Account Abstraction + Paymaster gasless
USDC Pool de Recompensas (~4,10% a.a.)
Self ZK Identity verification

// Smart Contracts Core
YouFiSBT: Soul-bound tokens para metas
YouFiRegistry: Políticas ZK + score verificado
YouFiTreasury: Pool USDC + rendimentos
YouFiPaymaster: Sponsor gas (onboarding + 1º depósito)
Foundry para testes + deploy + auditoria


Backend & Integrações

# APIs & Services
FastAPI com Python 3.11+
PostgreSQL 15+ (banco principal)
Redis para cache e sessões
Celery + RabbitMQ (async tasks)

# IA & Machine Learning + Identity
Self SDK para ZK proofs (uniqueHuman + age≥18)
OpenAI GPT-4 para recomendações financeiras
Scikit-learn para análise preditiva comportamental  
TensorFlow para detecção anti-Sybil patterns
APIs brasileiras: PIX webhooks + Open Finance


Principais Funcionalidades

Aplicativo YouFi Mobile (PWA)





Identidade Privada: Self SDK para ZK proofs (unicidade + idade) sem KYC



Metas Gamificadas: SBT soul-bound + sistema anti-Sybil com rate-limits



Pool de Recompensas: ~4,10% a.a. em USDC (estimado, pode variar)



UX Gasless: ERC-4337 Paymaster sponsors gas para onboarding



Marketplace Social: Apoio colaborativo com provas ZK + selective disclosure



PIX Integration: Depósito direto PIX → USDC com webhooks automáticos

Dashboard Empresarial (Web)


Gestão Avançada: Portfolio multi-assets com otimização DeFi


Automação Smart: Contratos inteligentes para metas e recompensas


Cross-Chain: Integração Ethereum, Polygon, Arbitrum


Business Intelligence: Insights financeiros com IA preditiva


Marketplace: Usuários podem apoiar metas públicas em USDC (com limites anti‑Sybil).

Infraestrutura Zero-Knowledge + Base L2


ZK Identity: Self SDK para provas sem revelar dados pessoais (PII)


Taxa Ultra-baixa: < $0,01 por transação (Paymaster sponsors key actions)


Anti-Sybil: requireUniqueHuman() + supportCapPerHuman() on-chain


Smart Verification: Verifier contracts validam ZK proofs automaticamente


USDC Treasury: Pool integrada ao ecossistema Base/Coinbase (~4,10% a.a.)


Selective Disclosure: Apenas atributos booleanos chegam aos contratos

Métricas de Impacto

# Resultados Beta Hedera (Migrados para Base)
Apoio Total: R$ 127.000+ (em migração para USDC)
Taxa de Sucesso: 89% das metas concluídas
SBTs Emitidos: 1.247 certificações soul-bound
Usuários Verificados: 500+ com Self ZK identity
Economia Média: R$ 340/mês por usuário

# Projeções Base L2 (2025)
Meta Launch: 1.000 usuários / R$ 500k TVL (1º mês)
Meta Scale: 10.000+ usuários ativos mensais
TVL Target: $10M+ em pool USDC
Yield Pool: ~4,10% a.a. (pode variar)
Mercado Alvo: 54M+ jovens adultos brasileiros


Roadmap & Milestones

S1-S2 (8 semanas) - Fundamentos Base + ZK EM PROGRESSO


Migração Hedera → Base L2 (chainId Base mainnet/Sepolia)


Self SDK integration (ZK unicidade + idade≥18)


ERC-4337 AA + Paymaster (gasless onboarding + 1º depósito)


YouFi Contracts: SBT + Registry + Treasury + Paymaster

PIX → USDC integration com webhooks

S3-S4 (8 semanas) - Social + Beta Launch PLANEJADO

Pool USDC recompensas (~4,10% a.a.) + dashboard ganhos

Marketplace social: metas públicas + apoio ZK rate-limited

Frames (Farcaster) para criar/celebrar metas

Beta fechado: 100-300 usuários + auditoria leve

Telemetria + UX adjustments

Go-Live (Q2 2025) - Public Launch ESTRATÉGICO

Base App destaque + campanha influenciadores

Meta: 1k usuários / R$ 500k TVL no 1º mês

KPIs: MAU, taxa conclusão, aporte recorrente, % ações Self-verified

Auditoria completa contratos + security review

Expansão orgânica: Base ecosystem partnerships

Scale Phase (Q3-Q4 2025) - Growth & Revenue FUTURO

Cross-chain bridges (Ethereum, Polygon, Arbitrum)

IA avançada: planejamento preditivo + anti-Sybil patterns

Token governance + revenue sharing para holders

B2B white-label solutions para fintechs

Expansão LATAM + parcerias bancos tradicionais

Arquitetura Técnica Avançada

Fluxos Zero-Knowledge Critical

Criar Meta com Verificação ZK

// 1. Cliente gera prova ZK (Self SDK)  
const proof = await Self.prove({ 
  uniqueHuman: true, 
  over18: true 
});

// 2. Smart contract valida prova on-chain
await writeContract({
  address: YOUFI_REGISTRY,
  abi: RegistryABI,
  functionName: "verifyAndRegister",
  args: [proof], // Apenas atributos booleanos, zero PII
});

// 3. Mint SBT soul-bound para meta (gasless via Paymaster)
await sponsoredCall({
  target: YOUFI_SBT,
  data: encodeFunctionData("mintGoal", [goalData]),
});


Apoio Social com Rate-Limiting Anti-Sybil

// YouFiRegistry.sol - Políticas ZK on-chain
function requireUniqueHuman(address user) external view {
    require(isVerified[user].uniqueHuman, "Sybil detected");
}

function supportCapPerHuman(address supporter, uint256 period) external view {
    require(
        supportCount[supporter][period] < MAX_SUPPORTS_PER_HUMAN,
        "Support cap exceeded"
    );
}

// Selective disclosure: apenas booleanos chegam ao contrato
struct VerificationStatus {
    bool uniqueHuman;    // ZK proof confirmed
    bool over18;         // Age verification  
    uint256 timestamp;   // Verification time
    // ZERO PII stored on-chain
}


Pool USDC de Recompensas (~4,10% a.a.)

// YouFiTreasury.sol - Integração com Base/Coinbase ecosystem
contract YouFiTreasury {
    IERC20 public constant USDC = IERC20(0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913);
    
    // Depósito PIX → USDC com webhook
    function depositFromPIX(address user, uint256 usdcAmount, bytes32 pixTxId) 
        external onlyAuthorized 
    {
        USDC.safeTransfer(user, usdcAmount);
        emit PIXDeposit(user, usdcAmount, pixTxId);
        
        // Auto-stake na pool de recompensas
        _stakeInRewardPool(user, usdcAmount);
    }
    
    // Rendimento estimado ~4,10% a.a. (pode variar)
    function calculateEstimatedRewards(uint256 principal, uint256 days) 
        external pure returns (uint256) 
    {
        return principal * 410 * days / (10000 * 365); // ~4.10% APY
    }
}


Setup de Desenvolvimento

Pré-requisitos

Node.js 18+ (recomendamos usar nvm)
Git 2.40+
Docker & Docker Compose
Carteira MetaMask ou Coinbase Wallet


Configuração Local

# Clone do repositório
git clone https://github.com/YouFiProtocol/youfi-app
cd youfi-app

# Configuração de ambiente
cp .env.example .env.local
# Configure Base Network, Self SDK, PIX webhooks, USDC pool

# Instalação de dependências
npm install && pip install -r requirements.txt

# Desenvolvimento local
npm run dev          # Frontend (Next.js + Self SDK)
forge test           # Smart contracts testing
npm run contracts:deploy # Deploy Base Sepolia
python manage.py runserver # Backend APIs (PIX + webhooks)
docker-compose up    # Full stack + PostgreSQL + Redis


Variáveis de Ambiente Essenciais

# Base Network + Self SDK
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_BASE_SEPOLIA_RPC=https://sepolia.base.org
SELF_SDK_CLIENT_ID=your_self_client_id
SELF_SDK_SECRET=your_self_secret

# Smart Contracts (Base)
YOUFI_SBT_ADDRESS=0x...
YOUFI_REGISTRY_ADDRESS=0x...
YOUFI_TREASURY_ADDRESS=0x...
YOUFI_PAYMASTER_ADDRESS=0x...

# USDC Pool & PIX Integration
USDC_BASE_ADDRESS=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913
PIX_WEBHOOK_URL=https://youfi.finance/pix/webhook
PIX_PROVIDER_API_KEY=your_pix_key

# Database & Cache
DATABASE_URL=postgresql://user:pass@localhost:5432/youfi
REDIS_URL=redis://localhost:6379

# APIs & ML
OPENAI_API_KEY=your_openai_key
COINBASE_CDP_API_KEY=your_cdp_key


Contribuindo para o Projeto

Como Contribuir

Fork o repositório

Clone sua versão: git clone https://github.com/seu-usuario/youfi-app

Crie uma branch: git checkout -b feature/nova-funcionalidade

Desenvolva seguindo nosso guia de estilo

Teste suas mudanças: npm run test

Commit com mensagens claras: git commit -m "feat: adiciona funcionalidade X"

Push para sua branch: git push origin feature/nova-funcionalidade

Abra um PR detalhando suas mudanças

Áreas de Contribuição

Zero-Knowledge: Self SDK integration, ZK proofs, privacy

Smart Contracts: Solidity, Foundry, ERC-4337, auditoria

Frontend/UX: React, Next.js, Tailwind, PWA mobile-first

DeFi Integration: USDC pools, yield farming, Base ecosystem

Anti-Sybil ML: Detecção patterns, rate-limiting, fraud prevention

PIX Integration: Webhooks, conciliação, fiat onramps

Documentação: ZK flows, contract specs, API references

Links Oficiais
Plataforma
Link
Descrição
Website
youfi.finance
Site oficial e landing page

App Web
app.youfi.finance

Aplicativo principal (PWA)

Documentação

docs.youfi.finance

Docs técnicas e tutoriais

API Reference

api.youfi.finance

Documentação das APIs

Redes Sociais & Comunidade

KPIs & Métricas de Sucesso

KPIs Principais (Base Launch)

# Adoção & Engagement  
MAU (Monthly Active Users): Meta 1k → 10k
Metas Criadas/Usuário: Média 2,3 metas ativas
% Metas Públicas: 34% escolhem marketplace social
Taxa de Retenção: 30/60/90 dias trackado

# Saúde Financeira
TVL em USDC: Meta R$ 500k → $10M 
Taxa de Conclusão: Manter 89%+ sucesso
Aporte Recorrente: R$ 340/mês média por usuário
Pool Yield: ~4,10% a.a. (comunicar como estimativa)

# Confiança & Segurança  
% Ações Self-Verified: Meta 95%+ com ZK proofs
Tentativas Sybil Bloqueadas: Rate-limit effectiveness  
Disputas Resolvidas: < 2% do volume total
Tempo Médio Resolução: < 24h para issues críticos

# Impacto Social
Apoios P2P: Colaboração entre usuários trackada
Compartilhamentos: Viral coefficient no social
Economia Gerada: R$ total poupado via platform
NPS Score: Net Promoter Score > 70


Analytics & Business Intelligence


Behavioral Tracking: Heatmaps de UX, drop-off points, feature adoption
Financial Flow Analysis: PIX→USDC conversion rates, pool performance metrics
ZK Privacy Metrics: Self verification success rates, selective disclosure usage
Anti-Sybil Effectiveness: Pattern detection accuracy, false positive rates
Social Graph Analytics: Network effects, viral mechanics, community health

Parcerias & Investimentos

Para Investidores Estratégicos : contato@youfi.com.br

Revenue Share: Distribuição de taxas da plataforma

Board Participation: Orientação estratégica

Para Instituições Financeiras

Licenciamento White-Label: Customização completa

Integração API: Serviços financeiros plug-and-play

Parceria de Dados: Insights anonimizados para produtos

Co-Marketing: Aquisição conjunta de clientes

Para Parceiros Tecnológicos

Parcerias de Integração: Wallets, protocolos DeFi

Open Source: Desenvolvimento orientado pela comunidade

Colaboração em Pesquisa: Instituições acadêmicas

Programa de Desenvolvedores: SDKs e ferramentas

Contato Profissional

Comunicações Corporativas

Geral: contato@youfi.com.br



Parcerias: partnerships@youfi.com.br

Suporte Técnico: support@youfi.com.br

Imprensa: press@youfi.com.br

Investidores: investors@youfi.com.br

Desenvolvedores & Comunidade


GitHub: @YouFiProtocol

Discord: Comunidade Builders

Stack Overflow: Tag youfi-protocol

Bug Reports: GitHub Issues



Licença & Legal

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes completos.



Compliance & Privacy-First Architecture

LGPD + ZK Privacy: Zero PII storage com Self SDK selective disclosure

Banco Central: Fintech registrada + PIX integration compliance

Smart Contract Audits: Foundry formal verification + external review

USDC Treasury: Compliance com regulação Base/Coinbase ecosystem

Anti-Sybil: Rate-limiting policies + ZK uniqueness proofs on-chain



Segurança & Transparência

Security-First: security.youfi.finance - public audits

Bug Bounty Program: Até $50.000 para vulnerabilidades críticas

Responsible Disclosure: security@youfi.finance com SLA 24h response

Open Source Security: github.com/YouFiProtocol/security-audits

Real-time Monitoring: On-chain analytics + anomaly detection



YouFi Protocol - Democratizando a Liberdade Financeira com Inovação Blockchain

Construído no Brasil 🇧🇷


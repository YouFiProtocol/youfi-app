# Contributing to YouFi

## Branching
- `main` → production
- `develop` → staging
- feature branches: `feat/<scope>`
- fixes: `fix/<scope>`

## Commits
Use **Conventional Commits**:
`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `ci:`

## Pull Requests
- Keep PRs small and focused
- Add tests when applicable
- Update docs and `.env.example` if needed
- Ensure CI passes (build, lint, test)

## Security
Never commit secrets. Use `.env.local` and provider secret stores.

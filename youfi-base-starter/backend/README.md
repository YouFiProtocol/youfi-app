# YouFi Backend (FastAPI)

Endpoints de stub para:
- `/health`
- `/pix/checkout` (gera QR de teste)
- `/pix/webhook` (conciliador)
- `/zk/request` (challenge para provas ZK no cliente)

## Dev
```bash
uvicorn app.main:app --reload
```

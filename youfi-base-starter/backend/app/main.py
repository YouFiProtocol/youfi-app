from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel
import os

app = FastAPI(title="YouFi Backend", version="0.1.0")

class PixCheckoutRequest(BaseModel):
    amount_brl: float

class PixCheckoutResponse(BaseModel):
    qr_code: str
    tx_id: str

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/pix/checkout", response_model=PixCheckoutResponse)
def pix_checkout(req: PixCheckoutRequest):
    # Stub: geraria um QR Code via PSP parceiro
    return PixCheckoutResponse(qr_code="000201010212...", tx_id="DEV-TX-123")

@app.post("/pix/webhook")
async def pix_webhook(request: Request):
    # Stub: conciliar depósito e emitir evento
    payload = await request.json()
    print("PIX webhook:", payload)
    return {"received": True}

class ZKChallenge(BaseModel):
    challenge: str

@app.get("/zk/request", response_model=ZKChallenge)
def zk_request():
    # Stub: emitir challenge para prova ZK (Self SDK no cliente resolve)
    return ZKChallenge(challenge="youfi-self-challenge-abc123")

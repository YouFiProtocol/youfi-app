'use client'

import { useState } from 'react'
import { ConnectWallet, Checkout } from '@coinbase/onchainkit/checkout' // Checkout component exists in OCK
import { chain } from '@/lib/wagmi'

export default function Page() {
  const [amount, setAmount] = useState('10')

  return (
    <main className="mt-10 space-y-6">
      <section className="rounded-2xl border border-white/10 p-6">
        <h2 className="text-lg font-medium">Onboarding gasless + USDC</h2>
        <p className="mt-2 text-sm opacity-80">
          Conecte sua carteira inteligente (AA) e faça um depósito de teste em USDC (Base {chain.id}).
        </p>
        <div className="mt-4 flex items-center gap-3">
          <ConnectWallet />
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 p-6">
        <h3 className="text-base font-semibold">Depósito de teste</h3>
        <div className="mt-3 flex items-center gap-2">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-32 rounded-lg bg-white/5 px-3 py-2 text-sm outline-none"
            placeholder="10"
          />
          <span className="text-sm opacity-70">USDC</span>
        </div>
        <div className="mt-4">
          <Checkout
            mode="payment"
            amount={amount}
            token="USDC"
            receiver="0x0000000000000000000000000000000000000000"
            onSuccess={(tx) => console.log('paid', tx)}
          />
        </div>
      </section>
    </main>
  )
}

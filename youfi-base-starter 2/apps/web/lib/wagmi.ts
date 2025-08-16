'use client';

import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { base, baseSepolia } from 'viem/chains';
import { coinbaseWallet } from 'wagmi/connectors';

const useSepolia = process.env.NEXT_PUBLIC_CHAIN === 'sepolia';
export const chain = useSepolia ? baseSepolia : base;

export const config = createConfig({
  chains: [chain],
  connectors: [
    coinbaseWallet({
      appName: 'YouFi',
      preference: 'smartWalletOnly',
      version: '4',
    }),
  ],
  storage: createStorage({ storage: cookieStorage }),
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
});

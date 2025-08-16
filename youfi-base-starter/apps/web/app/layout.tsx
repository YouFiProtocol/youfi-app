import './globals.css'
import Providers from '@/providers/Providers'

export const metadata = {
  title: 'YouFi × Base',
  description: 'Disciplina vira reputação. Reputação vira crédito.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="mx-auto max-w-4xl p-6">
          <header className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">YouFi × Base</h1>
            <span className="text-xs opacity-70">alpha • Base {process.env.NEXT_PUBLIC_CHAIN === 'sepolia' ? 'Sepolia' : 'Mainnet'}</span>
          </header>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}

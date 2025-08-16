import { Web3Provider } from '../providers/Web3Provider'
import { Header } from '@/components/layout/Header'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-youfi-secondary">
        <Web3Provider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </Web3Provider>
      </body>
    </html>
  )
}
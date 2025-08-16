import Link from 'next/link'
import { WalletIcon, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-gray-800 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold text-white">
            YouFi
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/goals" className="text-sm text-gray-300 hover:text-white">
                  Goals
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-sm text-gray-300 hover:text-white">
                  Rewards
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-youfi-primary px-4 py-2 text-sm font-medium text-white hover:bg-youfi-primary/90">
            <WalletIcon className="h-4 w-4" />
          </button>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  )
}
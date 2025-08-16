import { WalletIcon } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-youfi-secondary/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-white font-bold">YouFi</span>
          </div>
          <button className="rounded-full bg-youfi-primary p-2 text-white hover:bg-youfi-primary/90">
            <WalletIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
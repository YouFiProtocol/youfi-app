import { Button } from '@/components/ui/Button'
import { Wallet, TrendingUp, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="py-20">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-youfi-primary to-youfi-accent bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            Your Financial Goals On-chain
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Transform your financial goals into NFT achievements while building your on-chain reputation.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              Connect Wallet
              <Wallet className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<Wallet />}
            title="Smart Goals"
            description="Set and track financial goals with blockchain-backed verification"
          />
          <FeatureCard 
            icon={<TrendingUp />}
            title="Track Progress"
            description="Monitor your achievements and earn rewards as you progress"
          />
          <FeatureCard 
            icon={<Shield />}
            title="Build Reputation"
            description="Create an on-chain reputation score through consistent goal completion"
          />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
      <div className="mb-4 inline-block rounded-lg bg-youfi-primary/10 p-2 text-youfi-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
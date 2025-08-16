'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Plus } from 'lucide-react'
import { CreateGoalModal } from '@/components/goals/CreateGoalModal'
import { GoalCard } from '@/components/goals/GoalCard'
import type { GoalCardProps } from '@/components/goals/GoalCard'

type Goal = Omit<GoalCardProps, 'onDelete'>

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Save 1 ETH',
      progress: 65,
      target: '1.00 ETH',
      current: '0.65 ETH',
      dueDate: '2023-12-31',
    },
    {
      id: '2',
      title: 'DeFi Portfolio',
      progress: 30,
      target: '5,000 USDC',
      current: '1,500 USDC',
      dueDate: '2024-01-15',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateGoal = (goalData: any) => {
    const newGoal: Goal = {
      id: Date.now().toString(),
      title: goalData.title,
      progress: 0,
      target: goalData.target,
      current: '0',
      dueDate: new Date(goalData.dueDate).toLocaleDateString(),
    }
    
    setGoals([...goals, newGoal])
  }

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Financial Goals</h1>
          <p className="mt-2 text-gray-400">Track and manage your on-chain financial goals</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Goal
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            {...goal}
            onDelete={handleDeleteGoal}
          />
        ))}
      </div>

      <CreateGoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateGoal}
      />
    </div>
  )
}
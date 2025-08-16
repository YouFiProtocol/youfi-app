import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Target, X, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface GoalFormData {
  title: string
  target: string
  dueDate: string
}

interface CreateGoalModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (goal: GoalFormData) => void
}

export function CreateGoalModal({ isOpen, onClose, onSubmit }: CreateGoalModalProps) {
  const [formData, setFormData] = useState<GoalFormData>({
    title: '',
    target: '',
    dueDate: ''
  })
  const [errors, setErrors] = useState<Partial<GoalFormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<GoalFormData> = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.target.trim()) {
      newErrors.target = 'Target amount is required'
    } else if (!/^\d*\.?\d+\s*(ETH|USDC)$/.test(formData.target)) {
      newErrors.target = 'Invalid format (e.g., 1.5 ETH or 1000 USDC)'
    }
    
    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-md rounded-2xl bg-gray-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-youfi-primary" />
                <h2 className="text-xl font-semibold text-white">Create New Goal</h2>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400">Goal Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.title ? 'border-red-500' : 'border-gray-800'
                  } bg-gray-800/50 p-2 text-white`}
                  placeholder="e.g., Save 1 ETH"
                />
                {errors.title && (
                  <p className="mt-1 flex items-center text-sm text-red-500">
                    <AlertCircle className="mr-1 h-4 w-4" />
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">Target Amount</label>
                <input
                  type="text"
                  value={formData.target}
                  onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.target ? 'border-red-500' : 'border-gray-800'
                  } bg-gray-800/50 p-2 text-white`}
                  placeholder="e.g., 1.00 ETH"
                />
                {errors.target && (
                  <p className="mt-1 flex items-center text-sm text-red-500">
                    <AlertCircle className="mr-1 h-4 w-4" />
                    {errors.target}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">Due Date</label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.dueDate ? 'border-red-500' : 'border-gray-800'
                  } bg-gray-800/50 p-2 text-white`}
                />
                {errors.dueDate && (
                  <p className="mt-1 flex items-center text-sm text-red-500">
                    <AlertCircle className="mr-1 h-4 w-4" />
                    {errors.dueDate}
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={onClose}>Cancel</Button>
                <Button type="submit">Create Goal</Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
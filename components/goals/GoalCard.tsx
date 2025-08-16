'use client'
import React from 'react'
import { Trash2, Target } from 'lucide-react'

export interface GoalCardProps {
  id: string
  title: string
  progress: number
  target: string
  current: string
  dueDate: string
  onDelete: (id: string) => void
}

export function GoalCard({
  id,
  title,
  progress,
  target,
  current,
  dueDate,
  onDelete
}: GoalCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-youfi-primary" />
          <h3 className="font-medium text-white">{title}</h3>
        </div>
        <button 
          onClick={() => onDelete(id)}
          className="rounded-full p-1.5 text-gray-400 hover:bg-gray-800 hover:text-red-400"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      
      <div className="mt-4">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-white">{progress}%</span>
        </div>
        <div className="h-2 rounded-full bg-gray-800">
          <div 
            className="h-full rounded-full bg-youfi-primary transition-all duration-500" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="text-gray-400">
          Current: <span className="text-white">{current}</span>
        </div>
        <div className="text-gray-400">
          Target: <span className="text-white">{target}</span>
        </div>
      </div>
    </div>
  )
}
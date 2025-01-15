'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function AddSpending() {
  const router = useRouter()
  const [enableAI, setEnableAI] = useState(false)
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/spend-analysis')
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Add New Spending</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Date</Label>
              <div className="text-sm text-muted-foreground">{currentDate}</div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount (RM)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Transaction Purpose</Label>
              <Textarea
                id="purpose"
                placeholder="What did you spend on?"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="ai-validation"
                checked={enableAI}
                onCheckedChange={setEnableAI}
              />
              <Label htmlFor="ai-validation">Enable AI Spending Validation</Label>
            </div>

            <Button type="submit" className="w-full">Continue</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


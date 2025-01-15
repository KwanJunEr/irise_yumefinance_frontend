'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Sparkles, ArrowRight } from 'lucide-react'
import Link from "next/link"
import confetti from 'canvas-confetti'
import { useEffect } from "react"

export default function Congratulations() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-block p-4 bg-primary/10 rounded-full">
          <Trophy className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold">Congratulations!</h1>
        <p className="text-xl text-muted-foreground">
          You made a smart financial decision
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Your Savings Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-green-500">
              RM 700 Saved
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Long-term Impact</h4>
                <ul className="text-sm space-y-2">
                  <li className="text-green-500">• Increased monthly savings by RM 700</li>
                  <li className="text-green-500">• Reduced financial pressure</li>
                  <li className="text-green-500">• Better value for money</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold">Reward Earned!</h3>
            </div>
            <Badge className="text-lg px-4 py-2 mb-4">+100 Points</Badge>
            <p className="text-sm text-muted-foreground">
              For making a smart financial decision
            </p>
          </CardContent>
        </Card>

        <Button asChild size="lg">
          <Link href="/smart-spend">
            Back to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}


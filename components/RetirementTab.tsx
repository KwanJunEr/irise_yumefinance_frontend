'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const projectionData = [
  { year: 2024, savings: 10000, target: 12000 },
  { year: 2025, savings: 15000, target: 18000 },
  { year: 2026, savings: 22000, target: 25000 },
  { year: 2027, savings: 30000, target: 33000 },
  { year: 2028, savings: 40000, target: 42000 },
]

export default function RetirementTab() {
  const [showOptimization, setShowOptimization] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Are You Retirement Ready?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <ChartContainer
              config={{
                savings: {
                  label: "Current Savings",
                  color: "hsl(var(--chart-1))",
                },
                target: {
                  label: "Target",
                  color: "hsl(var(--chart-2))",
                }
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="savings" stroke="#8884d8" name="Current Savings" />
                  <Line type="monotone" dataKey="target" stroke="#82ca9d" name="Target" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Total Pension Savings</h4>
                  <div className="text-2xl font-bold mt-2">RM 40,000</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Annual Retirement Expense</h4>
                  <div className="text-2xl font-bold mt-2">RM 36,000</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Years to Retirement</h4>
                  <div className="text-2xl font-bold mt-2">30</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Monthly Contribution</h4>
                  <div className="text-2xl font-bold mt-2">RM 500</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Meet Your Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setShowOptimization(!showOptimization)} className="w-full">
            Start Optimizing
          </Button>
          {showOptimization && (
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Increase Contributions</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Consider increasing your monthly contribution to RM 750
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Diversify Investments</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Add more growth-oriented investments to your portfolio
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Review Expenses</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Optimize your current expenses to save more for retirement
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}


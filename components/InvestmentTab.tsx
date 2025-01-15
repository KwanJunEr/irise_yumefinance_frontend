'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"

const investmentData = [
  { name: "Stocks", value: 1000 },
  { name: "Bonds", value: 500 },
  { name: "Crypto", value: 300 },
  { name: "Cash", value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const performanceData = [
  { month: 'Jan', value: 2000 },
  { month: 'Feb', value: 2100 },
  { month: 'Mar', value: 2050 },
  { month: 'Apr', value: 2300 },
  { month: 'May', value: 2400 },
]

export default function InvestmentTab() {
  const [showSuggestions, setShowSuggestions] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Current Investment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">RM 2,000</div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Portfolio Diversification Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.5/10</div>
            <p className="text-sm text-muted-foreground">Well diversified</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8/10</div>
            <p className="text-sm text-muted-foreground">Moderate risk</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5%</div>
            <p className="text-sm text-muted-foreground">Annual return</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Investment Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Investment Value",
                  color: "hsl(var(--chart-1))",
                }
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={investmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {investmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setShowSuggestions(!showSuggestions)} className="w-full">
              Show Suggestions
            </Button>
            {showSuggestions && (
              <div className="grid gap-4 mt-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Consider Index Funds</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Low-cost way to diversify your portfolio
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Increase Bond Allocation</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Add stability to your portfolio
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Regular Investment Plan</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Set up monthly investment contributions
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


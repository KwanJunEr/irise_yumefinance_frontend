'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const insuranceData = [
  { name: "Health", value: 400 },
  { name: "Life", value: 300 },
  { name: "Property", value: 200 },
  { name: "Vehicle", value: 100 },
]

const coverageData = [
  { type: "Health Insurance", status: "Covered", excess: "RM 1,000" },
  { type: "Life Insurance", status: "Gap", excess: "RM 0" },
  { type: "Property Insurance", status: "Covered", excess: "RM 500" },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function InsuranceTab() {
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [showOptimization, setShowOptimization] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Insurance Coverage at a Glance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={() => setShowAnalysis(!showAnalysis)}>
              AI Analysis
            </Button>
            {showAnalysis && (
              <Card className="bg-muted">
                <CardContent className="p-4">
                  <p>Suggested Improvements:</p>
                  <ul className="list-disc pl-4 mt-2">
                    <li>Consider increasing life insurance coverage</li>
                    <li>Review health insurance deductibles</li>
                    <li>Add disability insurance coverage</li>
                  </ul>
                </CardContent>
              </Card>
            )}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Coverage Details</h3>
              <div className="grid gap-4">
                {coverageData.map((item) => (
                  <div key={item.type} className="flex justify-between items-center">
                    <span>{item.type}</span>
                    <span className={item.status === "Gap" ? "text-red-500" : "text-green-500"}>
                      {item.status}
                    </span>
                    <span>{item.excess}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Insurance Spending Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                insurance: {
                  label: "Insurance Distribution",
                  color: "hsl(var(--chart-1))",
                }
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={insuranceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {insuranceData.map((entry, index) => (
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
            <CardTitle>Optimize and Save</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setShowOptimization(!showOptimization)} className="w-full">
              Optimize Insurance
            </Button>
            {showOptimization && (
              <div className="grid gap-4 mt-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Bundle Your Policies</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Save up to 25% by bundling your home and auto insurance
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Increase Deductibles</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Save on premiums by increasing your deductibles
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


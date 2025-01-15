'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const loanComparisonData = [
  { month: 'Jan', current: 1500, suggested: 1200 },
  { month: 'Feb', current: 1500, suggested: 1200 },
  { month: 'Mar', current: 1500, suggested: 1200 },
  { month: 'Apr', current: 1500, suggested: 1200 },
]

const debtIncomeData = [
  { name: 'Debt', value: 35.6 },
  { name: 'Available', value: 64.4 },
]

const COLORS = ['#0088FE', '#00C49F']

export default function Analysis() {
  return (
    <div className="container mx-5 py-10">
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Loan Readiness Score</CardTitle>
              <CardDescription>Based on your provided information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4">7.5/10</div>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Better Alternative Available</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    CIMB Bank offers a loan at 8.08% p.a., which is 3.2% lower APR than your current option.
                  </p>
                  <p className="text-sm font-medium">
                    Potential savings: RM 15,000 over the loan term
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monthly Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">RM 1,500</div>
                <p className="text-sm text-muted-foreground">Current plan</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interest Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">RM 25,000</div>
                <p className="text-sm text-muted-foreground">Total interest</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suggested Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">RM 1,200</div>
                <p className="text-sm text-muted-foreground">With CIMB</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suggested Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">RM 20,000</div>
                <p className="text-sm text-muted-foreground">With CIMB</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment Comparison</CardTitle>
            <CardDescription>Current vs Suggested Loan</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                current: {
                  label: "Current Plan",
                  color: "hsl(var(--chart-1))",
                },
                suggested: {
                  label: "Suggested Plan",
                  color: "hsl(var(--chart-2))",
                }
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={loanComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="current" stroke="hsl(var(--chart-1))" />
                  <Line type="monotone" dataKey="suggested" stroke="hsl(var(--chart-2))" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Debt to Income Ratio</CardTitle>
              <CardDescription>Current ratio: 35.6%</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Percentage",
                    color: "hsl(var(--chart-1))",
                  }
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={debtIncomeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {debtIncomeData.map((entry, index) => (
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
              <CardTitle>Disposable Income</CardTitle>
              <CardDescription>Monthly: RM 2,000</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold">RM 2,000</div>
                <p className="text-sm text-muted-foreground">
                  Available monthly after all expenses and loan payments
                </p>
                <Button asChild className="w-full">
                  <Link href="/priority">View Payment Priority</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import Image from "next/image"
import { useRouter } from "next/navigation"

const spendingImpact = [
  { category: "Current", amount: 2500 },
  { category: "Alternative", amount: 1800 },
]

export default function Review() {
  const router = useRouter()

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Financial Priority Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-red-500">3/10</div>
              <div className="text-sm text-muted-foreground">
                Low priority purchase - Consider alternatives
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Impact Analysis</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-red-500">• Reduced monthly savings by RM 700</li>
                  <li className="text-red-500">• Increased financial pressure</li>
                  <li className="text-red-500">• Unnecessary purchase - luxury item</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                amount: {
                  label: "Amount (RM)",
                  color: "hsl(var(--chart-1))",
                }
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spendingImpact}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Alternative Option 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
                  alt="Computer Alternative 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Budget-Friendly Model</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Similar specifications, 30% lower price point
              </p>
              <div className="text-lg font-bold mt-2">RM 1,800</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alternative Option 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative rounded-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                  alt="Computer Alternative 2"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Refurbished Premium Model</h3>
              <p className="text-sm text-muted-foreground mt-2">
                High-end features, certified refurbished
              </p>
              <div className="text-lg font-bold mt-2">RM 2,000</div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
          <Button onClick={() => router.push('/congratulations')}>
            Choose Alternative
          </Button>
          <Button onClick={() => router.push('/congrats')}>
            Cancel Expenditure
          </Button>
        </div>
      </div>
    </div>
  )
}


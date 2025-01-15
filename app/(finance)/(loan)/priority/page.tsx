'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

const loans = [
  {
    type: "Personal Loan",
    amount: "25,000",
    interest: "12%",
    priority: "High",
    reason: "High interest rate and shorter term",
  },
  {
    type: "Car Loan",
    amount: "45,000",
    interest: "7%",
    priority: "Medium",
    reason: "Moderate interest rate with asset backing",
  },
  {
    type: "Home Renovation",
    amount: "15,000",
    interest: "5%",
    priority: "Low",
    reason: "Lower interest rate and longer term",
  },
]

export default function Priority() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/analysis">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Analysis
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Loan Payment Priority</CardTitle>
          <CardDescription>
            Recommended order for loan repayment based on interest rates and terms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {loans.map((loan, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{loan.type}</h3>
                      <p className="text-sm text-muted-foreground">
                        Amount: RM {loan.amount}
                      </p>
                    </div>
                    <Badge
                      variant={
                        loan.priority === "High"
                          ? "destructive"
                          : loan.priority === "Medium"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {loan.priority} Priority
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Interest Rate</span>
                      <span className="font-medium">{loan.interest}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="mt-2">
                        <span className="font-medium">Why this priority: </span>
                        {loan.reason}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


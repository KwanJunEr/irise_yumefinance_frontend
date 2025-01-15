'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, DollarSign, Calendar, ArrowRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const currentLoans = [
  {
    id: 1,
    type: "Personal Loan",
    amount: "25,000",
    status: "Active",
    dueDate: "15 Feb 2024"
  },
  {
    id: 2,
    type: "Car Loan",
    amount: "45,000",
    status: "Active",
    dueDate: "22 Mar 2024"
  },
  {
    id: 3,
    type: "Home Renovation",
    amount: "15,000",
    status: "Pending",
    dueDate: "10 Apr 2024"
  }
]

const SmartLoan = () => {
  return (
    <section className="bg-background min-h-screen">
      <div className='container mx-auto py-8 px-4'>
        <div className='grid gap-8 md:grid-cols-[2fr,1fr]'>
          <div className='space-y-8'>
            <div className='flex items-start justify-between'>
              <div className='space-y-2'>
                <h1 className='text-4xl font-bold tracking-tight'>Smart Loan</h1>
                <p className='text-lg text-muted-foreground'>
                  Discover an intelligent and flexible loan management solution
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Avatar className='h-12 w-12'>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JK</AvatarFallback>
                </Avatar>
                <div>
                  <p className='font-medium'>Jonas Kwan</p>
                  <p className='text-sm text-muted-foreground'>Premium Member</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current Loans</CardTitle>
                <CardDescription>Overview of your active and pending loans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {currentLoans.map((loan) => (
                    <Card key={loan.id} className='hover:bg-accent/50 transition-colors'>
                      <CardContent className='flex items-center justify-between p-4'>
                        <div className='space-y-1'>
                          <p className='font-medium'>{loan.type}</p>
                          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                            <Calendar className='h-4 w-4' />
                            Due: {loan.dueDate}
                          </div>
                        </div>
                        <div className='flex items-center gap-4'>
                          <div className='text-right'>
                            <p className='font-medium'>RM {loan.amount}</p>
                            <Badge variant={loan.status === 'Active' ? 'default' : 'secondary'}>
                              {loan.status}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="icon">
                            <ArrowRight className='h-4 w-4' />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className='border-dashed'>
              <CardContent className='flex flex-col items-center justify-center p-8 text-center'>
                <div className='rounded-full bg-primary/10 p-3 mb-4'>
                  <PlusCircle className='h-6 w-6 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>Add New Loan</h3>
                <p className='text-sm text-muted-foreground mb-4'>
                  Apply for a new loan with competitive interest rates
                </p>
                <Link href={"/newloan"}>
                <Button>
                  <PlusCircle className='h-4 w-4 mr-2' />
                  Add Loan
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Loan Summary</CardTitle>
                <CardDescription>Your current loan statistics</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <p className='text-sm text-muted-foreground'>Total Active Loans</p>
                  <p className='font-semibold'>2</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-sm text-muted-foreground'>Total Amount</p>
                  <p className='font-semibold'>RM 85,000</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-sm text-muted-foreground'>Next Payment Due</p>
                  <p className='font-semibold'>15 Feb 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className='grid gap-2'>
                <Button variant="outline" className='justify-start'>
                  <DollarSign className='h-4 w-4 mr-2' />
                  Make a Payment
                </Button>
                <Button variant="outline" className='justify-start'>
                  <Calendar className='h-4 w-4 mr-2' />
                  View Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartLoan


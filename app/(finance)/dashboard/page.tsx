'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, CreditCard, DollarSign, PiggyBank } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Define interfaces for data types
interface SpendingData {
  month: string
  amount: number
}

interface FinancialHealthData {
  month: string
  score: number
}

interface Transaction {
  date: string
  description: string
  amount: number
}

interface BankAccount {
  name: string
  type: string
  balance: number
  image: string
}

// Define types for custom chart components
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: Array<{
    value: number
    name: string
  }>
  label?: string
}

// Custom chart components with TypeScript support
const ChartContainer: React.FC<ChartContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={`w-full ${className}`} {...props}>
      {children}
    </div>
  )
}

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ active, payload, label }) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            {label}
          </span>
          <span className="font-bold text-muted-foreground">
            {payload[0].value}
          </span>
        </div>
      </div>
    </div>
  )
}

const Dashboard: React.FC = () => {
  // Mock data for charts
  const spendingData: SpendingData[] = [
    { month: 'Jan', amount: 1500 },
    { month: 'Feb', amount: 2000 },
    { month: 'Mar', amount: 1800 },
    { month: 'Apr', amount: 2200 },
    { month: 'May', amount: 1900 },
    { month: 'Jun', amount: 2100 },
  ]

  const financialHealthData: FinancialHealthData[] = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 68 },
    { month: 'Mar', score: 72 },
    { month: 'Apr', score: 75 },
    { month: 'May', score: 78 },
    { month: 'Jun', score: 80 },
  ]

  const transactions: Transaction[] = [
    { date: '2025-01-15', description: 'Grocery Shopping', amount: 150 },
    { date: '2025-01-15', description: 'Fuel', amount: 80 },
    { date: '2025-01-15', description: 'Dinner', amount: 120 },
  ]

  const bankAccounts: BankAccount[] = [
    {
      name: 'CIMB Bank',
      type: 'Personal Savings Account',
      balance: 3500,
      image: '/cimb.png'
    },
   
  ]

  return (
    <section className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-600">YumeBank</h1>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Credit Score</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">200 PTs</div>
              <Button variant="ghost" size="sm" className="mt-2">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Loans</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,000 MYR</div>
              <Button variant="ghost" size="sm" className="mt-2">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,000 MYR</div>
              <Button variant="ghost" size="sm" className="mt-2">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Account Selection */}
        <div className="flex flex-row justify-between mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                All Accounts <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>CIMB Bank</DropdownMenuItem>
              <DropdownMenuItem>Maybank</DropdownMenuItem>
              <DropdownMenuItem>RHB Bank</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/choose">
            <Button>
              + Connect Account
            </Button>
          </Link>
        </div>

        {/* Bank Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {bankAccounts.map((account, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-start p-6">
                <img src={account.image} alt={account.name} className="mb-4 rounded-full" />
                <h3 className="text-lg font-semibold">{account.name}</h3>
                <p className="text-sm text-muted-foreground">{account.type}</p>
                <div className="text-2xl font-bold mt-2">{account.balance} MYR</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.amount} MYR</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={spendingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              
              <h4 className="text-lg font-semibold mt-6 mb-2">Financial Health</h4>
              <ChartContainer className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={financialHealthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="score" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="text-center mt-2">
                <span className="text-green-600 font-semibold">+15%</span> Positive Growth
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
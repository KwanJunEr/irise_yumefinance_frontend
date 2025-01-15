'use client'

import React, { useState } from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface SpendingDataItem {
  name: string;
  value: number;
}

interface MonthlySpendingItem {
  month: string;
  amount: number;
}

interface SpendingHistoryItem {
  id: number;
  date: string;
  category: string;
  amount: number;
}

// Mock data for spending categories
const spendingData: SpendingDataItem[] = [
  { name: 'Food', value: 500 },
  { name: 'Rent', value: 1000 },
  { name: 'Utilities', value: 200 },
  { name: 'Entertainment', value: 300 },
  { name: 'Transportation', value: 150 },
]

// Mock data for monthly spending
const monthlySpendingData: MonthlySpendingItem[] = [
  { month: 'Jan', amount: 2000 },
  { month: 'Feb', amount: 2200 },
  { month: 'Mar', amount: 1800 },
  { month: 'Apr', amount: 2100 },
  { month: 'May', amount: 2300 },
  { month: 'Jun', amount: 2000 },
]

// Mock data for spending history
const spendingHistory: SpendingHistoryItem[] = [
  { id: 1, date: '2025-01-14', category: 'Food', amount: 50 },
  { id: 2, date: '2025-01-13', category: 'Transportation', amount: 30 },
  { id: 3, date: '2025-01-13', category: 'Entertainment', amount: 100 },
  { id: 4, date: '2025-01-13', category: 'Utilities', amount: 80 },
  { id: 5, date: '2025-01-13', category: 'Food', amount: 45 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border rounded shadow">
        <p className="text-sm">{`${payload[0].name}: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const SpendingHistory = () => {
  const [aiAnalysis, setAiAnalysis] = useState<string>('')

  const generateAiAnalysis = () => {
    const analysis = `Based on your spending habits:
    1. Consider reducing entertainment expenses by 20%.
    2. Look for ways to optimize your food budget, such as meal prepping.
    3. Explore cheaper transportation alternatives for the next month.
    4. Your utility costs are relatively low, keep up the good work!`
    setAiAnalysis(analysis)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Spending History</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Spending Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={spendingData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {spendingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlySpendingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>AI Spending Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={generateAiAnalysis}>Generate Analysis</Button>
          {aiAnalysis && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {spendingHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default SpendingHistory
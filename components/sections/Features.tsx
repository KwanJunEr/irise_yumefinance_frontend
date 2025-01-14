import React from 'react'
import { Card, CardContent } from '../ui/card'
import { LineChart,Sparkles, Target } from 'lucide-react'

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 border">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powered by Advanced AI</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI analyzes your financial data to provide personalized recommendations and insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Sparkles className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Smart Insights</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Get personalized financial advice based on your spending patterns and goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <LineChart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Investment Analysis</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    AI-powered investment recommendations tailored to your risk profile.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-[33px]">
                  <Target className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Goal Tracking</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Set and track financial goals with AI-assisted planning and forecasting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Features

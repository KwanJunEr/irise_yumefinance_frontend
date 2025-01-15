'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InsuranceTab from "@/components/InsuranceTab"
import InvestmentTab from "@/components/InvestmentTab"
import RetirementTab from "@/components/RetirementTab"

export default function FinService() {
  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="insurance" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
          <TabsTrigger value="retirement">Retirement</TabsTrigger>
        </TabsList>
        <TabsContent value="insurance">
          <InsuranceTab />
        </TabsContent>
        <TabsContent value="investment">
          <InvestmentTab />
        </TabsContent>
        <TabsContent value="retirement">
          <RetirementTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}



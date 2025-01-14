"use client"
import React, { useState } from 'react'
import { BankDetail, pendingbankData } from '@/data/banks/banks'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Check, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from 'next/link'

const banksAvailable = [
    {
        image: "/cimb.png",
        bankName: "CIMB Bank"
    },
    {
        image: "/alliance.png",
        bankName : "Alliance Bank"
    },
    {
        image: "/hongleong.png",
        bankName : "Hong Leong Bank"
    },
    {
        image: "/may.png",
        bankName : "MayBank"
    },
    {
        image: "/ocbc.png",
        bankName : "OCBC Bank"
    },
    {
        image: "/public.png",
        bankName : "Public Bank"
    },
    {
        image: "/rhb.png",
        bankName : "RHB Bank"
    }
]

const Choose = () => {
    const [selectedBank, setSelectedBanks] = useState<string | null>();
    const [tab, setTab] = useState("Bank");
    const [accountNumber, setAccountNumber] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleBankSelect = (bankName : string)=>{
        setSelectedBanks(bankName)
        setIsDialogOpen(true);
    }
    const handleAccountSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(selectedBank && accountNumber){
            const bankDetail: BankDetail = {
                bank: selectedBank,
                accountNumber: accountNumber,
                balance: 0
            };
            pendingbankData.push(bankDetail);
            console.log(pendingbankData)
            setIsDialogOpen(false);
        }
    }
    
  return (
    <section className='w-full min-h-screen bg-gradient-to-b from-blue-50 to-white'>
        <div className='container px-20 py-20'>
            <motion.div 
            initial={{opacity: 0, y:20}}
            animate= {{opacity: 1, y:0}}
            className='space-y-8'
            >
                <div className='space-y-2'>
                <h1 className='text-4xl font-bold text-blue-900'>YumeFinance</h1>

                <h2 className='text-xl font-medium text-gray-700 mt-5'>Select an Account You want to bind with YumeFinance</h2>
                </div>
                <Tabs defaultValue='Bank' className='w-full'>
                    <TabsList className="grid w-full max-w-md grid-cols-3">
                        <TabsTrigger
                         value="Bank"
                         onClick={() => setTab("Bank")}
                        >
                            Bank
                        </TabsTrigger>
                        <TabsTrigger 
                                value="Wallet"
                                onClick={() => setTab("Wallet")}
                            >
                                Wallet
                            </TabsTrigger>
                            <TabsTrigger 
                                value="Others"
                                onClick={() => setTab("Others")}
                            >
                                Others
                            </TabsTrigger>
                    </TabsList>
                </Tabs>

                {tab === "Bank" && (
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.2}}
                    className='grid grid-cols-1 md:grid-cols-2 gap-4'
                    >
                        {banksAvailable.map((bank, index)=>(
                            <Card
                                key={bank.bankName}
                                className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${selectedBank === bank.bankName ? 'border-blue-500 bg-blue-50/50}' : 'border-gray-200'} `}
                                onClick={() => handleBankSelect(bank.bankName)}
                            >
                                 <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className='w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm'>
                                                <Image
                                                    src={bank.image}
                                                    width={32}
                                                    height={32}
                                                    alt={bank.bankName}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h4 className="font-medium text-gray-900">{bank.bankName}</h4>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                                            ${selectedBank === bank.bankName
                                                ? 'border-blue-500 bg-blue-500'
                                                : 'border-gray-300'
                                            }`}
                                        >
                                            {selectedBank === bank.bankName && (
                                                <Check className="h-4 w-4 text-white" />
                                            )}
                                        </div>
                                    </motion.div>
                            </Card>
                        ))}
                    
                    </motion.div>
                )}

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className='sm:max-w-[425px]'>
                        <DialogHeader>
                            <DialogTitle>Enter Account Number</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleAccountSubmit} className='space-y-4 pt-4'>
                        <div className="space-y-2">
                                    <Label htmlFor="accountNumber">Account Number</Label>
                                    <Input
                                        id="accountNumber"
                                        placeholder="Enter your account number"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-4 pt-4">
                                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button type="submit">Add Bank</Button>
                                </div>
                        </form>
                    </DialogContent>
                </Dialog>

                <div className="flex justify-end gap-4 pt-4">
                                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Link href={"/link"}>
                                     <Button type="submit">Continue</Button>
                                    </Link>
                                   
                                </div>
            </motion.div>
         
        </div>
    </section>

  )
}

export default Choose

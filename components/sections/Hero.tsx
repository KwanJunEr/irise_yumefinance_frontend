import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32  xl:py-48 px-24'>
 <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Personal AI Financial Advisor
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Make smarter financial decisions with AI-powered insights. Track spending, optimize investments, and reach
                    your financial goals faster.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="800"
                src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070"
                width="800"
              />
            </div>
          </div>
    </section>
  )
}

export default Hero

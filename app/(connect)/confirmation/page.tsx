'use client'

import { Button } from '@/components/ui/button'
import { DollarSign, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Confirmation() {
  return (
    <section className='min-h-screen w-full bg-white'>
      <div className='container mx-auto px-4 py-16 md:py-24 flex items-center justify-center'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8 text-center"
        >
          {/* Success Animation */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            className="flex justify-center"
          >
            <div className="relative w-32 h-32">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-green-100/50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
            </div>
          </motion.div>

          {/* Logos */}
          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-16 h-16 relative"
            >
              <div className="absolute inset-0 bg-blue-50 rounded-full flex items-center justify-center">
                <Image
                  src="/cimb.png"
                  alt="CIMB Bank"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center"
            >
              <div className="w-12 h-[2px] bg-green-500" />
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <div className="w-12 h-[2px] bg-green-500" />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-16 h-16 relative"
            >
              <div className="absolute inset-0 bg-blue-50 rounded-full flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="YumeFinance"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold text-gray-900">
              Congratulations!
            </h1>
            <p className="text-xl text-gray-600">
              CIMB Bank and YumeFinance are now connected!
            </p>
            <p className="text-sm text-gray-500">
              You can now access your CIMB Bank account information through YumeFinance
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Continue to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Security Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xs text-gray-400 mt-8"
          >
            Your connection is secure and encrypted. You can manage your connected accounts at any time from the dashboard.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}


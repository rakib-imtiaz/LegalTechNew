"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"

import Threads from "@/components/ui/threads"

export function LandingHero() {
  const words = ["Agreements", "Incorporations", "Contracts", "Patents", "Trademarks"];
  
  return (
    <main className="relative flex flex-col h-[100vh] items-center justify-center bg-gradient-to-b from-blue-100 via-blue-50 to-white overflow-hidden">
      {/* Threads animation layer */}
      <div className="absolute inset-0 w-full h-full -z-5">
        <Threads
          color={[0.3, 0.4, 0.8]} // Darker blue to show on light background
          amplitude={2.4}
          distance={0.3}
          enableMouseInteraction={true}
          className="opacity-30"
        />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 container text-center pt-20 md:pt-32 pointer-events-auto">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Best Legal Service for Startup{" "}
            <FlipWords words={words} className="text-blue-600" />
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            For common and standardized legal services we offer a simple self-service platform for you to create custom documents by completing short surveys in three minutes or less.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Primary CTA - Try Dashboard */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button 
              size="lg" 
              asChild 
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-xl font-semibold px-8 py-3 border-0 transition-all duration-200"
            >
              <Link href="/dashboard" className="flex items-center space-x-2">
                <span>Try Dashboard</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-lg"
                >
                  →
                </motion.div>
              </Link>
            </Button>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-lg opacity-25 -z-10"></div>
          </motion.div>

          {/* Secondary CTA - Contact Us */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              asChild 
              variant="outline"
              className="rounded-full bg-white/80 border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 shadow-lg font-semibold px-8 py-3 backdrop-blur-sm transition-all duration-200"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

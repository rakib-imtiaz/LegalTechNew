"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import { AuroraBackground } from "@/components/ui/aurora-background"

export function LandingHero() {
  const words = ["Agreements", "Incorporations", "Contracts", "Patents", "Trademarks"];
  
  return (
    <AuroraBackground>
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
        src="/videos/hero-section-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Hero content */}
      <div className="relative z-10 container text-center pt-20 md:pt-32">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The Best Legal Service for Startup{" "}
            <FlipWords words={words} className="text-cyan-300" />
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
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
              className="rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 shadow-xl font-semibold px-8 py-3 border-0 transition-all duration-200"
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
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 blur-lg opacity-30 -z-10"></div>
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
              className="rounded-full bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-lg font-semibold px-8 py-3 backdrop-blur-sm transition-all duration-200"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}

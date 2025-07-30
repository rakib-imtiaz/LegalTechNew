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
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" asChild className="rounded-full bg-white text-gray-900 hover:bg-gray-200 shadow-lg font-semibold">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}

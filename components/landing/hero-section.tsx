'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LightRays, FadeContent, SlideIn, Typewriter } from '@/components/react-bits';
import { FloatingShapes } from '@/components/creative/floating-shapes';
import { MagneticCursor } from '@/components/creative/magnetic-cursor';
import { GradientOrbs } from '@/components/creative/gradient-orbs';
import { GlitchText } from '@/components/creative/glitch-text';
import { Button } from '@/components/ui/button';
import { Rocket, Info, BookOpen, Brain, Zap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Gradient Orbs Background */}
      <GradientOrbs className="z-0" />
      
      {/* Floating Shapes */}
      <FloatingShapes className="z-10" />
      
      {/* Original Background Image with Enhanced Styling */}
      <div className="absolute inset-0 z-20">
        <Image
          src="/images/landing/hero/hero-ai-learning-platform.png"
          alt="AI Learning Platform"
          layout="fill"
          objectFit="cover"
          className="opacity-10 mix-blend-overlay"
        />
      </div>
      
      {/* Light Rays with Enhanced Colors */}
      <div className="absolute inset-0 z-30">
        <LightRays
          raysOrigin="top-center"
          raysColor="#7c3aed"
          raysSpeed={1.5}
          lightSpread={0.7}
          rayLength={4}
          fadeDistance={1.2}
          saturation={0.9}
          mouseInfluence={0.2}
          noiseAmount={0.1}
          distortion={0.1}
          pulsating={true}
          className="custom-rays"
        />
      </div>
      
      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 z-20 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <div className="relative z-40 flex h-full flex-col items-center justify-center text-center px-4">
        <SlideIn direction="down" delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-8"
          >
            <Badge variant="outline" className="border-purple-400/30 bg-purple-500/10 backdrop-blur-md py-3 px-6 text-sm font-medium text-purple-200 shadow-lg">
              <motion.span
                animate={{ 
                  textShadow: [
                    '0 0 4px rgba(147, 51, 234, 0.5)',
                    '0 0 8px rgba(147, 51, 234, 0.8)',
                    '0 0 4px rgba(147, 51, 234, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ New: AI-Powered Learning Suite
              </motion.span>
            </Badge>
          </motion.div>
        </SlideIn>

        <SlideIn direction="down" delay={0.2}>
          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tighter text-white md:text-7xl lg:text-8xl mb-6">
            <GlitchText 
              text="Learn Smarter," 
              className="inline-block mr-4"
            />
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Not Harder
            </span>
          </h1>
        </SlideIn>

        <SlideIn direction="down" delay={0.3} className="mt-6">
          <div className="max-w-4xl text-lg text-gray-300 md:text-xl lg:text-2xl">
            <Typewriter 
              text={[
                "🚀 Generate summaries, quizzes, and flashcards in seconds.",
                "🎯 Transform any content into interactive study materials.",
                "🧠 Master any subject with personalized AI-powered tools.",
                "⚡ Accelerate your learning journey with intelligent insights."
              ]}
              speed={50}
              loop={true}
              className="font-medium"
            />
          </div>
        </SlideIn>

        <SlideIn direction="up" delay={0.4} className="mt-12">
          <div className="flex flex-col gap-6 sm:flex-row">
            <MagneticCursor strength={0.3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="px-10 py-7 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-2xl shadow-purple-500/25 border-0 transition-all duration-300"
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Get Started for Free
                </Button>
              </motion.div>
            </MagneticCursor>
            
            <MagneticCursor strength={0.2}>
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-10 py-7 text-xl font-bold border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 backdrop-blur-md shadow-2xl shadow-cyan-500/25 transition-all duration-300"
                  >
                    <ExternalLink className="mr-3 h-6 w-6" />
                    Try our platform
                  </Button>
                </motion.div>
              </Link>
            </MagneticCursor>
          </div>
        </SlideIn>

        <FadeContent delay={0.8} className="mt-16">
          <motion.div 
            className="flex items-center justify-center gap-8 text-base text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <BookOpen className="h-5 w-5 text-blue-400" />
              <span className="font-medium">Smart Summaries</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <Brain className="h-5 w-5 text-purple-400" />
              <span className="font-medium">AI Quizzes</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="font-medium">Smart Cards</span>
            </motion.div>
          </motion.div>
        </FadeContent>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2"
      >
        <motion.div 
          className="text-sm text-white/60 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <div className="mx-auto mb-2 h-12 w-7 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-md shadow-lg">
            <motion.div
              className="relative top-3 left-1/2 h-4 w-1.5 -translate-x-1/2 rounded-full bg-white/80"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="text-center font-medium">
            Scroll to explore
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

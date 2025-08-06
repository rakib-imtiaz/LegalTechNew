'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LightRays, FadeContent, SlideIn, Typewriter } from '@/components/react-bits';
import { Button } from '@/components/ui/button';
import { Rocket, Info, BookOpen, Brain, Zap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <Image
          src="/images/landing/hero/hero-ai-learning-platform.png"
          alt="AI Learning Platform"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#000000"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          fadeDistance={1}
          saturation={0.8}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          className="custom-rays"
        />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <SlideIn direction="down" delay={0.1}>
          <Badge variant="outline" className="mb-6 border-black/20 bg-black/5 py-2 px-4 text-sm font-medium text-black">
            New: AI-Powered Learning Suite
          </Badge>
        </SlideIn>

        <SlideIn direction="down" delay={0.2}>
          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tighter text-black md:text-7xl">
            Learn Smarter, Not Harder
          </h1>
        </SlideIn>

        <SlideIn direction="down" delay={0.3} className="mt-6">
          <div className="max-w-3xl text-lg text-gray-700 md:text-xl">
            <Typewriter 
              text={[
                "Generate summaries, quizzes, and flashcards in seconds.",
                "Transform any content into interactive study materials.",
                "Master any subject with personalized learning tools."
              ]}
              speed={40}
              loop={true}
              className="font-medium"
            />
          </div>
        </SlideIn>

        <SlideIn direction="up" delay={0.4} className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-black text-white hover:bg-gray-800">
              <Rocket className="mr-2 h-5 w-5" />
              Get Started for Free
            </Button>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-green-600/30 text-green-600 hover:bg-green-600/10">
                <ExternalLink className="mr-2 h-5 w-5" />
                Try our platform
              </Button>
            </Link>
          </div>
        </SlideIn>

        <FadeContent delay={0.8} className="mt-20">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Summaries</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span>Quizzes</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Flashcards</span>
            </div>
          </div>
        </FadeContent>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="text-sm text-gray-400">
          <div className="mx-auto mb-2 h-10 w-6 rounded-full border-2 border-gray-400/30">
            <motion.div
              className="relative top-2 left-1/2 h-3 w-1 -translate-x-1/2 rounded-full bg-gray-400/60"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

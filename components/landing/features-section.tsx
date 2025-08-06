'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  HelpCircle, 
  CreditCard, 
  MessageCircle, 
  Check, 
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { FlipCard, SlideIn, FadeContent } from '@/components/react-bits';
import { TiltCard } from '@/components/creative/tilt-card';
import { FloatingShapes } from '@/components/creative/floating-shapes';
import { cn } from '@/lib/utils';
import TrueFocus from '@/components/ui/true-focus';

const features = [
  {
    icon: FileText,
    title: "Smart Summaries",
    description: "Condense lengthy documents into structured, easy-to-digest summaries.",
    details: ["Outline format", "ELI5 explanations", "Key points extraction", "Citation support"],
    color: "text-blue-400",
    bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/25",
    image: "/images/landing/features/features-smart-summaries.png"
  },
  {
    icon: HelpCircle,
    title: "Interactive Quizzes",
    description: "Generate adaptive quizzes that challenge you and reinforce learning.",
    details: ["10-50 questions", "Difficulty levels", "Multiple formats", "Smart adaptation"],
    color: "text-purple-400",
    bg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/25",
    image: "/images/landing/features/features-interactive-quizzes.png"
  },
  {
    icon: CreditCard,
    title: "AI Flashcards",
    description: "Create smart flashcards with spaced repetition to boost memory retention.",
    details: ["Auto-generation", "Cloze deletion", "SRS algorithm", "Progress tracking"],
    color: "text-green-400",
    bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    glowColor: "shadow-green-500/25",
    image: "/images/landing/features/features-ai-flashcards.png"
  },
  {
    icon: MessageCircle,
    title: "AI Chat Assistant",
    description: "Get context-aware tutoring and instant answers from your materials.",
    details: ["Contextual answers", "Source citations", "Follow-up prompts", "24/7 availability"],
    color: "text-orange-400",
    bg: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/25",
    image: "/images/landing/features/features-ai-chat.png"
  }
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  details,
  color,
  bg,
  borderColor,
  glowColor,
  image,
  isBack = false
}: (typeof features)[0] & { isBack?: boolean }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <Card className={cn(
      "relative overflow-hidden flex h-full w-full flex-col justify-between rounded-3xl border-2 p-8 transition-all duration-500 backdrop-blur-md", 
      isBack 
        ? `${borderColor} ${bg} ${glowColor} shadow-2xl` 
        : `border-white/10 bg-white/5 hover:${borderColor} hover:${bg} hover:${glowColor} hover:shadow-2xl`
    )}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color.replace('text-', '').replace('-400', '-500/20')} 0%, transparent 70%)`,
        }}
      />
      
      {/* Sparkle effect */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className={cn("h-5 w-5", color)} />
      </motion.div>
      
      <div className="relative z-10">
        <div className="relative h-44 w-full mb-6 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div>
          <motion.div 
            className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-2xl", bg)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className={cn("h-7 w-7", color)} />
          </motion.div>
          <h3 className="mb-3 font-heading text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 text-base leading-relaxed">{description}</p>
        </div>
        <div className="mt-8">
          {isBack ? (
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {details.map((detail, index) => (
                <motion.li 
                  key={detail} 
                  className="flex items-center text-gray-200"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Check className={cn("mr-3 h-5 w-5", color)} />
                  <span className="font-medium">{detail}</span>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.div 
              className={cn("flex items-center text-base font-semibold cursor-pointer", color)}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Explore Features</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  </motion.div>
);

export const FeaturesSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <FloatingShapes className="opacity-30" />
      
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <SlideIn direction="down" className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-purple-400/30 bg-purple-500/10 backdrop-blur-md py-3 px-6 text-base font-medium text-purple-200 shadow-lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Powerful Features
            </Badge>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                A Smarter Way to Learn
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our suite of AI-powered tools designed to help you study more effectively and achieve your learning goals faster.
          </motion.p>
        </SlideIn>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeContent key={feature.title} delay={index * 0.2} className="h-full">
              <TiltCard className="h-full">
                <FlipCard
                  className="h-[480px]"
                  front={<FeatureCard {...feature} />}
                  back={<FeatureCard {...feature} isBack />}
                />
              </TiltCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

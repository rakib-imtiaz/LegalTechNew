'use client';

import React, { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { FlipCard, SlideIn, FadeContent } from '@/components/react-bits';
import { cn } from '@/lib/utils';
import TrueFocus from '@/components/ui/true-focus';

const features = [
  {
    icon: FileText,
    title: "Smart Summaries",
    description: "Condense lengthy documents into structured, easy-to-digest summaries.",
    details: ["Outline format", "ELI5 explanations", "Key points extraction", "Citation support"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: HelpCircle,
    title: "Interactive Quizzes",
    description: "Generate adaptive quizzes that challenge you and reinforce learning.",
    details: ["10-50 questions", "Difficulty levels", "Multiple formats", "Smart adaptation"],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: CreditCard,
    title: "AI Flashcards",
    description: "Create smart flashcards with spaced repetition to boost memory retention.",
    details: ["Auto-generation", "Cloze deletion", "SRS algorithm", "Progress tracking"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MessageCircle,
    title: "AI Chat Assistant",
    description: "Get context-aware tutoring and instant answers from your materials.",
    details: ["Contextual answers", "Source citations", "Follow-up prompts", "24/7 availability"],
    color: "text-red-500",
    bg: "bg-red-500/10",
  }
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  details,
  color,
  bg,
  isBack = false
}: (typeof features)[0] & { isBack?: boolean }) => (
  <Card className={cn("flex h-full w-full flex-col justify-between rounded-2xl border-2 p-6 transition-all", isBack ? "border-primary/50 bg-primary/5" : "border-transparent bg-muted/50")}>
    <div>
      <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-lg", bg)}>
        <Icon className={cn("h-6 w-6", color)} />
      </div>
      <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
    <div className="mt-6">
      {isBack ? (
        <ul className="space-y-2">
          {details.map((detail) => (
            <li key={detail} className="flex items-center text-muted-foreground">
              <Check className="mr-2 h-4 w-4 text-emerald-500" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center text-sm font-medium text-primary">
          <span>Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      )}
    </div>
  </Card>
);

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4">
        
        <SlideIn direction="down" className="text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 py-2 px-4 text-sm font-medium text-primary">
            Our Features
          </Badge>
          <TrueFocus 
            sentence="A Smarter Way to Learn"
            manualMode={false}
            blurAmount={10}
            borderColor="#40ffaa"
            animationDuration={.5}
            pauseBetweenAnimations={.15}
          />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our suite of AI-powered tools designed to help you study more effectively and achieve your learning goals faster.
          </p>
        </SlideIn>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeContent key={feature.title} delay={index * 0.1} className="h-full">
              <FlipCard
                className="h-[400px]"
                front={<FeatureCard {...feature} />}
                back={<FeatureCard {...feature} isBack />}
              />
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

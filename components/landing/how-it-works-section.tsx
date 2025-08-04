'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Wand2, 
  BookOpen, 
  TrendingUp,
  Check
} from 'lucide-react';
import { SlideIn } from '@/components/react-bits';
import { cn } from '@/lib/utils';
import GradientText from '@/components/ui/gradient-text';

const steps = [
  {
    icon: Upload,
    title: "Upload Your Content",
    description: "Start by uploading your learning materials—PDFs, DOCX, PPTX, YouTube links, or just paste in text.",
    details: ["Support for 50+ file formats", "YouTube video transcription", "Drag & drop interface"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Wand2,
    title: "AI Processes & Generates",
    description: "Our AI analyzes your content, understands the context, and generates personalized study materials in seconds.",
    details: ["Advanced NLP processing", "Context-aware generation", "Multiple difficulty levels"],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: BookOpen,
    title: "Study & Practice",
    description: "Engage with interactive quizzes, smart flashcards, and concise summaries tailored to your learning style.",
    details: ["Adaptive learning paths", "Spaced repetition for memory", "Interactive sessions"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TrendingUp,
    title: "Track & Master",
    description: "Monitor your progress with detailed analytics, identify areas for improvement, and master your subjects.",
    details: ["Performance dashboards", "Weakness identification", "Personalized insights"],
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

const Step = ({ step, index, total }: { step: typeof steps[0], index: number, total: number }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const Icon = step.icon;

  return (
    <div ref={ref} className="flex items-start gap-8">
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn("z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background", step.bg)}
        >
          <Icon className={cn("h-8 w-8", step.color)} />
        </motion.div>
        {index < total - 1 && (
          <div className="absolute top-16 h-full w-1 bg-muted/30">
            <motion.div
              className="h-full w-full origin-top bg-primary"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        )}
      </div>

      <SlideIn direction={index % 2 === 0 ? 'left' : 'right'} delay={0.3} className="w-full pb-16">
        <div className="rounded-2xl bg-muted/30 p-6">
          <Badge variant="outline" className="mb-3 border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Step {index + 1}
          </Badge>
          <h3 className="mb-2 font-heading text-2xl font-semibold text-foreground">{step.title}</h3>
          <p className="mb-4 text-muted-foreground">{step.description}</p>
          <ul className="space-y-2">
            {step.details.map(detail => (
              <li key={detail} className="flex items-center text-sm text-muted-foreground">
                <Check className="mr-2 h-4 w-4 text-emerald-500" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </SlideIn>
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-background py-24">
      <div className="container mx-auto px-4">
        
        <SlideIn direction="down" className="text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 py-2 px-4 text-sm font-medium text-primary">
            How It Works
          </Badge>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={4}
            showBorder={false}
            className="font-heading text-4xl font-bold tracking-tighter md:text-5xl"
          >
            From Content to Mastery in 4 Steps
          </GradientText>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our streamlined process makes it effortless to transform your study materials into powerful, interactive learning tools.
          </p>
        </SlideIn>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <Step key={step.title} step={step} index={index} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

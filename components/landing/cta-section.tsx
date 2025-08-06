'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Check } from 'lucide-react';
import { SlideIn } from '@/components/react-bits';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import GradientText from '@/components/ui/gradient-text';

export const CTASection: React.FC = () => {
  return (
    <section className="relative w-full bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-black/5 p-8">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_at_center,white,transparent)]",
            )}
          />
          <SlideIn direction="down" className="text-center">
            <GradientText
              colors={["#000000", "#4d4d4d", "#000000", "#4d4d4d", "#000000"]}
              animationSpeed={5}
              showBorder={false}
              className="font-heading text-4xl font-bold tracking-tighter md:text-5xl"
            >
              Start Your Learning Revolution
            </GradientText>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join over 10,000 learners and professionals who are achieving their goals faster with Learningly AI.
            </p>
          </SlideIn>

          <SlideIn direction="up" delay={0.1} className="mx-auto mt-8 max-w-md">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 bg-background"
              />
              <Button size="lg" className="h-12 px-8 bg-black text-white hover:bg-gray-800">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.2}>
            <ul className="mx-auto mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-black" />
                14-day free trial
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-black" />
                No credit card required
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-black" />
                Cancel anytime
              </li>
            </ul>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

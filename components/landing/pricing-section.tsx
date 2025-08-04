'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Check, Star, Zap } from 'lucide-react';
import { SlideIn } from '@/components/react-bits';
import { cn } from '@/lib/utils';
import GradientText from '@/components/ui/gradient-text';

const plans = [
  {
    name: "Free",
    description: "For individuals getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "5 documents per month",
      "Basic summaries",
      "10 quizzes per month",
      "Community support"
    ],
    isPopular: false,
  },
  {
    name: "Student",
    description: "For dedicated learners",
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: [
      "Unlimited documents",
      "All summary types",
      "Unlimited quizzes & flashcards",
      "AI chat tutor",
      "Progress analytics",
      "Priority support"
    ],
    isPopular: true,
  },
  {
    name: "Professional",
    description: "For educators & teams",
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    features: [
      "Everything in Student",
      "Bulk document processing",
      "Team collaboration",
      "Advanced analytics",
      "Dedicated support"
    ],
    isPopular: false,
  }
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full bg-background py-24">
      <div className="container mx-auto px-4">
        
        <SlideIn direction="down" className="text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 py-2 px-4 text-sm font-medium text-primary">
            Pricing
          </Badge>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={4}
            showBorder={false}
            className="font-heading text-4xl font-bold tracking-tighter md:text-5xl"
          >
            Choose Your Learning Plan
          </GradientText>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Simple, transparent pricing that grows with you. Cancel anytime.
          </p>
        </SlideIn>

        <div className="mt-10 flex items-center justify-center space-x-4">
          <span className={cn("font-medium", !isYearly && "text-primary")}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle billing period"
          />
          <span className={cn("font-medium", isYearly && "text-primary")}>
            Yearly
            <Badge variant="secondary" className="ml-2 bg-emerald-500/10 text-emerald-700">Save 15%</Badge>
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border-2 bg-muted/30 p-8",
                plan.isPopular ? "border-primary/50" : "border-transparent"
              )}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary py-1 px-4">
                  Most Popular
                </Badge>
              )}
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <span className="font-heading text-4xl font-bold text-foreground">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 text-emerald-500" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                size="lg" 
                className={cn("mt-8 w-full", !plan.isPopular && "bg-secondary")}
              >
                {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

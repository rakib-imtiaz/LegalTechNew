'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check, Star, Zap, Crown, Users, Sparkles, ArrowRight, X } from 'lucide-react';
import { SlideIn, FadeContent, Bounce, StarBorder } from '@/components/react-bits';
import { cn } from '@/lib/utils';
import GradientText from '@/components/ui/gradient-text';

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "3 documents per week",
      "Reading tools (2 per week, 1000 words max)",
      "Writing tools (3 per week each section)",
      "20 AI search queries per week",
      "Basic summaries and notes",
      "Community support"
    ],
    limitations: [
      "Limited daily usage caps",
      "Basic features only"
    ],
    isPopular: false,
    gradient: "from-gray-500 to-gray-600",
    image: "/images/landing/pricing/pricing-free-plan.png"
  },
  {
    name: "Premium",
    description: "For serious students",
    monthlyPrice: 12.99,
    yearlyPrice: 129.99,
    features: [
      "Unlimited uploads & usage",
      "All 5 modules: Reading, Writing, Solver, Search, Exam Prep",
      "Priority AI processing",
      "Advanced plagiarism checker",
      "Custom exam generation",
      "Progress analytics & weak point tracking",
      "Priority support",
      "No ads"
    ],
    limitations: [],
    isPopular: true,
    gradient: "from-blue-500 to-purple-600",
    image: "/images/landing/pricing/pricing-premium-plan.png"
  },
  {
    name: "Admin",
    description: "For institutions & educators",
    monthlyPrice: 49.99,
    yearlyPrice: 499.99,
    features: [
      "Everything in Premium",
      "User management dashboard",
      "Bulk user account creation",
      "Usage analytics & reporting",
      "Custom branding options",
      "Advanced content moderation",
      "API access",
      "Dedicated account manager",
      "Custom integrations"
    ],
    limitations: [],
    isPopular: false,
    gradient: "from-emerald-500 to-green-600",
    image: "/images/landing/pricing/pricing-admin-plan.png"
  }
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="relative z-10 container mx-auto px-4">
        
        <SlideIn direction="down" className="text-center">
          <Badge variant="outline" className="mb-4 border-black/20 bg-black/5 px-4 py-1.5 text-black">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Transparent Pricing
          </Badge>
          <GradientText
            colors={["#000000", "#4d4d4d", "#000000", "#4d4d4d", "#000000"]}
            animationSpeed={4}
            showBorder={false}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Choose Your Learning Plan
          </GradientText>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground px-4">
            Simple, transparent pricing that grows with you. Start free, upgrade anytime.
          </p>
        </SlideIn>

        {/* Billing Toggle */}
        <FadeContent delay={0.2} className="mt-8 sm:mt-10">
          <div className="flex items-center justify-center space-x-4 bg-muted/30 rounded-full p-1 w-fit mx-auto">
            <span className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              !isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
            )}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Toggle billing period"
            />
            <span className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
              isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
            )}>
              Yearly
              <Badge variant="secondary" className="bg-black/10 text-black text-xs">
                Save 20%
              </Badge>
            </span>
          </div>
        </FadeContent>

        {/* Pricing Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <FadeContent key={plan.name} delay={0.1 * index} className="h-full">
              <div className={cn(
                "relative flex h-full flex-col rounded-2xl border p-6 sm:p-8 transition-all duration-300",
                plan.isPopular 
                  ? "border-blue-500/50 bg-white shadow-2xl" 
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}>
                
                {/* Popular Badge */}
                {plan.isPopular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white py-1 px-4 text-sm font-medium">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    Most Popular
                  </Badge>
                )}

                {/* Plan Header */}
                <div className="text-center sm:text-left">
                  <div className="relative h-40 w-full mb-4">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">{plan.name}</h3>
                    {plan.name === 'Admin' && <Crown className="h-6 w-6 text-black" />}
                    {plan.name === 'Premium' && <Zap className="h-6 w-6 text-blue-500" />}
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mt-4 sm:mt-6">
                    <div className="flex items-baseline justify-center sm:justify-start">
                      <span className={cn(
                        "font-heading text-3xl sm:text-4xl font-bold",
                        plan.isPopular ? "text-blue-500" : "text-foreground"
                      )}>
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && plan.monthlyPrice > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">
                        ${((isYearly ? plan.yearlyPrice : plan.monthlyPrice * 12) / 12).toFixed(2)}/month when billed annually
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mt-6 sm:mt-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <Bounce key={feature} delay={0.3 + featureIndex * 0.05}>
                        <li className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 text-black flex-shrink-0" />
                          <span className="text-sm sm:text-base text-foreground leading-relaxed">{feature}</span>
                        </li>
                      </Bounce>
                    ))}
                  </ul>

                  {/* Limitations for Free Plan */}
                  {plan.limitations && plan.limitations.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="flex items-start gap-2">
                            <X className="mt-0.5 h-3 w-3 text-muted-foreground flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-6 sm:mt-8">
                  <Button 
                    size="lg" 
                    className={cn(
                      "w-full group transition-all duration-300",
                      plan.isPopular 
                      ? "bg-black text-white hover:bg-black/90"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {plan.name === 'Free' ? 'Start Free' : 
                     plan.name === 'Admin' ? 'Contact Sales' : 'Go Premium'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {plan.name === 'Free' && (
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      No credit card required
                    </p>
                  )}
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeContent delay={0.5} className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900/20 dark:to-gray-800/20 rounded-2xl p-6 sm:p-8 border border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Need a custom plan?</h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Contact us for enterprise solutions, volume discounts, or custom integrations.
            </p>
            <Button variant="outline" className="group">
              Contact Sales
              <Users className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

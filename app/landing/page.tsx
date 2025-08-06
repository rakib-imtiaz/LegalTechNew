'use client';

import React from 'react';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { StudyFlowSection } from '@/components/landing/study-flow-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { CTASection } from '@/components/landing/cta-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { GlobalCursor } from '@/components/creative/global-cursor';
import { ScrollReveal } from '@/components/creative/scroll-reveal';

export default function LandingPage() {
  return (
    <GlobalCursor>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.2}>
          <StudyFlowSection />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.1}>
          <HowItWorksSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal direction="down" delay={0.2}>
          <PricingSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <LandingFooter />
        </ScrollReveal>
      </div>
    </GlobalCursor>
  );
}
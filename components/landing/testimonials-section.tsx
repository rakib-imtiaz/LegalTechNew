'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Star,
  Quote
} from 'lucide-react';
import { SlideIn } from '@/components/react-bits';
import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import GradientText from '@/components/ui/gradient-text';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Medical Student",
    avatar: "/avatars/sarah.jpg",
    text: "Learningly AI transformed how I study for my medical boards. The AI-generated flashcards and adaptive quizzes helped me improve my retention by 40%.",
  },
  {
    name: "Marcus Johnson",
    role: "CS Professor",
    avatar: "/avatars/marcus.jpg", 
    text: "I use Learningly AI to create study materials for my students. The quality of AI-generated summaries and quizzes is exceptional.",
  },
  {
    name: "Emma Rodriguez",
    role: "High School Student",
    avatar: "/avatars/emma.jpg",
    text: "Finally, a study tool that actually makes learning fun! The interactive quizzes adapt to my level, and the AI chat tutor explains concepts in ways I can understand.",
  },
  {
    name: "Dr. James Park",
    role: "Corporate Trainer",
    avatar: "/avatars/james.jpg",
    text: "We implemented Learningly AI for our employee training programs. The platform's ability to convert our extensive documentation into engaging learning materials has revolutionized our onboarding process.",
  },
  {
    name: "Lisa Thompson",
    role: "Law Student",
    avatar: "/avatars/lisa.jpg",
    text: "Studying law requires processing massive amounts of information. Learningly AI's smart summaries and case law breakdowns have been a game-changer.",
  },
  {
    name: "Ahmed Hassan",
    role: "Language Learner",
    avatar: "/avatars/ahmed.jpg",
    text: "Learning Spanish was always challenging until I found Learningly AI. The platform creates personalized flashcards from YouTube videos and articles.",
  }
];

const TestimonialCard = ({ name, role, text, avatar }: typeof testimonials[0]) => (
  <div className="relative h-full w-80 flex-shrink-0 overflow-hidden rounded-2xl border bg-background p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <Quote className="absolute top-6 right-6 h-16 w-16 text-muted-foreground/5" />
    <div className="flex items-center gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-heading font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
    <p className="mt-4 text-sm text-foreground">{text}</p>
    <div className="mt-4 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-muted py-24">
      <div className="container mx-auto px-4">
        
        <SlideIn direction="down" className="text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 py-2 px-4 text-sm font-medium text-primary">
            Wall of Love
          </Badge>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={4}
            showBorder={false}
            className="font-heading text-4xl font-bold tracking-tighter md:text-5xl"
          >
            Trusted by Learners Worldwide
          </GradientText>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See what students, educators, and professionals are saying about their experience with Learningly AI.
          </p>
        </SlideIn>
      </div>

      <div className="relative mt-16 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-muted"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-muted"></div>
      </div>
    </section>
  );
};

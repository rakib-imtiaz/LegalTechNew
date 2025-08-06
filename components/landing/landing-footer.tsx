'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Twitter,
  Github,
  Linkedin,
} from 'lucide-react';
import { SlideIn } from '@/components/react-bits';
import Link from 'next/link';

const navigation = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'API', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export const LandingFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <SlideIn direction="up">
          <div className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-black p-2">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="font-heading text-xl font-bold text-foreground">Learningly AI</span>
              </div>
              <p className="mt-4 max-w-sm text-muted-foreground">
                A smarter way to learn. Transform your study materials into interactive content with the power of AI.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:grid-cols-3">
              {(Object.keys(navigation) as (keyof typeof navigation)[]).map(key => (
                <div key={key}>
                  <h3 className="font-heading font-semibold capitalize text-foreground">{key}</h3>
                  <ul className="mt-4 space-y-2">
                    {navigation[key].map(item => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-muted-foreground hover:text-black">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <h3 className="font-heading font-semibold text-foreground">Subscribe to our newsletter</h3>
              <p className="mt-2 text-muted-foreground">
                Get the latest news, updates, and tips.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Enter your email" className="flex-1 bg-background" />
                <Button className="bg-black text-white hover:bg-gray-800">Subscribe</Button>
              </div>
            </div>
          </div>
        </SlideIn>

        <SlideIn direction="up" delay={0.1}>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Learningly AI, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-black">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </SlideIn>
      </div>
    </footer>
  );
};

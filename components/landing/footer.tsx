"use client"

import * as React from "react"
import Link from "next/link"
import { Scale, Twitter, Github, Linkedin } from "lucide-react"
import { motion, useInView } from "motion/react"

export function LandingFooter() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialIcons = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  const footerSections = [
    { title: "Product", links: ["Features", "Pricing", "Security", "Integrations"] },
    { title: "Company",  links: ["About Us", "Careers", "Blog", "Contact"] },
    { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Cookie Policy"] }
  ];

  return (
    <footer className="bg-gray-900 border-t border-white/10 pt-16 pb-8" ref={ref}>
      <div className="container grid md:grid-cols-3 gap-12">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-green-400">
              <Scale className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold text-white">NomosAI</span>
          </Link>
          <p className="text-gray-400">
            AI-Powered LegalTech Platform
          </p>
          <div className="flex space-x-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 gap-8">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="container mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        &copy; {new Date().getFullYear()} NomosAI, Inc. All rights reserved.
      </motion.div>
    </footer>
  )
}

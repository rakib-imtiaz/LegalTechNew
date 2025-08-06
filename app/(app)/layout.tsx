"use client"

import * as React from "react"
import {
  Menu,
  Home,
  BookOpen,
  PencilRuler,
  Lightbulb,
  ScanSearch,
  GraduationCap,
  User,
  Calendar,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import AppSidebar from "@/components/app-sidebar"
import { usePathname } from 'next/navigation'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: pathname === '/dashboard' },
    { icon: BookOpen, label: "Reading", href: "/reading", active: pathname === '/reading' },
    { icon: PencilRuler, label: "Writing", href: "/writing", active: pathname === '/writing' },
    { icon: Lightbulb, label: "Solver", href: "/solver", active: pathname === '/solver' },
    { icon: ScanSearch, label: "Search", href: "/search", active: pathname === '/search' },
    { icon: GraduationCap, label: "Exam Prep", href: "/exam-prep", active: pathname === '/exam-prep' },
  ]

  const workspaceItems = [
    { icon: User, label: "Account", href: "/account" },
    { icon: Calendar, label: "Calendar", href: "/calendar" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="hidden md:block">
        <AppSidebar
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          navigationItems={navigationItems}
          workspaceItems={workspaceItems}
        />
      </div>
      
      <main className={`${sidebarCollapsed ? 'md:ml-[60px]' : 'md:ml-[250px]'} transition-all duration-300`}>
        {children}
      </main>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 text-black">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] bg-[#1C1C1C] p-0">
            <AppSidebar
              sidebarCollapsed={false}
              setSidebarCollapsed={() => {}}
              navigationItems={navigationItems}
              workspaceItems={workspaceItems}
              isMobile
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

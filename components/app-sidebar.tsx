"use client"

import * as React from "react"
import { 
  FileText, 
  PenTool, 
  Search, 
  MessageCircle, 
  FolderOpen, 
  Users, 
  Settings, 
  Scale,
  Home,
  Calendar,
  Bell
} from "lucide-react"
import Image from "next/image"

import {
  Sidebar,
  SidebarBody,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const mainNav = [
  { href: "/", icon: Home, label: "Dashboard" },
  { href: "/case-glancer", icon: FileText, label: "Case Glancer" },
  { href: "/document-drafter", icon: PenTool, label: "Document Drafter" },
  { href: "/research", icon: Search, label: "Legal Research" },
  { href: "/client-intake", icon: MessageCircle, label: "Client Intake" },
  { href: "/storage", icon: FolderOpen, label: "Case Storage" },
]

const secondaryNav = [
  { href: "/clients", icon: Users, label: "Clients" },
  { href: "/calendar", icon: Calendar, label: "Calendar" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
]

export function AppSidebar() {
  const [activeItem, setActiveItem] = React.useState("/")

  return (
    <Sidebar className="border-r border-white/10">
      <SidebarContent>
        <SidebarHeader>
          <div className="flex items-center space-x-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-green-400">
              <Scale className="h-6 w-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">NomosAI</span>
              <span className="text-xs text-muted-foreground">Legal Platform</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarBody className="flex flex-col justify-between">
          <div className="space-y-6">
            <SidebarMenu>
              <SidebarHeading>Main Features</SidebarHeading>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Button
                    variant={activeItem === item.href ? "secondary" : "ghost"}
                    onClick={() => setActiveItem(item.href)}
                    className="w-full justify-start space-x-3"
                    size="sm"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <SidebarMenu>
              <SidebarHeading>Workspace</SidebarHeading>
              {secondaryNav.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Button
                    variant={activeItem === item.href ? "secondary" : "ghost"}
                    onClick={() => setActiveItem(item.href)}
                    className="w-full justify-start space-x-3"
                    size="sm"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>

          <SidebarMenu>
            <SidebarMenuItem>
              <Button variant="ghost" className="w-full justify-start space-x-3" size="sm">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarBody>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 border border-white/10">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-green-400 flex items-center justify-center">
            <span className="text-sm font-bold text-black">LA</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Legal Assistant</p>
            <p className="text-xs text-muted-foreground truncate">Pro License</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
} 
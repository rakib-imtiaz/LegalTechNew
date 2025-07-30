"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { 
  Menu, Search, Bell, User, Home, Eye, FileText, 
  BookOpen, MessageSquare, Archive, Calendar, Settings,
  BarChart3, TrendingUp, Clock, Star, AlertCircle,
  ChevronRight, Plus, Filter, LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)

  const navigationItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: Eye, label: "Case Glancer", href: "/case-glancer" },
    { icon: FileText, label: "Document Drafter", href: "/document-drafter" },
    { icon: BookOpen, label: "Legal Research", href: "/legal-research" },
    { icon: MessageSquare, label: "Client Intake", href: "/client-intake" },
    { icon: Archive, label: "Case Storage", href: "/case-storage" },
  ]

  const workspaceItems = [
    { icon: User, label: "Clients", href: "/clients" },
    { icon: Calendar, label: "Calendar", href: "/calendar" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
  ]

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      {/* Desktop Sidebar */}
      <div className={`hidden md:flex fixed left-0 top-0 h-full bg-[#0D1117] border-r border-gray-800 z-40 transition-all duration-300 ${sidebarCollapsed ? 'w-[50px]' : 'w-[250px]'}`}>
        <div className="flex flex-col w-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1ABC9C]">
                  <span className="text-sm font-bold text-black">N</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">NomosAI</div>
                  <div className="text-xs text-gray-400">Legal Platform</div>
                </div>
              </div>
            )}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-gray-400 hover:text-white"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* Main Features */}
          <div className="flex-1 p-2">
            {!sidebarCollapsed && (
              <div className="text-xs font-medium text-gray-400 mb-2 px-2">MAIN FEATURES</div>
            )}
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className={`flex items-center space-x-3 px-2 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                    item.active 
                      ? 'bg-[#1ABC9C] text-black font-medium' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}>
                    <item.icon className="h-5 w-5" />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </div>
                </Link>
              ))}
            </nav>

            {/* Workspace */}
            {!sidebarCollapsed && (
              <div className="text-xs font-medium text-gray-400 mb-2 px-2 mt-6">WORKSPACE</div>
            )}
            <nav className="space-y-1">
              {workspaceItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className="flex items-center space-x-3 px-2 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <item.icon className="h-5 w-5" />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Settings */}
          <div className="p-2 border-t border-gray-800">
            <Link href="/settings">
              <div className="flex items-center space-x-3 px-2 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                <Settings className="h-5 w-5" />
                {!sidebarCollapsed && <span>Settings</span>}
              </div>
            </Link>
            {!sidebarCollapsed && (
              <div className="mt-3 p-2 bg-[#1ABC9C]/10 rounded-lg border border-[#1ABC9C]/20">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-[#1ABC9C] rounded-full"></div>
                  <span className="text-xs font-medium text-[#1ABC9C]">Legal Assistant</span>
                </div>
                <div className="text-xs text-gray-400">Pro License</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] bg-[#0D1117] border-gray-800">
            {/* Mobile navigation content - same as desktop but without collapse functionality */}
            <div className="flex flex-col h-full">
              <div className="flex items-center space-x-2 p-4 border-b border-gray-800">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1ABC9C]">
                  <span className="text-sm font-bold text-black">N</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">NomosAI</div>
                  <div className="text-xs text-gray-400">Legal Platform</div>
                </div>
              </div>
              {/* Navigation items for mobile */}
              <div className="flex-1 p-2">
                <div className="text-xs font-medium text-gray-400 mb-2 px-2">MAIN FEATURES</div>
                <nav className="space-y-1">
                  {navigationItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <div className={`flex items-center space-x-3 px-2 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                        item.active 
                          ? 'bg-[#1ABC9C] text-black font-medium' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
                
                {/* Workspace section for mobile */}
                <div className="text-xs font-medium text-gray-400 mb-2 px-2 mt-6">WORKSPACE</div>
                <nav className="space-y-1">
                  {workspaceItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <div className="flex items-center space-x-3 px-2 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Mobile Settings & Logout */}
              <div className="p-2 border-t border-gray-800">
                <Link href="/settings">
                  <div className="flex items-center space-x-3 px-2 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </div>
                </Link>
                <Link href="/">
                  <div className="flex items-center space-x-3 px-2 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </div>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <div className={`${sidebarCollapsed ? 'md:ml-[50px]' : 'md:ml-[250px]'} transition-all duration-300`}>
        {/* Header */}
        <header className="h-[70px] border-b border-gray-800 bg-[#0D1117] px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="md:hidden w-10"></div> {/* Spacer for mobile menu button */}
            <h1 className="text-xl font-semibold">Legal Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search cases, documents, clients..."
                className="pl-10 w-[300px] bg-gray-800 border-gray-700 text-white focus:border-[#1ABC9C] focus:ring-[#1ABC9C]"
              />
            </div>
            
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>
            
            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-gray-400">Senior Partner</div>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-[#1ABC9C] text-black font-medium">JD</AvatarFallback>
              </Avatar>
              
              {/* Logout Button */}
              <Button 
                asChild 
                variant="ghost" 
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
              >
                <Link href="/" className="flex items-center space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Welcome back, John</h2>
            <p className="text-gray-400">Here's what's happening with your cases today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-400">Active Cases</h3>
                <BarChart3 className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold mb-1">24</div>
              <p className="text-xs text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-400">Success Rate</h3>
                <Star className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold mb-1">94%</div>
              <p className="text-xs text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5% from last month
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-400">Avg. Case Time</h3>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold mb-1">45 days</div>
              <p className="text-xs text-red-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                -8% from last month
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-400">Client Satisfaction</h3>
                <Star className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold mb-1">4.8/5</div>
              <p className="text-xs text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.2 from last month
              </p>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 cursor-pointer transition-colors duration-200 p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                    <FileText className="h-5 w-5 text-green-400" />
                  </div>
                  <h4 className="font-semibold">New Case Analysis</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Upload documents and get AI-powered case insights</p>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 cursor-pointer transition-colors duration-200 p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                    <Plus className="h-5 w-5 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Draft Document</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Generate legal documents with AI assistance</p>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 cursor-pointer transition-colors duration-200 p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                    <Search className="h-5 w-5 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Legal Research</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Ask questions and get legal research with citations</p>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 cursor-pointer transition-colors duration-200 p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5 text-green-400" />
                  </div>
                  <h4 className="font-semibold">Client Interview</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Start an AI-powered client intake session</p>
              </Card>
            </div>
          </div>

          {/* Recent Cases and Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            {/* Recent Cases */}
            <Card className="lg:col-span-4 bg-gray-900 border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Recent Cases</h3>
                    <p className="text-sm text-gray-400">Your most recently updated cases</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-gray-700">
                    View All Cases
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">Smith vs. Johnson Contract Dispute</h4>
                      <p className="text-sm text-gray-400">CASE-001</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">High</Badge>
                      <span className="text-sm text-gray-400">2 hours ago</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">Thompson Immigration Case</h4>
                      <p className="text-sm text-gray-400">CASE-002</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Review</Badge>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Medium</Badge>
                      <span className="text-sm text-gray-400">1 day ago</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">Corporate Merger Documentation</h4>
                      <p className="text-sm text-gray-400">CASE-003</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Completed</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Low</Badge>
                      <span className="text-sm text-gray-400">3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Alerts & Notifications */}
            <Card className="lg:col-span-3 bg-gray-900 border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Alerts & Notifications</h3>
                    <p className="text-sm text-gray-400">Important updates and deadlines</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-red-500/20 rounded-full">
                      <AlertCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Court Filing Due</h4>
                      <p className="text-xs text-gray-400">Smith vs. Johnson - Due in 2 days</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-500/20 rounded-full">
                      <Calendar className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Client Meeting</h4>
                      <p className="text-xs text-gray-400">Thompson case review - Today 3:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-500/20 rounded-full">
                      <FileText className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Document Signed</h4>
                      <p className="text-xs text-gray-400">Merger agreement completed</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4 border-gray-700">
                  View All Notifications
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
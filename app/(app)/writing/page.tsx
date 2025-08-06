"use client"

import * as React from "react"
import {
  Pencil,
  Sparkles,
  CheckCircle,
  ChevronDown,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { SlideIn } from "@/components/react-bits/slide-in"

const WritingPage = () => {
  const [text, setText] = React.useState("")
  const [result, setResult] = React.useState("")
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [mode, setMode] = React.useState("Formal")

  const handleParaphrase = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setResult(
        `This is the ${mode.toLowerCase()} version of your text. It has been rewritten to be more clear, concise, and professional.`
      )
      setIsProcessing(false)
    }, 1500)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Writing Assistant</h1>
      <p className="text-gray-500 mb-8">
        Paraphrase your text to improve clarity, tone, and style.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Pencil className="mr-2" />
              Original Text
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here..."
              className="h-64"
            />
            <div className="flex justify-between items-center mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {mode} <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {["Formal", "Fluent", "Academic", "Standard"].map((m) => (
                    <DropdownMenuItem key={m} onSelect={() => setMode(m)}>
                      {m}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={handleParaphrase} disabled={isProcessing}>
                {isProcessing ? "Paraphrasing..." : "Paraphrase"}
                {!isProcessing && <RefreshCw className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="mr-2" />
              Paraphrased Text
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <SlideIn>
                <Textarea value={result} readOnly className="h-64 bg-gray-50" />
              </SlideIn>
            ) : (
              <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">
                  Your paraphrased text will appear here.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default WritingPage

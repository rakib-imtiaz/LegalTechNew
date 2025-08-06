"use client"

import * as React from "react"
import {
  Upload,
  FileText,
  BookOpen,
  ClipboardList,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { FadeContent } from "@/components/react-bits/fade-content"
import { Bounce } from "@/components/react-bits/bounce"

const ReadingPage = () => {
  const [activeTab, setActiveTab] = React.useState("summary")
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [result, setResult] = React.useState(null)

  const handleProcess = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setResult({
        summary: "This is a smart summary of your document. It highlights the key points and main arguments, providing a concise overview of the content.",
        notes: [
          "Key formula: E=mc²",
          "Important date: 1492",
          "Main definition: Photosynthesis is the process used by plants to convert light energy into chemical energy.",
        ],
        quiz: [
          {
            question: "What is the key formula mentioned?",
            options: ["E=mc²", "A²+B²=C²", "F=ma"],
            answer: "E=mc²",
          },
          {
            question: "What is the main definition provided?",
            options: ["Photosynthesis", "Metabolism", "Respiration"],
            answer: "Photosynthesis",
          },
        ],
      })
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Reading Assistant</h1>
      <p className="text-gray-500 mb-8">
        Upload your documents to generate smart summaries, notes, and quizzes.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2" />
                Upload Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-500 mb-4">
                  Drag & drop files here or click to upload.
                </p>
                <Button>Browse Files</Button>
              </div>
              <div className="mt-6">
                <Button onClick={handleProcess} disabled={isProcessing} className="w-full">
                  {isProcessing ? "Processing..." : "Generate Insights"}
                  {!isProcessing && <Sparkles className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {result ? (
            <FadeContent>
              <Tabs defaultValue="summary" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="summary">
                    <BookOpen className="mr-2" />
                    Summary
                  </TabsTrigger>
                  <TabsTrigger value="notes">
                    <ClipboardList className="mr-2" />
                    Notes
                  </TabsTrigger>
                  <TabsTrigger value="quiz">
                    <Sparkles className="mr-2" />
                    Quiz
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="mt-4">
                  <Card className="shadow-lg rounded-xl">
                    <CardHeader>
                      <CardTitle>Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{result.summary}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="notes" className="mt-4">
                  <Card className="shadow-lg rounded-xl">
                    <CardHeader>
                      <CardTitle>Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {result.notes.map((note, index) => (
                          <li key={index}>{note}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="quiz" className="mt-4">
                  <Card className="shadow-lg rounded-xl">
                    <CardHeader>
                      <CardTitle>Quiz</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {result.quiz.map((q, index) => (
                        <div key={index} className="mb-4">
                          <p className="font-semibold">{q.question}</p>
                          <div className="flex flex-col space-y-2 mt-2">
                            {q.options.map((opt) => (
                              <Button key={opt} variant="outline">
                                {opt}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </FadeContent>
          ) : (
            <div className="flex items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">
                Your generated content will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReadingPage

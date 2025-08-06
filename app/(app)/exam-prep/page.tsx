"use client"

import * as React from "react"
import {
  GraduationCap,
  Sparkles,
  Plus,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const ExamPrepPage = () => {
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [testReady, setTestReady] = React.useState(false)
  const [selectedTopic, setSelectedTopic] = React.useState("")
  const [selectedType, setSelectedType] = React.useState("")
  const [selectedQuestions, setSelectedQuestions] = React.useState("")

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setTestReady(true)
    }, 2500)
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Exam Preparation</h1>
        <p className="text-gray-500">
          Generate custom practice exams from your study materials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Create New Exam Card */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg rounded-xl border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Plus className="mr-2 h-5 w-5" />
                Create New Exam
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Topic</label>
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="algebra">Algebra</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Question Types</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Question Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mcq">Multiple Choice</SelectItem>
                    <SelectItem value="short_answer">Short Answer</SelectItem>
                    <SelectItem value="essay">Essay Questions</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Number of Questions</label>
                <Select value={selectedQuestions} onValueChange={setSelectedQuestions}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Number of Questions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 Questions</SelectItem>
                    <SelectItem value="20">20 Questions</SelectItem>
                    <SelectItem value="30">30 Questions</SelectItem>
                    <SelectItem value="50">50 Questions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !selectedTopic || !selectedType || !selectedQuestions} 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Exam
                    <Sparkles className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Generated Exam Display */}
        <div className="lg:col-span-2">
          {testReady ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg rounded-xl border-green-200 bg-green-50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-800">Your Practice Exam is Ready!</CardTitle>
                  <p className="text-green-600 mt-2">
                    {selectedQuestions} {selectedType === 'mcq' ? 'Multiple Choice' : selectedType === 'short_answer' ? 'Short Answer' : selectedType} questions on {selectedTopic}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Good luck! You can review your results and get detailed explanations afterward.
                  </p>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                    Start Exam
                    <TrendingUp className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <div className="h-full min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
              <div className="text-center">
                <GraduationCap className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 text-lg">Your generated exam will appear here</p>
                <p className="text-gray-400 text-sm mt-2">Fill out the form and click "Generate Exam" to get started</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Tracking Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-black mb-6">Progress Tracking</h2>
        <Card className="shadow-lg rounded-xl border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg">Overall Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Biology</span>
                <span className="font-bold text-green-600">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">History</span>
                <span className="font-bold text-blue-600">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Chemistry</span>
                <span className="font-bold text-yellow-600">68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ExamPrepPage
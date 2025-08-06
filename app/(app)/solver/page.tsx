"use client"

import * as React from "react"
import {
  Lightbulb,
  ChevronRight,
  BrainCircuit,
  Plus,
  Type,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Typewriter } from "@/components/react-bits/typewriter"

const steps = [
  {
    title: "Identify the variables",
    explanation: "The key variables are distance (d), rate (r), and time (t).",
  },
  {
    title: "Apply the formula",
    explanation: "Use the formula d = r * t to find the solution.",
  },
  {
    title: "Calculate the result",
    explanation: "Substitute the values and solve for the unknown variable.",
  },
]

const SolverPage = () => {
  const [problem, setProblem] = React.useState("")
  const [solution, setSolution] = React.useState(null)
  const [isProcessing, setIsProcessing] = React.useState(false)

  const handleSolve = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setSolution({
        finalAnswer: "The answer is 42.",
        steps: steps,
      })
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Problem Solver</h1>
      <p className="text-gray-500 mb-8">
        Get step-by-step solutions to your math and science problems.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Type className="mr-2" />
              Enter Your Problem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="e.g., Solve for x in 2x + 5 = 15"
              className="h-48"
            />
            <Button
              onClick={handleSolve}
              disabled={isProcessing}
              className="w-full mt-4"
            >
              {isProcessing ? "Solving..." : "Solve"}
              {!isProcessing && <BrainCircuit className="ml-2 h-4 w-4" />}
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2" />
              Solution
            </CardTitle>
          </CardHeader>
          <CardContent>
            {solution ? (
              <Typewriter>
                <div className="space-y-4">
                  {solution.steps.map((step, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg">{`${index + 1}. ${
                        step.title
                      }`}</h3>
                      <p className="text-gray-600">{step.explanation}</p>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-bold text-xl">{solution.finalAnswer}</h3>
                  </div>
                </div>
              </Typewriter>
            ) : (
              <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">
                  Your step-by-step solution will appear here.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SolverPage

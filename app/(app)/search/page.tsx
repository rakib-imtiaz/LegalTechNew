"use client"

import * as React from "react"
import { Search, Sparkles, Filter, FileText, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ClickSpark } from "@/components/react-bits/click-spark"

interface SearchResult {
  title: string;
  source: string;
  snippet: string;
}

const searchResults: SearchResult[] = [
  {
    title: "The Impact of AI on Modern Education",
    source: "research-paper.pdf",
    snippet:
      "AI is transforming education by providing personalized learning experiences...",
  },
  {
    title: "Key Concepts in Quantum Physics",
    source: "physics-notes.docx",
    snippet:
      "Quantum physics deals with the behavior of matter and energy at the atomic level...",
  },
]

const SearchPage = () => {
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState<SearchResult[]>([])
  const [isProcessing, setIsProcessing] = React.useState(false)

  const handleSearch = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setResults(searchResults)
      setIsProcessing(false)
    }, 1500)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Customized AI Search</h1>
      <p className="text-gray-500 mb-8">
        Find AI-powered answers from your uploaded documents.
      </p>

      <div className="flex items-center space-x-2 mb-8">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1"
        />
        <ClickSpark>
          <Button onClick={handleSearch} disabled={isProcessing}>
            {isProcessing ? "Searching..." : "Search"}
            {!isProcessing && <Sparkles className="ml-2 h-4 w-4" />}
          </Button>
        </ClickSpark>
        <Button variant="outline">
          <Filter className="mr-2" />
          Filter
        </Button>
      </div>

      <div>
        {results.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {results.map((result, index) => (
              <Card key={index} className="shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{result.snippet}</p>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <Badge variant="secondary">{result.source}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Your search results will appear here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage

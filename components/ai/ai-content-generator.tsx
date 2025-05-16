"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, FileText, List, HelpCircle } from "lucide-react"

export default function AIContentGenerator() {
  const [contentType, setContentType] = useState("article")
  const [topic, setTopic] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")

  const handleGenerate = () => {
    if (!topic.trim()) return

    setIsGenerating(true)
    setGeneratedContent("")

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setGeneratedContent(
        "# Understanding Blockchain Technology\n\n" +
          "Blockchain technology is a distributed ledger system that enables secure, transparent, and immutable record-keeping without requiring a central authority.\n\n" +
          "## Key Features\n\n" +
          "- **Decentralization**: No single entity controls the network\n" +
          "- **Transparency**: All transactions are visible to network participants\n" +
          "- **Immutability**: Once recorded, data cannot be altered\n" +
          "- **Security**: Cryptographic techniques protect data integrity\n\n" +
          "## How It Works\n\n" +
          "Blockchain operates through a consensus mechanism where network participants validate transactions. These transactions are grouped into blocks and added to a chain of previous blocks, creating a permanent record.",
      )
    }, 2000)
  }

  return (
    <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-green-900/20 p-2">
            <BookOpen className="h-6 w-6 text-green-500" />
          </div>
          <CardTitle className="text-xl text-white">AI Content Generator</CardTitle>
        </div>
        <CardDescription className="text-gray-400">Create educational content for ACE Learn</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Content Type</label>
            <Select value={contentType} onValueChange={setContentType}>
              <SelectTrigger className="border-gray-700 bg-gray-900/50 text-white">
                <SelectValue placeholder="Select content type" />
              </SelectTrigger>
              <SelectContent className="border-gray-700 bg-gray-900 text-white">
                <SelectItem value="article">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4 text-green-500" />
                    <span>Article</span>
                  </div>
                </SelectItem>
                <SelectItem value="quiz">
                  <div className="flex items-center">
                    <HelpCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Quiz</span>
                  </div>
                </SelectItem>
                <SelectItem value="tutorial">
                  <div className="flex items-center">
                    <List className="mr-2 h-4 w-4 text-green-500" />
                    <span>Tutorial</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Topic</label>
            <Textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic or concept (e.g., 'Blockchain basics for beginners')"
              className="h-[80px] resize-none border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        <Button
          onClick={handleGenerate}
          disabled={!topic.trim() || isGenerating}
          className="w-full bg-green-600 text-black hover:bg-green-500"
        >
          {isGenerating ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-black"></div>
              Generating Content...
            </>
          ) : (
            "Generate Content"
          )}
        </Button>

        {generatedContent && (
          <div className="mt-4 rounded-md bg-gray-900/50 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-green-400">Generated {contentType}</h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 border-gray-700 bg-transparent text-xs text-gray-300 hover:bg-gray-800"
              >
                Copy
              </Button>
            </div>
            <div className="max-h-[300px] overflow-y-auto whitespace-pre-line rounded bg-gray-800/50 p-3 text-sm text-gray-300">
              {generatedContent}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

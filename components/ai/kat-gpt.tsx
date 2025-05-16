"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bot, Send, Star, Sparkles, HelpCircle } from "lucide-react"

export default function KatGPT() {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setMessage("")
    }, 1500)
  }

  const suggestedQuestions = [
    "Tell me about ACE Exchange",
    "What are the platform's features?",
    "How do I earn XP?",
    "What is the ACE token?",
    "How does staking work?",
    "Tell me about the Dreamstate",
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card className="h-full border-gray-800 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-purple-900/20 p-2">
                <Bot className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="text-xl text-white">Chat with ACE Kat</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Your friendly AI assistant with cosmic knowledge
            </CardDescription>
          </CardHeader>
          <CardContent className="flex h-[calc(100%-8rem)] flex-col">
            <div className="mb-4 flex-1 rounded-md bg-gray-900/50 p-4">
              <div className="mb-4 rounded-md bg-gray-800/50 p-3 text-gray-300">
                <p className="mb-2 font-medium text-purple-400">ACE Kat</p>
                <p>
                  *purrs softly* Hello there, cosmic traveler! I'm ACE Kat, your guide to the ACE Exchange universe.
                  What would you like to explore today? I can help with platform features, earning XP, or tell you about
                  the mysterious Dreamstate...
                </p>
              </div>

              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask ACE Kat anything about the platform..."
                className="border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500"
              />
              <Button type="submit" disabled={isLoading} className="bg-purple-600 text-black hover:bg-purple-500">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-purple-900/20 p-2">
                <Star className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle className="text-lg text-white">Suggested Questions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(question)}
                  className="w-full rounded-md bg-gray-800/50 p-2 text-left text-sm text-gray-300 transition-colors hover:bg-gray-700/50"
                >
                  {question}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-purple-900/20 p-2">
                <Sparkles className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle className="text-lg text-white">Kat's Mood</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md bg-gray-900/50 p-4">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-2xl">😺</div>
                  <p className="text-sm text-purple-400">Curious</p>
                  <p className="mt-1 text-xs text-gray-400">Kat is curious about your questions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-purple-900/20 p-2">
                <HelpCircle className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle className="text-lg text-white">Help Topics</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full rounded-md bg-gray-800/50 p-2 text-left text-sm text-gray-300 transition-colors hover:bg-gray-700/50">
                Getting Started Guide
              </button>
              <button className="w-full rounded-md bg-gray-800/50 p-2 text-left text-sm text-gray-300 transition-colors hover:bg-gray-700/50">
                Trading Basics
              </button>
              <button className="w-full rounded-md bg-gray-800/50 p-2 text-left text-sm text-gray-300 transition-colors hover:bg-gray-700/50">
                XP & Rewards
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

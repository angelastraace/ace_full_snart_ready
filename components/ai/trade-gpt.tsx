"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TrendingUp, Send, BarChart2, LineChart, PieChart } from "lucide-react"

export default function TradeGPT() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card className="h-full border-gray-800 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-teal-900/20 p-2">
                <TrendingUp className="h-6 w-6 text-teal-500" />
              </div>
              <CardTitle className="text-xl text-white">TradeGPT Analysis</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Ask about market trends, price predictions, or trading strategies
            </CardDescription>
          </CardHeader>
          <CardContent className="flex h-[calc(100%-8rem)] flex-col">
            <div className="mb-4 flex-1 rounded-md bg-gray-900/50 p-4">
              <div className="mb-4 rounded-md bg-gray-800/50 p-3 text-gray-300">
                <p className="mb-2 font-medium text-teal-400">TradeGPT</p>
                <p>
                  Hello! I'm TradeGPT, your AI-powered market analysis assistant. I can help you with price predictions,
                  market trends, trading strategies, and more. What would you like to know today?
                </p>
              </div>

              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-teal-500"></div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about market trends, price analysis, or trading strategies..."
                className="border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500"
              />
              <Button type="submit" disabled={isLoading} className="bg-teal-600 text-black hover:bg-teal-500">
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
              <div className="mr-3 rounded-full bg-teal-900/20 p-2">
                <BarChart2 className="h-5 w-5 text-teal-500" />
              </div>
              <CardTitle className="text-lg text-white">Market Sentiment</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-32 rounded-md bg-gray-900/50 p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-gray-400">Sentiment visualization will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-teal-900/20 p-2">
                <LineChart className="h-5 w-5 text-teal-500" />
              </div>
              <CardTitle className="text-lg text-white">Price Prediction</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-32 rounded-md bg-gray-900/50 p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-gray-400">Price prediction chart will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-teal-900/20 p-2">
                <PieChart className="h-5 w-5 text-teal-500" />
              </div>
              <CardTitle className="text-lg text-white">Portfolio Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-32 rounded-md bg-gray-900/50 p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-gray-400">Portfolio analysis will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

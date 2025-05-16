"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"

export default function TradePatternRecognizer() {
  const [asset, setAsset] = useState("BTC")
  const [timeframe, setTimeframe] = useState("1d")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<null | {
    patterns: Array<{
      name: string
      type: "bullish" | "bearish" | "neutral"
      confidence: number
      description: string
    }>
    indicators: Array<{
      name: string
      value: string
      signal: "buy" | "sell" | "neutral"
    }>
  }>(null)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setAnalysisResults(null)

    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisResults({
        patterns: [
          {
            name: "Bullish Engulfing",
            type: "bullish",
            confidence: 87,
            description:
              "A bullish reversal pattern that forms after a downtrend, indicating potential upward movement.",
          },
          {
            name: "Support Level",
            type: "bullish",
            confidence: 92,
            description:
              "Price has reached a strong support level with multiple bounces, suggesting potential reversal.",
          },
          {
            name: "Volume Spike",
            type: "neutral",
            confidence: 78,
            description: "Unusual volume activity detected, indicating potential significant price movement.",
          },
        ],
        indicators: [
          {
            name: "RSI (14)",
            value: "32.5",
            signal: "buy",
          },
          {
            name: "MACD",
            value: "Crossover",
            signal: "buy",
          },
          {
            name: "Moving Avg (50/200)",
            value: "Below",
            signal: "sell",
          },
          {
            name: "Bollinger Bands",
            value: "Lower Band Touch",
            signal: "buy",
          },
        ],
      })
    }, 2000)
  }

  return (
    <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-red-900/20 p-2">
            <Zap className="h-6 w-6 text-red-500" />
          </div>
          <CardTitle className="text-xl text-white">Pattern Recognizer</CardTitle>
        </div>
        <CardDescription className="text-gray-400">Identify trading patterns and market signals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Asset</label>
            <Select value={asset} onValueChange={setAsset}>
              <SelectTrigger className="border-gray-700 bg-gray-900/50 text-white">
                <SelectValue placeholder="Select asset" />
              </SelectTrigger>
              <SelectContent className="border-gray-700 bg-gray-900 text-white">
                <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                <SelectItem value="ACE">ACE Token (ACE)</SelectItem>
                <SelectItem value="SOL">Solana (SOL)</SelectItem>
                <SelectItem value="AVAX">Avalanche (AVAX)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Timeframe</label>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="border-gray-700 bg-gray-900/50 text-white">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent className="border-gray-700 bg-gray-900 text-white">
                <SelectItem value="15m">15 minutes</SelectItem>
                <SelectItem value="1h">1 hour</SelectItem>
                <SelectItem value="4h">4 hours</SelectItem>
                <SelectItem value="1d">1 day</SelectItem>
                <SelectItem value="1w">1 week</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full bg-red-600 text-black hover:bg-red-500"
        >
          {isAnalyzing ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-black"></div>
              Analyzing Patterns...
            </>
          ) : (
            "Analyze Patterns"
          )}
        </Button>

        {analysisResults && (
          <div className="space-y-4">
            <div className="rounded-md bg-gray-900/50 p-4">
              <h3 className="mb-3 text-sm font-medium text-red-400">Detected Patterns</h3>
              <div className="space-y-2">
                {analysisResults.patterns.map((pattern, index) => (
                  <div key={index} className="rounded-md bg-gray-800/50 p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center">
                        {pattern.type === "bullish" ? (
                          <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                        ) : pattern.type === "bearish" ? (
                          <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                        ) : (
                          <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                        )}
                        <span className="font-medium text-white">{pattern.name}</span>
                      </div>
                      <span
                        className={`text-xs ${
                          pattern.type === "bullish"
                            ? "text-green-400"
                            : pattern.type === "bearish"
                              ? "text-red-400"
                              : "text-yellow-400"
                        }`}
                      >
                        {pattern.confidence}% confidence
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{pattern.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md bg-gray-900/50 p-4">
              <h3 className="mb-3 text-sm font-medium text-red-400">Technical Indicators</h3>
              <div className="grid grid-cols-2 gap-2">
                {analysisResults.indicators.map((indicator, index) => (
                  <div key={index} className="rounded-md bg-gray-800/50 p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-300">{indicator.name}</span>
                      <span
                        className={`text-xs font-medium ${
                          indicator.signal === "buy"
                            ? "text-green-400"
                            : indicator.signal === "sell"
                              ? "text-red-400"
                              : "text-yellow-400"
                        }`}
                      >
                        {indicator.value}
                      </span>
                    </div>
                    <div className="mt-1 text-right text-xs">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                          indicator.signal === "buy"
                            ? "bg-green-900/30 text-green-400"
                            : indicator.signal === "sell"
                              ? "bg-red-900/30 text-red-400"
                              : "bg-yellow-900/30 text-yellow-400"
                        }`}
                      >
                        {indicator.signal.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

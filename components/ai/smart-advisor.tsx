"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, TrendingUp, PieChart, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function SmartAdvisor() {
  const [riskLevel, setRiskLevel] = useState(5)
  const [timeHorizon, setTimeHorizon] = useState(3)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setShowResults(true)
    }, 2000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center">
            <div className="mr-3 rounded-full bg-blue-900/20 p-2">
              <Sparkles className="h-6 w-6 text-blue-500" />
            </div>
            <CardTitle className="text-xl text-white">Smart Portfolio Advisor</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Get personalized investment recommendations based on your profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Risk Tolerance</label>
              <div className="mb-2 flex justify-between text-xs text-gray-400">
                <span>Conservative</span>
                <span>Balanced</span>
                <span>Aggressive</span>
              </div>
              <Slider
                value={[riskLevel]}
                min={1}
                max={10}
                step={1}
                onValueChange={(value) => setRiskLevel(value[0])}
                className="py-4"
              />
              <div className="mt-1 text-center text-sm text-blue-400">
                {riskLevel <= 3 ? "Conservative" : riskLevel <= 7 ? "Balanced" : "Aggressive"}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Investment Time Horizon</label>
              <div className="mb-2 flex justify-between text-xs text-gray-400">
                <span>Short-term</span>
                <span>Medium</span>
                <span>Long-term</span>
              </div>
              <Slider
                value={[timeHorizon]}
                min={1}
                max={5}
                step={1}
                onValueChange={(value) => setTimeHorizon(value[0])}
                className="py-4"
              />
              <div className="mt-1 text-center text-sm text-blue-400">
                {timeHorizon <= 2
                  ? "Short-term (1-2 years)"
                  : timeHorizon <= 4
                    ? "Medium (3-5 years)"
                    : "Long-term (5+ years)"}
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-blue-600 text-black hover:bg-blue-500"
            >
              {isGenerating ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-black"></div>
                  Generating Recommendations...
                </>
              ) : (
                "Generate Recommendations"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {showResults ? (
          <>
            <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-blue-900/20 p-2">
                    <PieChart className="h-5 w-5 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg text-white">Recommended Allocation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-gray-900/50 p-4">
                  <div className="mb-4 grid grid-cols-4 gap-2">
                    <div className="rounded bg-blue-500/70 p-2 text-center text-xs font-medium text-white">
                      40%
                      <br />
                      BTC
                    </div>
                    <div className="rounded bg-teal-500/70 p-2 text-center text-xs font-medium text-white">
                      25%
                      <br />
                      ETH
                    </div>
                    <div className="rounded bg-purple-500/70 p-2 text-center text-xs font-medium text-white">
                      20%
                      <br />
                      ACE
                    </div>
                    <div className="rounded bg-amber-500/70 p-2 text-center text-xs font-medium text-white">
                      15%
                      <br />
                      USDC
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">
                    This allocation is optimized for a{" "}
                    {riskLevel <= 3 ? "conservative" : riskLevel <= 7 ? "balanced" : "aggressive"} risk profile with a{" "}
                    {timeHorizon <= 2 ? "short-term" : timeHorizon <= 4 ? "medium-term" : "long-term"} investment
                    horizon.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-blue-900/20 p-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg text-white">Expected Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-gray-900/50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Estimated Annual Return:</span>
                    <span className="text-sm font-medium text-blue-400">
                      {riskLevel <= 3 ? "8-12%" : riskLevel <= 7 ? "15-22%" : "25-40%"}
                    </span>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Volatility:</span>
                    <span className="text-sm font-medium text-blue-400">
                      {riskLevel <= 3 ? "Low" : riskLevel <= 7 ? "Medium" : "High"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Max Drawdown Risk:</span>
                    <span className="text-sm font-medium text-blue-400">
                      {riskLevel <= 3 ? "10-15%" : riskLevel <= 7 ? "20-30%" : "35-50%"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-blue-900/20 p-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg text-white">Risk Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 rounded-md bg-gray-900/50 p-4 text-xs text-gray-300">
                  <p>• Set stop-loss orders at 10% below entry for volatile assets</p>
                  <p>• Rebalance portfolio quarterly to maintain target allocation</p>
                  <p>• Consider dollar-cost averaging for initial positions</p>
                  <p>• Maintain 15% stablecoin reserve for buying opportunities</p>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="flex h-full items-center justify-center border-gray-800 bg-black/40 backdrop-blur-sm">
            <CardContent className="py-12 text-center">
              <Clock className="mx-auto mb-4 h-12 w-12 text-gray-600" />
              <p className="text-lg text-gray-400">Your personalized recommendations will appear here</p>
              <p className="mt-2 text-sm text-gray-500">
                Adjust your risk tolerance and time horizon, then click "Generate Recommendations"
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

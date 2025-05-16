"use client"

import { useState, useEffect, Suspense } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Starfield } from "@/components/starfield"
import { useRouter, useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"
import AceKatAvatar from "@/components/ace-kat/ace-kat-avatar"
import type { KatContext } from "@/components/ace-kat/kat-mood-engine"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

// Dynamically import heavy components
const UniverseView = dynamic(() => import("@/components/universe-view"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const XPConstellationDemo = dynamic(() => import("@/components/dreamstate/xp-constellation-demo"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const GlowDemo = dynamic(() => import("@/components/three-d/glow-mesh"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

export default function DreamstatePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [katContext, setKatContext] = useState<KatContext>("greeting")
  const [katQuote, setKatQuote] = useState("")
  const [viewMode, setViewMode] = useState<"2d" | "3d">("2d")
  const router = useRouter()
  const searchParams = useSearchParams()

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["overview", "meditation", "trade", "learn", "constellation"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  // Update Kat's context based on active tab
  useEffect(() => {
    switch (activeTab) {
      case "overview":
        setKatContext("greeting")
        break
      case "meditation":
        setKatContext("meditation")
        break
      case "trade":
        setKatContext("trading")
        break
      case "learn":
        setKatContext("learning")
        break
      case "constellation":
        setKatContext("achievement")
        break
      default:
        setKatContext("idle")
    }
  }, [activeTab])

  // Handle button clicks
  const handleBeginJourney = () => {
    router.push("/dreamstate/features")
  }

  const handleBeginSession = () => {
    // Navigate to meditation room
    router.push("/dreamstate/features?tab=meditation")
  }

  const handleBeginTrading = () => {
    // Navigate to trading section
    router.push("/trading")
  }

  const handleContinueLearning = () => {
    // Navigate to learning section
    router.push("/dreamstate/features?tab=learn")
  }

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "2d" ? "3d" : "2d"))
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Starfield starCount={1500} speedFactor={0.03} backgroundColor="rgba(0,0,0,0.95)" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Dreamstate
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enter the cosmic consciousness where reality and imagination merge. Trade, learn, and evolve in a universe
            of infinite possibilities.
          </p>

          <div className="mt-4">
            <Button
              variant="outline"
              onClick={toggleViewMode}
              className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
            >
              Switch to {viewMode === "2d" ? "3D" : "2D"} View
            </Button>
          </div>
        </motion.div>

        {viewMode === "3d" ? (
          <div className="h-[70vh] w-full rounded-xl overflow-hidden border border-purple-500/20 mb-8">
            <Suspense fallback={<LoadingSpinner />}>
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-400">3D Galaxy Navigation loading...</p>
              </div>
            </Suspense>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-black/40 border border-purple-500/20 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Cosmic Consciousness</CardTitle>
                    <CardDescription>Expand your mind beyond traditional limits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Dreamstate is where the boundaries between trading, learning, and digital existence dissolve.
                      Experience a new dimension of financial evolution.
                    </p>

                    <div className="mt-6 flex justify-center">
                      <AceKatAvatar context={katContext} onQuoteChange={setKatQuote} size="md" />
                    </div>

                    {katQuote && <div className="mt-4 text-center text-sm text-purple-300 italic">"{katQuote}"</div>}
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-purple-500 text-purple-400 hover:bg-purple-950/30"
                      onClick={handleBeginJourney}
                    >
                      Begin Journey
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2 h-[400px] rounded-xl overflow-hidden border border-blue-500/20"
              >
                <UniverseView className="w-full h-full" />
              </motion.div>
            </div>

            <Tabs defaultValue={activeTab} value={activeTab} className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-5 mb-8 bg-black/40 border border-blue-500/20 backdrop-blur-sm">
                <TabsTrigger value="overview" className="data-[state=active]:bg-blue-900/30">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="meditation" className="data-[state=active]:bg-blue-900/30">
                  Meditation
                </TabsTrigger>
                <TabsTrigger value="trade" className="data-[state=active]:bg-blue-900/30">
                  Trade
                </TabsTrigger>
                <TabsTrigger value="learn" className="data-[state=active]:bg-blue-900/30">
                  Learn
                </TabsTrigger>
                <TabsTrigger value="constellation" className="data-[state=active]:bg-blue-900/30">
                  Constellation
                </TabsTrigger>
              </TabsList>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="overview" className="mt-0">
                  <Card className="bg-black/40 border border-blue-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-400">Dreamstate Overview</CardTitle>
                      <CardDescription>The cosmic consciousness platform</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">
                        Dreamstate is a revolutionary platform that merges financial trading, meditation practices, and
                        cosmic learning into a unified experience. Navigate through different dimensions of
                        consciousness while managing your assets and expanding your knowledge.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                          <h3 className="font-medium text-blue-400 mb-2">Cosmic Trading</h3>
                          <p className="text-sm text-gray-300">
                            Trade assets across dimensions with intuitive visualizations
                          </p>
                        </div>

                        <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                          <h3 className="font-medium text-purple-400 mb-2">Mind Expansion</h3>
                          <p className="text-sm text-gray-300">
                            Guided meditation sessions to enhance trading intuition
                          </p>
                        </div>

                        <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
                          <h3 className="font-medium text-pink-400 mb-2">Cosmic Learning</h3>
                          <p className="text-sm text-gray-300">
                            Expand your knowledge through immersive educational experiences
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="meditation" className="mt-0">
                  <Card className="bg-black/40 border border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-purple-400">Meditation Space</CardTitle>
                      <CardDescription>Calm your mind, enhance your trading</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6">
                        Enter a state of focused awareness with guided meditation sessions designed to enhance your
                        trading intuition and decision-making abilities.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                          <h3 className="font-medium text-purple-400 mb-3">Guided Sessions</h3>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                              Market Intuition (10 min)
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                              Risk Management Focus (15 min)
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                              Cosmic Pattern Recognition (20 min)
                            </li>
                          </ul>
                          <Button
                            variant="outline"
                            className="mt-4 border-purple-500/50 text-purple-400 hover:bg-purple-950/30"
                            onClick={handleBeginSession}
                          >
                            Begin Session
                          </Button>
                        </div>

                        <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                          <h3 className="font-medium text-purple-400 mb-3">Benefits</h3>
                          <p className="text-gray-300 mb-4">
                            Regular meditation has been shown to improve decision-making, reduce trading stress, and
                            enhance pattern recognition abilities.
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>Focus</span>
                            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                            <span>+85%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
                            <span>Intuition</span>
                            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-pink-500 rounded-full" style={{ width: "70%" }}></div>
                            </div>
                            <span>+70%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="trade" className="mt-0">
                  <Card className="bg-black/40 border border-blue-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-400">Cosmic Trading</CardTitle>
                      <CardDescription>Trade across dimensions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6">
                        Experience trading in a new dimension with intuitive visualizations and cosmic patterns that
                        reveal market movements in ways never before possible.
                      </p>

                      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/30 mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium text-blue-400">Cosmic Market View</h3>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 border-blue-500/50 text-blue-400 hover:bg-blue-950/30"
                            >
                              1D
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 border-blue-500/50 text-blue-400 hover:bg-blue-950/30"
                            >
                              1W
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 border-blue-500/50 text-blue-400 hover:bg-blue-950/30"
                            >
                              1M
                            </Button>
                          </div>
                        </div>

                        <div className="h-48 flex items-end space-x-1">
                          {Array.from({ length: 24 }).map((_, i) => {
                            const height = 30 + Math.sin(i * 0.5) * 20 + Math.random() * 30
                            return (
                              <div
                                key={i}
                                className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm w-full"
                                style={{ height: `${height}%` }}
                              ></div>
                            )
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                          <h3 className="font-medium text-blue-400 mb-2">Active Trades</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300">ETH/DREAM</span>
                              <span className="text-green-400">+12.4%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300">BTC/DREAM</span>
                              <span className="text-red-400">-3.2%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300">COSMOS/DREAM</span>
                              <span className="text-green-400">+8.7%</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                          <h3 className="font-medium text-purple-400 mb-2">Cosmic Insights</h3>
                          <p className="text-sm text-gray-300">
                            Market patterns indicate a convergence of cosmic energies around decentralized finance
                            projects. Consider increasing exposure to DeFi assets.
                          </p>
                          <Button
                            variant="outline"
                            className="mt-4 border-purple-500/50 text-purple-400 hover:bg-purple-950/30"
                            onClick={handleBeginTrading}
                          >
                            Begin Trading
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="learn" className="mt-0">
                  <Card className="bg-black/40 border border-pink-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-pink-400">Cosmic Learning</CardTitle>
                      <CardDescription>Expand your knowledge across dimensions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6">
                        Access immersive educational experiences that combine traditional learning with cosmic insights,
                        helping you understand markets on a deeper level.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
                          <div className="aspect-video bg-black/30 rounded mb-3 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-pink-500/80 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                          </div>
                          <h3 className="font-medium text-pink-400 mb-1">Cosmic Market Cycles</h3>
                          <p className="text-xs text-gray-400">23 min • Beginner</p>
                        </div>

                        <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
                          <div className="aspect-video bg-black/30 rounded mb-3 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-pink-500/80 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                          </div>
                          <h3 className="font-medium text-pink-400 mb-1">Dimensional Analysis</h3>
                          <p className="text-xs text-gray-400">45 min • Intermediate</p>
                        </div>

                        <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
                          <div className="aspect-video bg-black/30 rounded mb-3 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-pink-500/80 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                          </div>
                          <h3 className="font-medium text-pink-400 mb-1">Quantum Trading</h3>
                          <p className="text-xs text-gray-400">60 min • Advanced</p>
                        </div>
                      </div>

                      <div className="mt-6 bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-6 rounded-lg border border-pink-500/30">
                        <h3 className="font-medium text-pink-400 mb-3">Learning Path: Cosmic Trader</h3>
                        <div className="relative">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
                            <div
                              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                              style={{ width: "35%" }}
                            ></div>
                          </div>
                          <div className="pt-6 flex justify-between">
                            <div className="text-center">
                              <div className="w-4 h-4 rounded-full bg-pink-500 mx-auto"></div>
                              <p className="text-xs text-gray-400 mt-1">Beginner</p>
                            </div>
                            <div className="text-center">
                              <div className="w-4 h-4 rounded-full bg-pink-900 border border-pink-500 mx-auto"></div>
                              <p className="text-xs text-gray-400 mt-1">Intermediate</p>
                            </div>
                            <div className="text-center">
                              <div className="w-4 h-4 rounded-full bg-pink-900 border border-pink-500 mx-auto"></div>
                              <p className="text-xs text-gray-400 mt-1">Advanced</p>
                            </div>
                            <div className="text-center">
                              <div className="w-4 h-4 rounded-full bg-pink-900 border border-pink-500 mx-auto"></div>
                              <p className="text-xs text-gray-400 mt-1">Master</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mt-4">
                          You've completed 35% of the Cosmic Trader learning path. Continue your journey to unlock
                          advanced trading techniques.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-4 border-pink-500/50 text-pink-400 hover:bg-pink-950/30"
                          onClick={handleContinueLearning}
                        >
                          Continue Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="constellation" className="mt-0">
                  <Card className="bg-black/40 border border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-purple-400">Your XP Constellation</CardTitle>
                      <CardDescription>Your cosmic footprint in the Dreamstate</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6">
                        In Dreamstate, your experience points (XP) form a unique constellation that grows and evolves as
                        you progress. Each star represents achievements, trades, and knowledge gained on your journey.
                      </p>

                      <XPConstellationDemo />

                      <div className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                        <h3 className="font-medium text-purple-400 mb-2">About Your Constellation</h3>
                        <p className="text-sm text-gray-300">
                          Your constellation is unique to you, reflecting your journey through the Dreamstate. As you
                          earn XP through trading, learning, and participating in governance, your constellation grows
                          more complex and brilliant. The distribution of stars reflects your focus areas, with brighter
                          clusters forming around your primary activities.
                        </p>
                        <p className="text-sm text-gray-300 mt-2">
                          Special patterns emerge when you complete achievements or reach significant milestones. These
                          patterns are visible to other travelers in the Dreamstate, serving as a cosmic signature of
                          your accomplishments.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </motion.div>
            </Tabs>
          </>
        )}

        <div className="mt-12">
          <Card className="bg-black/40 border border-blue-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-400">Glow Material Technology</CardTitle>
              <CardDescription>Powering the visual aesthetics of Dreamstate</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                The Dreamstate experience is enhanced by our custom glow shader technology, creating the ethereal visual
                effects that bring the cosmic universe to life.
              </p>

              <GlowDemo className="h-64 w-full bg-black/20 rounded-lg mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-medium text-blue-400 mb-2">Adaptive Glow</h3>
                  <p className="text-sm text-gray-300">
                    Objects in Dreamstate adapt their glow based on your interactions and achievements.
                  </p>
                </div>

                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-medium text-green-400 mb-2">Energy Visualization</h3>
                  <p className="text-sm text-gray-300">
                    Market energy and trading opportunities are visualized through dynamic glow patterns.
                  </p>
                </div>

                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="font-medium text-purple-400 mb-2">Mood Reflection</h3>
                  <p className="text-sm text-gray-300">
                    The ambient glow of your environment subtly shifts to reflect your trading patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

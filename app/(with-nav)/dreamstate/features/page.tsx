"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Starfield } from "@/components/starfield"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import dynamic from "next/dynamic"

// Dynamically import heavy components
const MultiplayerAvatars = dynamic(
  () => import("@/components/dreamstate/multiplayer-avatars").then((mod) => ({ default: mod.MultiplayerAvatars })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  },
)

const MeditationRoom = dynamic(
  () => import("@/components/dreamstate/meditation-room").then((mod) => ({ default: mod.MeditationRoom })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  },
)

const DreamstateModule = dynamic(
  () => import("@/components/dreamstate/dreamstate-module").then((mod) => ({ default: mod.DreamstateModule })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  },
)

export default function DreamstateFeatures() {
  const [activeTab, setActiveTab] = useState("multiplayer")
  const searchParams = useSearchParams()

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["multiplayer", "meditation", "learn"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Starfield starCount={1500} speedFactor={0.03} backgroundColor="rgba(0,0,0,0.95)" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Dreamstate Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the cutting-edge features that make Dreamstate a revolutionary platform for cosmic consciousness.
          </p>
        </div>

        <Tabs defaultValue={activeTab} value={activeTab} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8 bg-black/40 border border-blue-500/20 backdrop-blur-sm">
            <TabsTrigger value="multiplayer" className="data-[state=active]:bg-blue-900/30">
              Multiplayer Avatars
            </TabsTrigger>
            <TabsTrigger value="meditation" className="data-[state=active]:bg-purple-900/30">
              Meditation Room
            </TabsTrigger>
            <TabsTrigger value="learn" className="data-[state=active]:bg-pink-900/30">
              Dreamstate Module
            </TabsTrigger>
          </TabsList>

          <TabsContent value="multiplayer" className="mt-0">
            <Card className="bg-black/40 border border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">Multiplayer Avatars</CardTitle>
                <CardDescription>Experience real-time presence with other cosmic travelers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Dreamstate is a shared universe where you can see and interact with other users in real-time. Each
                  avatar represents a real person navigating the cosmic consciousness alongside you.
                </p>

                <div className="h-[500px] w-full rounded-lg overflow-hidden border border-blue-500/30 bg-black/20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <MultiplayerAvatars />
                  </Suspense>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-medium text-blue-400 mb-2">Real-time Presence</h3>
                    <p className="text-sm text-gray-300">
                      See other users navigating the Dreamstate universe in real-time, creating a truly shared
                      experience.
                    </p>
                  </div>

                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h3 className="font-medium text-purple-400 mb-2">XP Trails</h3>
                    <p className="text-sm text-gray-300">
                      Each avatar leaves a trail of energy that reflects their XP level and recent activities.
                    </p>
                  </div>

                  <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
                    <h3 className="font-medium text-pink-400 mb-2">Cosmic Interactions</h3>
                    <p className="text-sm text-gray-300">
                      Interact with other users through cosmic gestures, energy transfers, and collaborative activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meditation" className="mt-0">
            <Card className="bg-black/40 border border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">Meditation Room</CardTitle>
                <CardDescription>Find inner peace and enhance your trading intuition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  The Meditation Room is a serene space designed to help you calm your mind, focus your thoughts, and
                  enhance your trading intuition through guided meditation sessions.
                </p>

                <div className="h-[500px] w-full rounded-lg overflow-hidden border border-purple-500/30 bg-black/20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <MeditationRoom />
                  </Suspense>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h3 className="font-medium text-purple-400 mb-2">Guided Sessions</h3>
                    <p className="text-sm text-gray-300">
                      Choose from a variety of guided meditation sessions designed specifically for traders and
                      investors.
                    </p>
                  </div>

                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-medium text-blue-400 mb-2">Ambient Soundscapes</h3>
                    <p className="text-sm text-gray-300">
                      Immerse yourself in cosmic soundscapes that help you achieve a state of deep focus and clarity.
                    </p>
                  </div>

                  <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
                    <h3 className="font-medium text-pink-400 mb-2">Passive XP</h3>
                    <p className="text-sm text-gray-300">
                      Earn XP while meditating, rewarding you for taking time to center yourself and improve your focus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learn" className="mt-0">
            <Card className="bg-black/40 border border-pink-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-pink-400">Dreamstate Module</CardTitle>
                <CardDescription>The core technology powering your cosmic journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  The Dreamstate Module is the core technology that powers your journey through the cosmic
                  consciousness. It integrates all aspects of the platform into a seamless, immersive experience.
                </p>

                <div className="h-[500px] w-full rounded-lg overflow-hidden border border-pink-500/30 bg-black/20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <DreamstateModule />
                  </Suspense>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
                    <h3 className="font-medium text-pink-400 mb-2">Unified Experience</h3>
                    <p className="text-sm text-gray-300">
                      Seamlessly integrates trading, learning, meditation, and social features into a cohesive
                      experience.
                    </p>
                  </div>

                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h3 className="font-medium text-purple-400 mb-2">Adaptive Interface</h3>
                    <p className="text-sm text-gray-300">
                      The interface adapts to your preferences, learning style, and trading patterns for a personalized
                      experience.
                    </p>
                  </div>

                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-medium text-blue-400 mb-2">Cosmic Data Visualization</h3>
                    <p className="text-sm text-gray-300">
                      Transforms complex market data into intuitive, cosmic visualizations that reveal hidden patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

"use client"

import { Starfield } from "@/components/starfield"

export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Starfield starCount={1500} speedFactor={0.03} backgroundColor="rgba(0,0,0,0.95)" />

      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-8"></div>
          <h2 className="text-2xl font-bold text-white mb-4">Entering the Dreamstate</h2>
          <p className="text-gray-300">Initializing cosmic consciousness...</p>
        </div>
      </div>
    </div>
  )
}

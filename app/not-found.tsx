"use client"

import Link from "next/link"
import { Starfield } from "@/components/starfield"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Starfield starCount={1500} speedFactor={0.03} backgroundColor="rgba(0,0,0,0.95)" />

      <div className="text-center z-10 px-4">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Cosmic Void Encountered.</h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          The star system you're looking for seems to have drifted into uncharted space. Let's navigate back to known
          coordinates.
        </p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Return to Home Base
          </Button>
        </Link>
      </div>
    </div>
  )
}

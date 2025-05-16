"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Starfield } from "@/components/starfield"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Starfield starCount={1500} speedFactor={0.03} backgroundColor="rgba(0,0,0,0.95)" />

      <div className="text-center z-10 px-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 via-pink-500 to-purple-400 text-transparent bg-clip-text mb-4">
          Cosmic Anomaly
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Something unexpected happened.</h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          Our systems encountered a gravitational anomaly. You can try again or return to a safe coordinate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
              Return to Home Base
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

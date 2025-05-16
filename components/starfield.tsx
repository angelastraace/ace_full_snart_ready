"use client"

import { useEffect, useRef } from "react"

interface StarfieldProps {
  starCount?: number
  starColor?: string
  speedFactor?: number
  backgroundColor?: string
}

export function Starfield({
  starCount = 1000,
  starColor = "#ffffff",
  speedFactor = 0.05,
  backgroundColor = "transparent",
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    interface Star {
      x: number
      y: number
      z: number
      prevZ?: number
    }

    const stars: Star[] = []
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 1000,
      })
    }

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      stars.forEach((star) => {
        star.prevZ = star.z
        star.z -= speedFactor

        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - centerX
          star.y = Math.random() * canvas.height - centerY
          star.z = 1000
          star.prevZ = star.z
        }

        const x = (star.x / star.z) * 500 + centerX
        const y = (star.y / star.z) * 500 + centerY

        // Calculate size based on z position
        const size = Math.max(0.5, ((1000 - star.z) / 1000) * 2)

        // Calculate opacity based on z position
        const opacity = Math.min(1, (1000 - star.z) / 1000)

        // Draw star
        ctx.beginPath()
        ctx.fillStyle = `rgba(${
          starColor
            .slice(1)
            .match(/.{2}/g)
            ?.map((hex) => Number.parseInt(hex, 16))
            .join(", ") || "255, 255, 255"
        }, ${opacity})`
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [starCount, starColor, speedFactor, backgroundColor])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

// Also export as default for backward compatibility
export default Starfield

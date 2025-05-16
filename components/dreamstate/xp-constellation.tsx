"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import type { UserXPData } from "@/services/user-data"

interface XPConstellationProps {
  userData: UserXPData | null
  interactive?: boolean
  scale?: number
}

export function XPConstellation({ userData, interactive = true, scale = 1 }: XPConstellationProps) {
  const groupRef = useRef<THREE.Group>(null)
  const starsRef = useRef<THREE.Mesh[]>([])
  const linesRef = useRef<THREE.Line[]>([])
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)

  // Generate constellation patterns based on user XP distribution
  useEffect(() => {
    if (!userData || !groupRef.current) return

    // Clear previous stars and lines
    starsRef.current.forEach((star) => {
      if (star.geometry) star.geometry.dispose()
      if (star.material) {
        if (Array.isArray(star.material)) {
          star.material.forEach((m) => m.dispose())
        } else {
          star.material.dispose()
        }
      }
      star.removeFromParent()
    })

    linesRef.current.forEach((line) => {
      if (line.geometry) line.geometry.dispose()
      if (line.material) {
        if (Array.isArray(line.material)) {
          line.material.forEach((m) => m.dispose())
        } else {
          line.material.dispose()
        }
      }
      line.removeFromParent()
    })

    starsRef.current = []
    linesRef.current = []

    try {
      const group = groupRef.current
      const totalXP = userData.totalXP
      const level = userData.level
      const distribution = userData.distribution

      // Calculate star count based on XP and level
      const baseStarCount = 20
      const xpStarBonus = Math.floor(totalXP / 100)
      const levelStarBonus = level * 3
      const starCount = Math.min(baseStarCount + xpStarBonus + levelStarBonus, 150)

      // Calculate constellation radius based on level
      const baseRadius = 30
      const radiusBonus = level * 2
      const radius = (baseRadius + radiusBonus) * scale

      // Create stars
      const starPositions: THREE.Vector3[] = []
      const categoryColors: Record<string, THREE.Color> = {
        trading: new THREE.Color(0x3498db), // Blue
        learning: new THREE.Color(0x2ecc71), // Green
        social: new THREE.Color(0xe74c3c), // Red
        quests: new THREE.Color(0xf39c12), // Orange
        governance: new THREE.Color(0x9b59b6), // Purple
      }

      // Create category clusters
      Object.entries(distribution).forEach(([category, percentage], categoryIndex) => {
        const categoryStarCount = Math.floor(starCount * (percentage / 100))
        const color = categoryColors[category] || new THREE.Color(0xffffff)

        // Create a cluster of stars for this category
        for (let i = 0; i < categoryStarCount; i++) {
          // Create star geometry with size based on importance
          const importance = Math.random()
          const size = (0.15 + importance * 0.3) * scale
          const geometry = new THREE.SphereGeometry(size, 8, 8)

          // Create star material with color based on category
          const material = new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0.7 + importance * 0.3,
          })

          const star = new THREE.Mesh(geometry, material)

          // Position star in a cluster pattern
          const clusterRadius = radius * 0.6
          const clusterCenterPhi = (categoryIndex / Object.keys(distribution).length) * Math.PI * 2
          const clusterCenterTheta = Math.PI / 2

          // Calculate cluster center
          const clusterCenter = new THREE.Vector3().setFromSphericalCoords(
            clusterRadius,
            clusterCenterTheta,
            clusterCenterPhi,
          )

          // Add random offset from cluster center
          const offset = new THREE.Vector3(
            (Math.random() - 0.5) * radius * 0.4,
            (Math.random() - 0.5) * radius * 0.4,
            (Math.random() - 0.5) * radius * 0.4,
          )

          star.position.copy(clusterCenter).add(offset)
          starPositions.push(star.position.clone())

          // Add metadata to star
          star.userData = {
            category,
            importance,
            xpValue: Math.floor(importance * 100) + 10,
            name: `${category.charAt(0).toUpperCase() + category.slice(1)} Star ${i + 1}`,
            description: `A ${category} star worth ${Math.floor(importance * 100) + 10} XP`,
          }

          group.add(star)
          starsRef.current.push(star)
        }
      })

      // Add some random stars outside of clusters
      const randomStarCount = Math.floor(starCount * 0.2)
      for (let i = 0; i < randomStarCount; i++) {
        const size = (0.1 + Math.random() * 0.15) * scale
        const geometry = new THREE.SphereGeometry(size, 8, 8)
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0xffffff),
          transparent: true,
          opacity: 0.5 + Math.random() * 0.3,
        })

        const star = new THREE.Mesh(geometry, material)

        // Random position on sphere
        const phi = Math.random() * Math.PI * 2
        const theta = Math.acos(2 * Math.random() - 1)
        star.position.setFromSphericalCoords(radius + (Math.random() - 0.5) * 20, theta, phi)

        starPositions.push(star.position.clone())

        // Add metadata
        star.userData = {
          category: "random",
          importance: Math.random() * 0.5,
          xpValue: Math.floor(Math.random() * 20) + 5,
          name: `Star ${starsRef.current.length + 1}`,
          description: `A mysterious star worth ${Math.floor(Math.random() * 20) + 5} XP`,
        }

        group.add(star)
        starsRef.current.push(star)
      }

      // Create constellation lines between nearby stars
      const maxDistance = radius * 0.3
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x8888ff,
        transparent: true,
        opacity: 0.3,
      })

      // Connect stars that are close to each other
      for (let i = 0; i < starPositions.length; i++) {
        const pos1 = starPositions[i]

        // Find closest stars
        const connections: number[] = []
        for (let j = 0; j < starPositions.length; j++) {
          if (i === j) continue

          const pos2 = starPositions[j]
          const distance = pos1.distanceTo(pos2)

          if (distance < maxDistance) {
            connections.push(j)
          }
        }

        // Limit connections per star
        const maxConnections = 2 + Math.floor(Math.random() * 2)
        connections.sort((a, b) => {
          const distA = pos1.distanceTo(starPositions[a])
          const distB = pos1.distanceTo(starPositions[b])
          return distA - distB
        })

        // Create lines for closest connections
        for (let k = 0; k < Math.min(connections.length, maxConnections); k++) {
          const j = connections[k]

          // Avoid duplicate lines
          if (i < j) {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([pos1, starPositions[j]])

            const line = new THREE.Line(lineGeometry, lineMaterial)
            group.add(line)
            linesRef.current.push(line)
          }
        }
      }
    } catch (error) {
      console.error("Error creating constellation:", error)
    }

    // Cleanup function
    return () => {
      starsRef.current.forEach((star) => {
        if (star.geometry) star.geometry.dispose()
        if (star.material) {
          if (Array.isArray(star.material)) {
            star.material.forEach((m) => m.dispose())
          } else {
            star.material.dispose()
          }
        }
      })

      linesRef.current.forEach((line) => {
        if (line.geometry) line.geometry.dispose()
        if (line.material) {
          if (Array.isArray(line.material)) {
            line.material.forEach((m) => m.dispose())
          } else {
            line.material.dispose()
          }
        }
      })
    }
  }, [userData, scale])

  // Animation loop
  useFrame((state, delta) => {
    if (!groupRef.current) return

    try {
      // Slowly rotate the entire constellation
      groupRef.current.rotation.y += delta * 0.05

      // Animate stars
      starsRef.current.forEach((star, index) => {
        if (!star || !star.userData) return

        // Pulse effect
        const pulseSpeed = 0.5 + star.userData.importance * 0.5
        const pulseAmount = 0.1 + star.userData.importance * 0.2
        const pulse = Math.sin(state.clock.elapsedTime * pulseSpeed + index) * pulseAmount + 1

        star.scale.setScalar(pulse)

        // Highlight hovered star
        if (hoveredStar === index && star.material) {
          if (!Array.isArray(star.material)) {
            star.material.opacity = 0.9
            star.material.color.setRGB(1, 1, 1)
          }
        } else {
          // Reset to original color and opacity
          if (!Array.isArray(star.material) && star.userData.category) {
            const categoryColors: Record<string, THREE.Color> = {
              trading: new THREE.Color(0x3498db),
              learning: new THREE.Color(0x2ecc71),
              social: new THREE.Color(0xe74c3c),
              quests: new THREE.Color(0xf39c12),
              governance: new THREE.Color(0x9b59b6),
            }

            const originalColor =
              star.userData.category !== "random"
                ? categoryColors[star.userData.category] || new THREE.Color(0xffffff)
                : new THREE.Color(0xffffff)

            star.material.color.copy(originalColor)
            star.material.opacity = 0.7 + star.userData.importance * 0.3
          }
        }
      })

      // Animate constellation lines
      linesRef.current.forEach((line, index) => {
        if (!line.material || Array.isArray(line.material)) return

        const material = line.material as THREE.LineBasicMaterial
        const pulseSpeed = 0.2
        const pulseAmount = 0.2
        const pulse = Math.sin(state.clock.elapsedTime * pulseSpeed + index) * pulseAmount + 0.3

        material.opacity = pulse
      })
    } catch (error) {
      console.error("Error in animation loop:", error)
    }
  })

  // Handle interaction
  const handlePointerOver = (event: THREE.Event) => {
    if (!interactive) return

    const index = starsRef.current.findIndex((star) => star.uuid === event.object.uuid)
    if (index !== -1) {
      setHoveredStar(index)
      document.body.style.cursor = "pointer"
    }
  }

  const handlePointerOut = () => {
    if (!interactive) return

    setHoveredStar(null)
    document.body.style.cursor = "auto"
  }

  const handleClick = (event: THREE.Event) => {
    if (!interactive) return

    const index = starsRef.current.findIndex((star) => star.uuid === event.object.uuid)
    if (index !== -1) {
      const star = starsRef.current[index]
      console.log("Star clicked:", star.userData)
      // Here you could trigger an event, show details, etc.
    }
  }

  return (
    <group ref={groupRef} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick}>
      {/* The stars and lines are created in the useEffect */}
    </group>
  )
}

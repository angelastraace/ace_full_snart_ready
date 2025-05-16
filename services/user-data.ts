// Types for user XP data
export interface UserXPData {
  totalXP: number
  level: number
  distribution: Record<string, number> // Category -> percentage
  achievements: string[]
}

// Mock user data for development
export const mockUserData: UserXPData = {
  totalXP: 2750,
  level: 12,
  distribution: {
    trading: 40,
    learning: 25,
    social: 15,
    quests: 15,
    governance: 5,
  },
  achievements: ["First Trade", "Knowledge Seeker", "Social Butterfly", "Quest Master", "Governance Participant"],
}

// Function to fetch user XP data
export async function fetchUserXPData(userId?: string): Promise<UserXPData> {
  // In a real app, this would fetch from an API
  // For now, return mock data with a simulated delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserData)
    }, 500)
  })
}

// Function to calculate level from XP
export function calculateLevel(xp: number): number {
  // Simple level calculation: each level requires 10% more XP than the previous
  // Level 1: 100 XP
  // Level 2: 210 XP
  // Level 3: 331 XP
  // etc.

  let level = 0
  let xpRequired = 0
  let totalXpRequired = 0

  while (totalXpRequired <= xp) {
    level++
    xpRequired = level === 1 ? 100 : Math.floor(xpRequired * 1.1)
    totalXpRequired += xpRequired
  }

  return Math.max(1, level - 1)
}

// Function to calculate progress to next level
export function calculateLevelProgress(xp: number): number {
  const currentLevel = calculateLevel(xp)
  const nextLevel = currentLevel + 1

  // Calculate XP required for current and next level
  let xpForCurrentLevel = 0
  let xpForNextLevel = 0
  let totalXp = 0

  for (let i = 1; i <= nextLevel; i++) {
    const levelXp = i === 1 ? 100 : Math.floor(xpForNextLevel * 1.1)

    if (i === currentLevel) {
      xpForCurrentLevel = totalXp
    }

    xpForNextLevel = levelXp
    totalXp += levelXp
  }

  // Calculate progress percentage
  const xpInCurrentLevel = xp - xpForCurrentLevel
  const xpRequiredForNextLevel = xpForNextLevel

  return Math.min(100, Math.floor((xpInCurrentLevel / xpRequiredForNextLevel) * 100))
}

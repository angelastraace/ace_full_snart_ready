"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, ChevronRight, CheckCircle, Circle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AIWizard() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Welcome to ACE Exchange",
      description: "Let's get you set up with a personalized experience",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Welcome to ACE Exchange! I'm your AI Wizard, and I'll guide you through setting up your account and
            preferences to create a personalized experience tailored to your needs.
          </p>
          <p className="text-gray-300">This wizard will help you with:</p>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>Setting up your profile</li>
            <li>Configuring your trading preferences</li>
            <li>Understanding the platform's key features</li>
            <li>Customizing your dashboard</li>
            <li>Setting up security features</li>
          </ul>
          <p className="text-gray-300">Ready to begin your cosmic journey? Click "Next" to start the setup process.</p>
        </div>
      ),
    },
    {
      title: "Trading Experience",
      description: "Tell us about your trading background",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Understanding your trading experience helps us customize the platform to your skill level.
          </p>

          <div className="space-y-3">
            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Beginner - New to crypto trading</span>
                <Circle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Intermediate - Some trading experience</span>
                <Circle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Advanced - Experienced trader</span>
                <CheckCircle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Professional - Trading is my profession</span>
                <Circle className="h-5 w-5 text-amber-500" />
              </div>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Investment Goals",
      description: "What are you looking to achieve?",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Select your primary investment goals to help us recommend the right features and assets for you.
          </p>

          <div className="space-y-3">
            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Long-term growth</span>
                <CheckCircle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Regular income through staking/yield</span>
                <CheckCircle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Active trading for short-term gains</span>
                <Circle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Learning about crypto and blockchain</span>
                <Circle className="h-5 w-5 text-amber-500" />
              </div>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Dashboard Customization",
      description: "Set up your ideal dashboard",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">Select the widgets you'd like to see on your dashboard for quick access.</p>

          <div className="space-y-3">
            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Market Overview</span>
                <CheckCircle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Portfolio Performance</span>
                <CheckCircle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Trading View Charts</span>
                <CheckCircle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>News Feed</span>
                <Circle className="h-5 w-5 text-amber-500" />
              </div>
            </button>

            <button className="w-full rounded-md bg-amber-900/20 p-3 text-left text-gray-300 transition-colors hover:bg-amber-900/30">
              <div className="flex items-center justify-between">
                <span>Quick Trade Panel</span>
                <CheckCircle className="h-5 w-5 text-amber-500" />
              </div>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "All Set!",
      description: "Your personalized experience is ready",
      content: (
        <div className="space-y-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-900/20">
            <Lightbulb className="h-10 w-10 text-amber-500" />
          </div>

          <h3 className="text-xl font-medium text-white">Your ACE Exchange experience is ready!</h3>

          <p className="text-gray-300">
            Based on your preferences, we've customized your dashboard and experience. You're all set to start your
            cosmic journey in the world of crypto!
          </p>

          <div className="rounded-md bg-amber-900/20 p-4">
            <h4 className="mb-2 font-medium text-amber-400">Recommended Next Steps:</h4>
            <ul className="list-inside list-disc space-y-1 text-left text-gray-300">
              <li>Complete your profile to unlock additional features</li>
              <li>Set up two-factor authentication for enhanced security</li>
              <li>Explore the ACE Learn section for educational content</li>
              <li>Connect with the community in the ACE Forum</li>
            </ul>
          </div>

          <Button className="bg-amber-600 text-black hover:bg-amber-500">Go to Dashboard</Button>
        </div>
      ),
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-amber-900/20 p-2">
            <Lightbulb className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <CardTitle className="text-xl text-white">{steps[currentStep].title}</CardTitle>
            <CardDescription className="text-gray-400">{steps[currentStep].description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-xs text-gray-500">
            <span>Start</span>
            <span>Complete</span>
          </div>
          <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2 bg-gray-800" />
          <div className="mt-2 text-right text-xs text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {steps[currentStep].content}

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Back
          </Button>

          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="bg-amber-600 text-black hover:bg-amber-500"
          >
            Next <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

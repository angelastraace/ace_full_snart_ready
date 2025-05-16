import { Suspense } from "react"
import { CreatorProfile } from "@/components/creator/creator-profile"
import { ContentList } from "@/components/creator/content-list"
import { AnalyticsDashboard } from "@/components/creator/analytics-dashboard"
import { CommunityEngagement } from "@/components/creator/community-engagement"
import { SettingsPanel } from "@/components/creator/settings-panel"

export default function CreatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading profile...</div>}>
        <CreatorProfile />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<div>Loading content...</div>}>
          <ContentList />
        </Suspense>

        <Suspense fallback={<div>Loading analytics...</div>}>
          <AnalyticsDashboard />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading community engagement...</div>}>
        <CommunityEngagement />
      </Suspense>

      <Suspense fallback={<div>Loading settings...</div>}>
        <SettingsPanel />
      </Suspense>
    </div>
  )
}

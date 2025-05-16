import { Skeleton } from "@/components/ui/skeleton"

export default function CreatorLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile skeleton */}
      <div className="w-full h-[300px] rounded-lg bg-black/30 backdrop-blur-md border border-purple-500/20 mb-6">
        <div className="h-40 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="px-6 -mt-12">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="mt-4 space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full max-w-md" />
            <Skeleton className="h-4 w-full max-w-sm" />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <Skeleton className="h-20 w-full rounded-lg" />
            <Skeleton className="h-20 w-full rounded-lg" />
            <Skeleton className="h-20 w-full rounded-lg" />
            <Skeleton className="h-20 w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content and Analytics skeletons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full rounded-lg bg-black/30 backdrop-blur-md border border-purple-500/20 p-6">
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="space-y-4">
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>
        </div>

        <div className="w-full rounded-lg bg-black/30 backdrop-blur-md border border-purple-500/20 p-6">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-[300px] w-full rounded-lg mb-4" />
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Community Engagement skeleton */}
      <div className="w-full rounded-lg bg-black/30 backdrop-blur-md border border-purple-500/20 p-6 mt-6">
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="space-y-4">
          <Skeleton className="h-20 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>
      </div>

      {/* Settings skeleton */}
      <div className="w-full rounded-lg bg-black/30 backdrop-blur-md border border-purple-500/20 p-6 mt-6">
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
          <Skeleton className="h-24 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}

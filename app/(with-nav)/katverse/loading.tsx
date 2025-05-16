import { Loader2 } from "lucide-react"

export default function KatVerseLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-teal-500" />
        <p className="mt-4 text-white">Entering the KatVerse...</p>
      </div>
    </div>
  )
}

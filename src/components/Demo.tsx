import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function Demo() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Watch AI Cameraman
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">in Action</span>
        </h2>

        <div className="relative mt-12">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative w-full h-full bg-black flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="AI Cameraman Demo"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white group-hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-8 h-8 mr-3" />
                  Play Demo
                </Button>
              </div>

              {/* Video overlay UI elements */}
              <div className="absolute top-4 left-4 bg-red-500 w-3 h-3 rounded-full animate-pulse" />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                AI Tracking: ON
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                Water Polo - Game Analysis
              </div>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Smart panning and cropping during a water polo transition — fully automated.
          </p>
        </div>
      </div>
    </section>
  )
}

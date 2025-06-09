"use client"

import { Button } from "@/components/ui/button"
import { Play, Sparkles, Github } from "lucide-react"

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-16 sm:pt-0 sm:pb-0">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-left space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Powered by Gemini 2.5 & OpenCV</span>
            </div> */}

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                AI-Powered Video Cropping
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                That Follows the Action
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl">
              AI Cameraman uses Gemini 2.5 and OpenCV to intelligently reframe your sports footage—real-time, smooth,
              and efficient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

            <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/koji0701/cameraman-ai-agent/tree/dev" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Use the CLI or Desktop GUI (beta)
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={() => {
                  document.getElementById('demo')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>


            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Works for Free</div>
                <div className="text-sm text-gray-400">Gemini Free Tier</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Dynamic</div>
                <div className="text-sm text-gray-400">Camera Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">AI-Powered</div>
                <div className="text-sm text-gray-400">Scene Analysis</div>
              </div>
            </div>
          </div>

          {/* Right mockup */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-white/10">
              <div className="aspect-[4/3] bg-black rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-4 border-2 border-blue-400/50 rounded-lg animate-pulse" />
                <div className="absolute top-4 left-4 bg-red-500 w-3 h-3 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 text-xs text-white/60">AI Tracking Active</div>
                <img
                  src="/gui1.png"
                  alt="AI Cameraman Interface"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Floating tags */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Up to 70% Smaller Files
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Smooth Camera Pans
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

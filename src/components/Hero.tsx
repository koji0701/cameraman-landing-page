"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Download, Play, Sparkles } from "lucide-react"

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Powered by Gemini 2.5 & OpenCV</span>
            </div>

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
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for macOS / Windows
              </Button>

              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-black/90 border-white/20">
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Play className="w-16 h-16 mx-auto text-white/60" />
                      <p className="text-white/80">Demo video would be embedded here</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-sm text-gray-400">Smaller Files</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Real-time</div>
                <div className="text-sm text-gray-400">Processing</div>
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
              <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-4 border-2 border-blue-400/50 rounded-lg animate-pulse" />
                <div className="absolute top-4 left-4 bg-red-500 w-3 h-3 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 text-xs text-white/60">AI Tracking Active</div>
                <img
                  src="/placeholder.svg?height=300&width=500"
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

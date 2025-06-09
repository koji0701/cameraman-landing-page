import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, Target, BarChart3, HardDrive, Monitor } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Scene Understanding",
    description: "Gemini 2.5 Pro identifies the most important players and action areas",
  },
  {
    icon: Zap,
    title: "Real-time OpenCV Processing",
    description: "Lightning-fast computer vision processing for smooth real-time analysis",
  },
  {
    icon: Target,
    title: "Dynamic, Smooth Cropping",
    description: "Intelligent cropping that follows the action with natural camera movements",
  },
  {
    icon: BarChart3,
    title: "Smart Kalman + Spline Interpolation",
    description: "Advanced algorithms ensure smooth transitions and professional results",
  },
  {
    icon: HardDrive,
    title: "Up to 70% Smaller File Sizes",
    description: "Efficient compression without quality loss for easy sharing and storage",
  },
  {
    icon: Monitor,
    title: "Intuitive Desktop App",
    description: "Beautiful, easy-to-use interface designed for creators and professionals",
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built for high-performance
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              sports footage
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every feature designed to deliver professional-quality results with minimal effort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

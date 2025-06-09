import { Card, CardContent } from "@/components/ui/card"
import { Upload, Brain, Download } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload your footage",
    description: "Simply drag and drop your sports video files into the app",
  },
  {
    icon: Brain,
    title: "AI analyzes and crops intelligently",
    description: "Our AI identifies key moments and applies smooth, professional cropping",
  },
  {
    icon: Download,
    title: "Export a smooth, ready-to-share video",
    description: "Get your perfectly cropped video in minutes, ready for any platform",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Three simple steps to transform your footage</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-400 mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

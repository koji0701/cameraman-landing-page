import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to automate
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              your video edits?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Install AI Cameraman and experience smart, effortless cropping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
              disabled
            >
              <Download className="w-5 h-5 mr-2" />
              Coming Soon - macOS / Windows
            </Button>

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
          </div>
        </div>
      </div>
    </section>
  )
}

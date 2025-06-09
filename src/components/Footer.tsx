import { Github, Mail, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-white">AI Cameraman</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              Contact
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Shield className="w-5 h-5" />
              Privacy
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; 2024 AI Cameraman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

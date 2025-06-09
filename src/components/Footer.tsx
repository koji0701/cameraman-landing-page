import { Github, Mail, Shield } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold text-white">AI Cameraman</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://github.com/koji0701" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="kojirwong@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              Contact
            </a>

          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; 2025 Koji Wong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

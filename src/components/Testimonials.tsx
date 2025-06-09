import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "This saved me hours of manual editing for our training sessions. The AI tracking is incredibly accurate.",
    author: "Sarah Chen",
    role: "Water Polo Coach",
    avatar: "SC",
  },
  {
    quote: "Finally, a tool that understands sports footage. The automated cropping follows the action perfectly.",
    author: "Mike Rodriguez",
    role: "Sports Video Editor",
    avatar: "MR",
  },
  {
    quote:
      "Game-changer for our team analysis. We can now focus on strategy instead of spending time on video editing.",
    author: "Emma Thompson",
    role: "Basketball Analyst",
    avatar: "ET",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what coaches and editors are saying about AI Cameraman
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500">
                    <AvatarFallback className="text-white font-semibold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

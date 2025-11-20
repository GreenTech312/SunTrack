import Link from "next/link"
import { Sun, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b" style={{ backgroundColor: "rgba(26,67,10)" }}>
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Sun className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">SunTrack</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="font-medium text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="font-medium text-white hover:text-yellow-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/dashboard"
              className="font-medium text-white hover:text-yellow-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              About
        
            </Link>
          </nav>
          <Button asChild className="hover:bg-yellow-400 hover:text-black bg-white text-black">
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "rgba(26,67,10)" }}>
              About SunTrack
            </h1>
            <p className="text-lg text-gray-600">
              We're on a mission to revolutionize solar energy with intelligent tracking technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="suntrack.png"
                alt="SunTrack Team"
                className="object-cover w-full h-full"
              />
            </div>

            {/* NEW IMPROVED OUR STORY DESIGN */}
            <div className="space-y-6 bg-white/70 backdrop-blur p-8 rounded-2xl shadow-xl border border-green-900/10">
              <h2
                className="text-4xl font-extrabold tracking-tight"
                style={{ color: "rgba(26,67,10)" }}
              >
                Our Story
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
               SunTrack is the flagship project of Solaria, a team of five passionate innovators who founded the company in 2025. Our team combines expertise in renewable energy and AI to enhance solar panel efficiency through advanced tracking systems.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
              Our proprietary AI algorithms analyze sun trajectory, weather patterns, and environmental conditions to optimize solar panel positioning in real-time, increasing energy production by up to 25% compared to fixed solar panels.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
               As Solaria, we're committed to accelerating the world's transition to sustainable energy through SunTrack, making solar power more efficient and accessible for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "rgba(26,67,10)" }}>
              Our Mission & Values
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Sustainability First</h3>
                <p className="text-gray-600">
                  We believe in creating technology that helps preserve our planet for future generations. Every decision we make considers environmental impact.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Innovation Through Intelligence</h3>
                <p className="text-gray-600">
                  We leverage artificial intelligence to solve complex energy optimization problems, constantly pushing the boundaries of what's possible.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Accessibility</h3>
                <p className="text-gray-600">
                  We're committed to making advanced solar technology accessible to homes and businesses of all sizes, helping more people transition to renewable energy.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Transparency</h3>
                <p className="text-gray-600">
                  We believe in being open about our technology, performance metrics, and environmental impact. Our dashboard provides real-time insights into system performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "rgba(26,67,10)" }}>
              Contact Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5" style={{ color: "rgba(26,67,10)" }} />
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "rgba(26,67,10)" }}>Address</h3>
                    <p className="text-gray-600">
                     Baku, Azerbaijan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5" style={{ color: "rgba(26,67,10)" }} />
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "rgba(26,67,10)" }}>Email</h3>
                    <p className="text-gray-600">
                       suntrackbiz@gmail.com 
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5" style={{ color: "rgba(26,67,10)" }} />
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "rgba(26,67,10)" }}>Phone</h3>
                    <p className="text-gray-600">
                      +994507772425
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "rgba(26,67,10)" }}>
                  Send us a message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-800/30 focus:border-green-900 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-800/30 focus:border-green-900 transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-800/30 focus:border-green-900 transition"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    style={{ backgroundColor: "rgba(26,67,10)", color: "white" }}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-8" style={{ backgroundColor: "rgba(26,67,10)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span className="font-bold text-white">SunTrack</span>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-sm text-white hover:text-yellow-400 transition-colors">
                How It Works
              </Link>
              <Link href="/dashboard" className="text-sm text-white hover:text-yellow-400 transition-colors">
                Dashboard
              </Link>
              <Link href="/about" className="text-sm text-white hover:text-yellow-400 transition-colors">
                About
              </Link>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-white">© 2025 SunTrack. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
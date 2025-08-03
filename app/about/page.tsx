import Link from "next/link"
import { Sun, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">SunTrack</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/how-it-works" className="font-medium">
              How It Works
            </Link>
            <Link href="/dashboard" className="font-medium">
              Dashboard
            </Link>
            <Link href="/about" className="font-medium text-yellow-600">
              About
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About SunTrack</h1>
            <p className="text-lg text-gray-600">
              We're on a mission to revolutionize solar energy with intelligent tracking technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="SunTrack Team"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                SunTrack was founded in 2023 by a team of renewable energy engineers and AI specialists who saw an
                opportunity to significantly improve solar panel efficiency through intelligent tracking systems.
              </p>
              <p className="text-gray-600">
                Our proprietary AI algorithms analyze sun trajectory, weather patterns, and environmental conditions to
                optimize solar panel positioning in real-time, increasing energy production by up to 25% compared to
                fixed solar panels.
              </p>
              <p className="text-gray-600">
                We're committed to accelerating the world's transition to sustainable energy through innovative
                technology that makes solar power more efficient and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Sustainability First</h3>
                <p className="text-gray-600">
                  We believe in creating technology that helps preserve our planet for future generations. Every
                  decision we make considers environmental impact.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Innovation Through Intelligence</h3>
                <p className="text-gray-600">
                  We leverage artificial intelligence to solve complex energy optimization problems, constantly pushing
                  the boundaries of what's possible.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  We're committed to making advanced solar technology accessible to homes and businesses of all sizes,
                  helping more people transition to renewable energy.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in being open about our technology, performance metrics, and environmental impact. Our
                  dashboard provides real-time insights into system performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Solar Way
                      <br />
                      Sunnyvale, CA 94086
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@suntrack.example
                      <br />
                      support@suntrack.example
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri, 9am-5pm PT
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded-md"
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
                      className="w-full p-2 border rounded-md"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span className="font-bold">SunTrack</span>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                About
              </Link>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">© 2025 SunTrack. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

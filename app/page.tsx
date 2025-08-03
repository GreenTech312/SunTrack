import Link from "next/link"
import { ArrowRight, Sun, BarChart3, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">SunTrack</span>
          </div>
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
            <Link href="/about" className="font-medium">
              About
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">AI-Powered Solar Tracking System</h1>
            <p className="text-lg text-gray-600">
              Maximize your solar energy production with our intelligent tracking system that follows the sun's
              trajectory for optimal energy capture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/how-it-works">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">View Demo Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="SunTrack Solar Panel System"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                <Sun className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sun Trajectory Tracking</h3>
              <p className="text-gray-600">
                Our system tracks the sun's changing position throughout the day to maximize energy capture.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Cloud className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Weather Prediction</h3>
              <p className="text-gray-600">
                AI-powered weather prediction adjusts panel positioning based on forecasted conditions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">Monitor your system's performance with detailed analytics and insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Solar Efficiency?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            SunTrack's AI-powered system can increase energy production by up to 25% compared to fixed solar panels.
          </p>
          <Button size="lg" asChild>
            <Link href="/dashboard">Explore the Dashboard Demo</Link>
          </Button>
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

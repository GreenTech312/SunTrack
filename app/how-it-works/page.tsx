import Link from "next/link"
import { Sun, ArrowRight, BarChart3, Cloud, Zap, Thermometer, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
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
            <Link href="/how-it-works" className="font-medium text-yellow-600">
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
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">How SunTrack Works</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our AI-powered system optimizes solar energy production through intelligent tracking and predictive
            adjustments.
          </p>

          <div className="relative h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden max-w-4xl mx-auto">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="SunTrack System Diagram"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* System Workflow */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">System Workflow</h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-yellow-100 p-4 rounded-full">
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Sun Trajectory Tracking</h3>
                <p className="text-gray-600">
                  The system increases energy efficiency by tracking the changing trajectory of the sun throughout the
                  day. Our advanced algorithms calculate the sun's position based on time, date, and geographical
                  location.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Weather Prediction Integration</h3>
                <p className="text-gray-600">
                  Based on weather predictions, the system adjusts the angle and orientation of the solar panel. This
                  ensures optimal energy capture even during changing weather conditions.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-green-100 p-4 rounded-full">
                <RotateCw className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Dual-Axis Movement</h3>
                <p className="text-gray-600">
                  The solar panel can move both vertically and horizontally using AI-based motor control. This dual-axis
                  movement ensures the panel is always at the optimal angle to the sun.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-purple-100 p-4 rounded-full">
                <Thermometer className="h-8 w-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Environmental Sensing</h3>
                <p className="text-gray-600">
                  A sun-tracking sensor gathers real-time environmental data (e.g., temperature, UV). This data helps
                  the system make micro-adjustments for optimal performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-red-100 p-4 rounded-full">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">AI Processing</h3>
                <p className="text-gray-600">
                  The data is processed by an AI module (TensorFlow) to calculate the sun's optimal angle. The AI
                  continuously learns and improves its predictions based on historical performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-teal-100 p-4 rounded-full">
                <BarChart3 className="h-8 w-8 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Data Dashboard</h3>
                <p className="text-gray-600">
                  All data is stored and presented in a simple dashboard. Users can monitor performance, energy
                  production, and system health in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">See the System in Action</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our interactive dashboard to see how SunTrack optimizes solar energy production in real-time.
          </p>
          <Button size="lg" asChild>
            <Link href="/dashboard">
              View Dashboard Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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

import Link from "next/link"
import { Sun, ArrowRight, BarChart3, Cloud, Zap, Thermometer, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b" style={{ backgroundColor: "rgba(26, 67, 10)" }}>
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
              className="font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
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
              className="font-medium text-white hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">How SunTrack Works</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
           Comprehensive solar energy monitoring and management solution with real-time data tracking, performance analytics, and multi-site management.
          </p>

          <div className="relative h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden max-w-4xl mx-auto">
            <img
              src="suntracksystemworkflow.jpg"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">


            {/* Card 2 */}
            <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <Cloud className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Weather Prediction Integration</h3>
              <p className="text-gray-600">
                Based on weather predictions, the system adjusts the angle and orientation of the solar panel. This
                ensures optimal energy capture even during changing weather conditions.
              </p>
            </div>

       

            {/* Card 4 */}
            <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <Thermometer className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Environmental Sensing</h3>
              <p className="text-gray-600">
                A sun-tracking sensor gathers real-time environmental data (e.g., temperature, UV). This data helps
                the system make micro-adjustments for optimal performance.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-red-100 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <Zap className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Processing</h3>
              <p className="text-gray-600">
                The data is processed by an AI module (TensorFlow) to calculate the sun's optimal angle. The AI
                continuously learns and improves its predictions based on historical performance.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-teal-100 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <BarChart3 className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Dashboard</h3>
              <p className="text-gray-600">
                All data is stored and presented in a simple dashboard. Users can monitor performance, energy
                production, and system health in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
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
      <footer style={{ backgroundColor: "rgba(26, 67, 10)" }} className="mt-auto border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span className="font-bold text-white">SunTrack</span>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-white hover:text-yellow-500">
                Home
              </Link>
              <Link href="/how-it-works" className="text-sm text-white hover:text-yellow-500">
                How It Works
              </Link>
              <Link href="/dashboard" className="text-sm text-white hover:text-yellow-500">
                Dashboard
              </Link>
              <Link href="/about" className="text-sm text-white hover:text-yellow-500 ">
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

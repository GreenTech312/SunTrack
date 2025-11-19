import Link from "next/link"
import { ArrowRight, Sun, BarChart3, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b" style={{ backgroundColor: "rgba(26, 67, 10)" }}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2 text-white">
            <Sun className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">SunTrack</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
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
              className="font-medium text-white hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">

            {/* LOGIN BUTTON — added */}
            <Button asChild>
              <Link href="/login" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                Login
              </Link>
            </Button>

            <Button asChild>
              <Link href="/dashboard" className="bg-black hover:bg-yellow-400">
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[rgba(26,67,10)]">
              AI-Powered Solar Tracking System
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive solar energy management with real-time data tracking, performance analytics, and multi-site monitoring for optimal energy production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                style={{ backgroundColor: "rgba(26, 67, 10)", color: "white" }}
              >
                <Link href="/how-it-works">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 " />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link className="hover:bg-yellow-400" href="/dashboard">View Demo Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
              alt="SunTrack Solar Panel System"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-[rgba(26,67,10)]">
            Key Platform Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Real-Time Monitoring</h3>
              <p className="text-gray-600">
                Track energy production, power output, voltage, current and system performance in real-time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Performance Analytics</h3>
              <p className="text-gray-600">
                Monitor efficiency rates, capacity utilization and compare actual vs. expected output.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Health Monitoring</h3>
              <p className="text-gray-600">
                Receive alerts for underperforming systems and maintenance notifications.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Historical Analytics</h3>
              <p className="text-gray-600">
                Access daily/weekly/monthly reports and identify performance trends.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Seamless Integration</h3>
              <p className="text-gray-600">
                Connect with third-party apps, smart devices, and cloud storage.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[rgba(26,67,10)]">Multi-Site Management</h3>
              <p className="text-gray-600">
                Manage multiple solar plants and facilities from a single platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-[rgba(26,67,10)]">
            Ready to Maximize Your Solar Efficiency?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            SunTrack's AI-powered system can increase energy production by up to 25% compared to fixed solar panels.
          </p>
          <Button size="lg" asChild style={{ backgroundColor: "rgba(26, 67, 10)", color: "white" }}>
            <Link href="/dashboard">Explore the Dashboard Demo</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-8 bg-[rgba(26,67,10)]">
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

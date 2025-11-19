"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, ArrowUpDown, Thermometer, Droplets, Battery, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PanelChart } from "@/components/panel-chart"
import { WeatherForecast } from "@/components/weather-forecast"
import { EnergyProduction } from "@/components/energy-production"
import { PanelStatus } from "@/components/panel-status"
import { SolarCalculator } from "@/components/solar-calculator"

type PanelData = {
  temperature: number
  performanceData: any[]
  [key: string]: any
}

type WeatherData = {
  humidity: number
  forecast: any[]
  [key: string]: any
}

type EnergyData = {
  currentOutput: number
  batteryLevel: number
  productionData: any[]
  [key: string]: any
}

export default function Dashboard() {
  const [panelData, setPanelData] = useState<PanelData | null>(null)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [energyData, setEnergyData] = useState<EnergyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const panelResponse = await fetch("/api/panel-data")
        const weatherResponse = await fetch("/api/weather-data")
        const energyResponse = await fetch("/api/energy-data")

        const panelData = await panelResponse.json()
        const weatherData = await weatherResponse.json()
        const energyData = await energyResponse.json()

        setPanelData(panelData)
        setWeatherData(weatherData)
        setEnergyData(energyData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        import("@/lib/mock-data").then(
          ({ mockPanelData, mockWeatherData, mockEnergyData }) => {
            setPanelData(mockPanelData)
            setWeatherData(mockWeatherData)
            setEnergyData(mockEnergyData)
            setLoading(false)
          }
        )
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="border-b" style={{ backgroundColor: "rgba(26,67,10)" }}>
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Sun className="h-6 w-6 text-yellow-300" />
            <span className="text-xl font-bold">SunTrack</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-white hover:text-yellow-300 transition-colors">Home</Link>
            <Link href="/how-it-works" className="font-medium text-white hover:text-yellow-300 transition-colors">How It Works</Link>
            <Link href="/dashboard" className="font-medium text-yellow-400 hover:text-yellow-300 transition-colors">Dashboard</Link>
            <Link href="/about" className="font-medium text-white hover:text-yellow-300 transition-colors">About</Link>
          </nav>

          <Button className="hover:bg-yellow-400 hover:text-black bg-white text-black" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-green-700">System Dashboard</h1>
              <p className="text-gray-600">Monitor your SunTrack system performance in real-time</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <p className="text-sm text-gray-500 mb-1">Last updated: May 13, 2025 6:08 PM</p>
              <Button size="sm" variant="outline" className="gap-2 border-green-700 text-green-700">
                <ArrowUpDown className="h-4 w-4" /> Refresh Data
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="h-4 bg-green-100 rounded w-1/2 mb-3"></div>
                  <div className="h-8 bg-green-100 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-4 mb-8">
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="text-sm text-green-700">Current Power Output</div>
                  <div className="flex items-center mt-2">
                    <Zap className="h-5 w-5 text-green-700 mr-2" />
                    <div className="text-2xl font-bold">{energyData?.currentOutput ?? "--"} kW</div>
                  </div>
                  <p className="text-xs text-green-600 mt-1">+12% from yesterday</p>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="text-sm text-green-700">Panel Temperature</div>
                  <div className="flex items-center mt-2">
                    <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                    <div className="text-2xl font-bold">{panelData?.temperature ?? "--"}°C</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Optimal range: 15-35°C</p>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="text-sm text-green-700">Battery Status</div>
                  <div className="flex items-center mt-2">
                    <Battery className="h-5 w-5 text-green-700 mr-2" />
                    <div className="text-2xl font-bold">{energyData?.batteryLevel ?? "--"}%</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Estimated backup: 6 hours</p>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="text-sm text-green-700">Humidity</div>
                  <div className="flex items-center mt-2">
                    <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                    <div className="text-2xl font-bold">{weatherData?.humidity ?? "--"}%</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Last 24h: 45% avg</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex gap-4 border-b border-green-300 pb-2">
                  <button className="text-green-700 font-medium">Performance</button>
                  <button className="text-gray-600 hover:text-green-700">Weather Forecast</button>
                  <button className="text-gray-600 hover:text-green-700">Energy Production</button>
                  <button className="text-gray-600 hover:text-green-700">System Status</button>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-200 h-[400px] mt-4">
                  <PanelChart data={panelData?.performanceData || []} />
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How Dashboard Works</h2>
          <p className="text-gray-600 mb-6">Use the solar energy calculator below to estimate energy production for your setup in Azerbaijan.</p>
          <SolarCalculator />
        </div>
      </div>

      <footer style={{ backgroundColor: "rgba(26,67,10)" }} className="border-t py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sun className="h-5 w-5 text-yellow-300" />
              <span className="font-bold text-white">SunTrack</span>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-white  hover:text-yellow-400 transition-colors">Home</Link>
              <Link href="/how-it-works" className="text-sm text-white  hover:text-yellow-400 transition-colors">How It Works</Link>
              <Link href="/dashboard" className="text-sm text-white  hover:text-yellow-400 transition-colors">Dashboard</Link>
              <Link href="/about" className="text-sm text-white hover:text-yellow-400 transition-colors">About</Link>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-white">© 2025 SunTrack. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, ArrowUpDown, Thermometer, Droplets, Battery, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PanelChart } from "@/components/panel-chart"
import { WeatherForecast } from "@/components/weather-forecast"
import { EnergyProduction } from "@/components/energy-production"
import { PanelStatus } from "@/components/panel-status"

export default function Dashboard() {
  const [panelData, setPanelData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [energyData, setEnergyData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch mock data
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
        // Use fallback data if API fails
        import("@/lib/mock-data").then(({ mockPanelData, mockWeatherData, mockEnergyData }) => {
          setPanelData(mockPanelData)
          setWeatherData(mockWeatherData)
          setEnergyData(mockEnergyData)
          setLoading(false)
        })
      }
    }

    fetchData()
  }, [])

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
            <Link href="/dashboard" className="font-medium text-yellow-600">
              Dashboard
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
          </nav>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="flex-1 py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">System Dashboard</h1>
              <p className="text-gray-600">Monitor your SunTrack system performance in real-time</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500 mb-1">Last updated: May 13, 2025 6:08 PM</p>
              <Button size="sm" variant="outline" className="gap-2">
                <ArrowUpDown className="h-4 w-4" /> Refresh Data
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="pb-2">
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-10 bg-gray-200 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              {/* Stats Overview */}
              <div className="grid gap-6 md:grid-cols-4 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Current Power Output</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      <div className="text-2xl font-bold">{energyData?.currentOutput} kW</div>
                    </div>
                    <p className="text-xs text-green-600 mt-1">+12% from yesterday</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Panel Temperature</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                      <div className="text-2xl font-bold">{panelData?.temperature}°C</div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Optimal range: 15-35°C</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Battery Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Battery className="h-5 w-5 text-green-500 mr-2" />
                      <div className="text-2xl font-bold">{energyData?.batteryLevel}%</div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Estimated backup: 6 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Humidity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                      <div className="text-2xl font-bold">{weatherData?.humidity}%</div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Last 24h: 45% avg</p>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs for different views */}
              <Tabs defaultValue="performance" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="weather">Weather Forecast</TabsTrigger>
                  <TabsTrigger value="energy">Energy Production</TabsTrigger>
                  <TabsTrigger value="system">System Status</TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Panel Performance</CardTitle>
                      <CardDescription>Real-time tracking and energy production data</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                      <PanelChart data={panelData?.performanceData || []} />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="weather" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Weather Forecast</CardTitle>
                      <CardDescription>5-day forecast affecting panel performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <WeatherForecast data={weatherData?.forecast || []} />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="energy" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Energy Production</CardTitle>
                      <CardDescription>Daily and monthly energy production statistics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <EnergyProduction data={energyData?.productionData || []} />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="system" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>System Status</CardTitle>
                      <CardDescription>Current panel orientation and system health</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PanelStatus data={panelData || {}} />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8">
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

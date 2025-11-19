"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type LoginPayload = {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const BRAND = "rgba(26,67,10,1)"
  const SOFT_BG = "rgba(26,67,10,0.06)"

  const validate = (payload: LoginPayload) => {
    if (!payload.email) return "Email is required."
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(payload.email)) return "Please enter a valid email address."
    if (!payload.password) return "Password is required."
    if (payload.password.length < 6) return "Password must be at least 6 characters."
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const payload: LoginPayload = { email: email.trim(), password }

    const validationError = validate(payload)
    if (validationError) {
      setError(validationError)
      return
    }

    // No API call — just simulate login and redirect
    setLoading(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="w-full max-w-md">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="p-2 rounded-md"
              style={{ backgroundColor: SOFT_BG, display: "inline-flex" }}
              aria-hidden
            >
              <Sun className="h-5 w-5" style={{ color: BRAND }} />
            </div>
            <span className="text-lg font-semibold" style={{ color: BRAND }}>
              SunTrack
            </span>
          </Link>
          <Link
            className="text-sm font-medium"
            href="/about"
            style={{ color: "rgba(0,0,0,0.6)" }}
          >
            About
          </Link>
        </header>

        <Card className="shadow-lg">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-2xl">Sign in to SunTrack</CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              Access your site dashboard and performance metrics
            </p>
          </CardHeader>

          <CardContent className="px-6 py-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-60"
                  style={{
                    borderColor: "rgba(0,0,0,0.1)",
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.03)",
                    outlineColor: BRAND,
                  }}
                  aria-required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-60"
                  style={{
                    borderColor: "rgba(0,0,0,0.1)",
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.03)",
                    outlineColor: BRAND,
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                    className="accent-[rgba(26,67,10,1)]"
                  />
                  <span className="text-gray-600">Show password</span>
                </label>

                <Link href="/forgot-password" className="text-sm font-medium" style={{ color: BRAND }}>
                  Forgot password?
                </Link>
              </div>

              {error && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="text-sm text-red-700 bg-red-50 px-3 py-2 rounded-md"
                >
                  {error}
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                  style={{
                    backgroundColor: BRAND,
                    color: "white",
                    borderRadius: 8,
                    boxShadow: "0 6px 18px rgba(26,67,10,0.12)",
                    padding: "0.65rem 1rem",
                  }}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">Don’t have an account? </span>
              <span className="font-medium">
                <Link href="/request-access" style={{ color: BRAND }}>
                  Request access
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SunTrack
        </footer>
      </div>
    </div>
  )
}

'use client'

import { MoonStar, Sun, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="flex items-center">
      <button
        aria-label="Toggle dark mode"
        className="flex items-center justify-center rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
        data-umami-event="nav-theme-switcher"
        onClick={toggleTheme}
      >
        {mounted ? (
          resolvedTheme === 'dark' ? (
            <MoonStar strokeWidth={1.5} size={22} />
          ) : (
            <Sun strokeWidth={1.5} size={22} />
          )
        ) : (
          <SunMoon strokeWidth={1.5} size={22} />
        )}
      </button>
    </div>
  )
}

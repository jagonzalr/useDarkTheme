'use strict'

import { useEffect, useState } from 'react'

export const useDarkTheme = (
  initialDark = false,
  { darkClass = 'dark', lightClass = 'light', storageKey = 'useDarkTheme' } = {}
) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem(storageKey) || 'light'
  )

  useEffect(() => {
    if (initialDark) {
      setTheme('dark')
      return
    }

    if (!window.matchMedia) return

    let darkScheme = null
    const localTheme = window.localStorage.getItem(storageKey)
    const listener = e => setTheme(e.matches ? darkClass : lightClass)

    darkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    darkScheme.addListener(listener)
    setTheme(localTheme || (darkScheme.matches ? 'dark' : 'light'))

    return () => {
      if (darkScheme) darkScheme.removeListener(listener)
    }
  }, [])

  useEffect(() => {
    const addClass = theme === 'dark' ? darkClass : lightClass
    const removeClass = theme === 'dark' ? lightClass : darkClass
    document.body.classList.add(addClass)
    document.body.classList.remove(removeClass)
    window.localStorage.setItem(storageKey, theme)
  }, [theme])

  return [theme, setTheme]
}

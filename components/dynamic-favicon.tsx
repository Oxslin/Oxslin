"use client"

import { useEffect } from "react"

export function DynamicFavicon() {
  useEffect(() => {
    const href = "/favicon.svg"
    let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }
    link.href = href
    link.type = "image/svg+xml"
  }, [])

  return null
}

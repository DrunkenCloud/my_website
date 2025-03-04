import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DrunkenCloud",
  description: "Personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/geass.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
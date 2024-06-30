import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JP Gardening & Landscaping Long Beach',
  description: 'Landscape Design, Gardening, Designer Landscapes, irrigation system design and installation..',
  twitter: {
    card: "summary",
    creator: "@dabonthuis",
    images: "https://jp-gardening.com/istock/opengraph-image.png",
  },
  openGraph: {
    type: "website",
    url: "https://jp-gardening.com",
    title: "JP Gardening",
    description: 'Landscape Design, Gardening, Designer Landscapes, irrigation system design and installation..',
    siteName: "JP Gardening",
    images: [{
      url: "https://jp-gardening.com/istock/opengraph-image.png",
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cyphr — Stop Renting Your Software. Start Owning It.',
  description: 'Custom-built software for DTC brands tired of paying $10K+/mo for tools they\'ll never own. We build it. You own it. Forever.',
  openGraph: {
    title: 'Cyphr — Stop Renting Your Software. Start Owning It.',
    description: 'Custom-built software for DTC brands. No subscriptions. No lock-in. You own everything.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyphr — Stop Renting Your Software.',
    description: 'Custom-built software for DTC brands. You own it. Forever.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoWithFund - Empowering Organizations to Make a Difference',
  description: 'GoWithFund organizes fundraisers for entities in need of financial support, helping vital community organizations secure the resources they need to thrive.',
  keywords: 'fundraising, nonprofit, charity, community, donations, social impact, gowithfund',
  openGraph: {
    title: 'GoWithFund - Empowering Organizations to Make a Difference',
    description: 'Connecting resources to global needs and empowering positive change worldwide.',
    url: 'https://gowithfund.org',
    siteName: 'GoWithFund',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoWithFund - Empowering Organizations to Make a Difference',
    description: 'Connecting resources to global needs and empowering positive change worldwide.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en\" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class\" defaultTheme="system\" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

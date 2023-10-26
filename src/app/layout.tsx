import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Loïc Kami, Full Stack React Engineer',
  description: `As a passionate Full Stack React Engineer, I offer extensive expertise in Next.js, React Native,
Node.js, Golang, and Firebase projects.My adept problem- solving, collaborative approach, and
excellent communication empower me to thrive in varied environments.With a successful history of
delivering top - notch solutions, from intricate point - of - sale systems to streamlined command - line
tools, I am dedicated to excellence in every project I undertake`,
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

import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  style: ['normal'],
  weight: ['700', '400', '300'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Portfolio - Loïc Kami',
  description: 'Get-The-Job-Done Full Stack (FE-Heavy) developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(lato.className)
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}

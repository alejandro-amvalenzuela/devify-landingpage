import { Inter } from 'next/font/google'
import ThemeWrapper from '../components/ThemeWrapper'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devify | Desarrollo de Software Premium',
  description: 'Soluciones de software de primer nivel para escalar tu negocio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}

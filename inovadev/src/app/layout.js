import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

import { Manrope, Inconsolata } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
})

export const metadata = {
  title: "Productividapp",
  description: "Organiza tu tiempo y tareas de manera más eficiente.",
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${inconsolata.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

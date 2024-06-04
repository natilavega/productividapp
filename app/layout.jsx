import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Productividapp",
  description: "Organiza tu tiempo y tareas de manera más eficiente.",
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

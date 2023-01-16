import './globals.css'
import { Navigation, Hero, Social, Mission } from '../components'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Hero />
        <Social />
        <Mission />
        {children}
      </body>
    </html>
  )
}

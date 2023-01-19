import './globals.css'
import { Navigation, Hero, Social, Mission, Feature, Work } from '../components'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Hero />
        <Social />
        <Mission />
        <Feature />
        <Work />
        {children}
      </body>
    </html>
  )
}

import { InterFont } from '../components/fonts/fonts'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/navbar/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Provider } from '../store/provider'

export const metadata: Metadata = {
  title: 'Gaming Universe',
  description: 'Compra tus componentes de gaming en nuestra página aprovechando nuestros descuentos y promociones!'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={InterFont.style} className='flex flex-col min-h-screen bg-neutral-900 text-gray-300 [&>main]:flex-1'>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

import { ToastContainer } from 'react-toastify'
import { Modals } from 'react-modal-observer'
import { InterFont } from '../components/fonts/fonts'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/navbar/navbar/navbar'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { Metadata } from 'next'
import { PageProvider } from '../providers/page-provider'

export const metadata: Metadata = {
  title: 'Gaming Universe',
  description: 'Compra tus componentes de gaming en nuestra página aprovechando nuestros descuentos y promociones!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={InterFont.style}
        className="flex flex-col-reverse min-h-screen bg-neutral-bg text-gray-300 [&>main]:flex-1"
      >
        <Footer />
        <PageProvider>{children}</PageProvider>
        <Navbar />
        <ToastContainer
          autoClose={3000}
          closeButton
          draggable
          pauseOnFocusLoss={false}
          newestOnTop
          position="bottom-right"
        />
        <Modals />
      </body>
    </html>
  )
}

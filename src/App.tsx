import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import IntroLoader from './components/IntroLoader'
import Home from './pages/Home'

export default function App() {
  const handleEnrolClick = () => {
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF8F0] text-[#242820] flex flex-col font-sans selection:bg-[#B89545] selection:text-[#FAF8F0] relative">
      {/* Cinematic Logo Preloader */}
      <IntroLoader />

      {/* Luxury Navigation Bar */}
      <Navbar onEnrolClick={handleEnrolClick} />

      {/* Main One-Page Content */}
      <div className="flex-1">
        <Home />
      </div>

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Academy Footer */}
      <Footer />
    </div>
  )
}

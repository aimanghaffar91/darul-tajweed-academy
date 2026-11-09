import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  onEnrolClick?: () => void
}

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Teacher', href: '#teacher' },
  { name: 'Courses', href: '#courses' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ onEnrolClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Determine active section for nav highlight
      const sections = ['hero', 'about', 'teacher', 'courses', 'qualifications', 'why-us', 'contact']
      const scrollPos = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#073B2A]/95 backdrop-blur-md border-b border-[#B89545]/25 shadow-xl py-3'
            : 'bg-gradient-to-b from-[#042318]/90 via-[#073B2A]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3.5 group text-left"
            >
              <div className="relative">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#B89545]/60 shadow-md p-0.5 bg-[#FAF8F0] transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/darul-tajweed-logo.jpg"
                    alt="Darul Tajweed Academy Logo"
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
                <div className="absolute -inset-1 rounded-full bg-[#B89545]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg font-semibold tracking-wider text-[#FAF8F0] group-hover:text-[#D8BD74] transition-colors leading-tight">
                  DARUL TAJWEED
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans tracking-widest text-[#B89545] uppercase font-medium">
                  Academy • Islamabad
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors tracking-wide ${
                      isActive ? 'text-[#D8BD74]' : 'text-[#FAF8F0]/85 hover:text-[#FAF8F0]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* Animated hover underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#B89545] transition-all duration-300 ${
                        isActive ? 'w-4/5 shadow-[0_0_8px_#B89545]' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                )
              })}
            </nav>

            {/* CTA Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onEnrolClick) {
                    e.preventDefault()
                    onEnrolClick()
                  } else {
                    handleNavClick(e, '#contact')
                  }
                }}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-gradient-to-r from-[#D4AF37] via-[#B89545] to-[#967A38] text-[#073B2A] hover:text-[#042318] shadow-md hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-sans border border-[#FAF8F0]/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#073B2A]" />
                <span className="font-semibold">Join a Class</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-[#FAF8F0] hover:text-[#D8BD74] hover:bg-[#0B3024]/60 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[290px] sm:w-[320px] bg-[#073B2A] border-l border-[#B89545]/30 z-50 shadow-2xl p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#B89545]/20">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/darul-tajweed-logo.jpg"
                      alt="Logo"
                      className="w-10 h-10 rounded-full border border-[#B89545]"
                    />
                    <div>
                      <div className="font-cinzel text-sm font-semibold text-[#FAF8F0]">
                        Darul Tajweed
                      </div>
                      <div className="text-[10px] text-[#B89545] tracking-wider">ACADEMY</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-md text-[#FAF8F0] hover:text-[#D8BD74]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="px-4 py-3 rounded-lg text-base font-medium text-[#FAF8F0]/90 hover:text-[#D8BD74] hover:bg-[#0B3024] transition-all flex items-center justify-between border-b border-white/5"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#B89545]/60" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#B89545]/20 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B89545] text-[#073B2A] shadow-md text-sm"
                >
                  Join a Class
                </a>
                <p className="text-center text-[11px] text-[#FAF8F0]/60 italic font-serif">
                  "Learn Quran • Perfect Tajweed • Live Sunnah"
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

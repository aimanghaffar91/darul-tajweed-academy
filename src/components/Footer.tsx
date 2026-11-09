import { ArrowUp, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#042318] text-[#FAF8F0] pt-20 pb-12 border-t-2 border-[#B89545]/40 overflow-hidden">
      {/* Background Decorative Motifs */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Academy Logo Emblem */}
          <div className="relative mb-6 group cursor-pointer" onClick={scrollToTop}>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#D4AF37] via-[#B89545] to-[#073B2A] shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF8F0] p-1 border border-[#B89545]/40 flex items-center justify-center">
                <img
                  src="/images/darul-tajweed-logo.jpg"
                  alt="Darul Tajweed Academy Crest"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-widest text-[#FAF8F0]">
            DARUL TAJWEED ACADEMY
          </h2>

          {/* Tagline */}
          <p className="mt-2 text-sm sm:text-base font-serif italic tracking-wider text-[#D8BD74]">
            "Learn Quran • Perfect Tajweed • Live Sunnah"
          </p>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center gap-4">
            <span className="h-[1px] w-16 bg-[#B89545]/40" />
            <span className="text-[#D8BD74] font-serif text-sm">۞</span>
            <span className="h-[1px] w-16 bg-[#B89545]/40" />
          </div>

          {/* Description */}
          <p className="max-w-xl text-sm sm:text-base text-[#FAF8F0]/75 font-sans leading-relaxed">
            Helping learners improve their Quran recitation, understand its teachings and build a meaningful connection with the Holy Quran.
          </p>

          {/* Footer Navigation */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-sans tracking-wide">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, 'hero')}
              className="text-[#FAF8F0]/80 hover:text-[#D8BD74] transition-colors"
            >
              Home
            </a>
            <span className="text-[#B89545]/40">•</span>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-[#FAF8F0]/80 hover:text-[#D8BD74] transition-colors"
            >
              About
            </a>
            <span className="text-[#B89545]/40">•</span>
            <a
              href="#teacher"
              onClick={(e) => scrollToSection(e, 'teacher')}
              className="text-[#FAF8F0]/80 hover:text-[#D8BD74] transition-colors"
            >
              Teacher
            </a>
            <span className="text-[#B89545]/40">•</span>
            <a
              href="#courses"
              onClick={(e) => scrollToSection(e, 'courses')}
              className="text-[#FAF8F0]/80 hover:text-[#D8BD74] transition-colors"
            >
              Courses
            </a>
            <span className="text-[#B89545]/40">•</span>
            <a
              href="#qualifications"
              onClick={(e) => scrollToSection(e, 'qualifications')}
              className="text-[#FAF8F0]/80 hover:text-[#D8BD74] transition-colors"
            >
              Qualifications
            </a>
            <span className="text-[#B89545]/40">•</span>
            <a
              href="#why-us"
              onClick={(e) => scrollToSection(e, 'why-us')}
              className="text-[#FAF8F0]/80 hover:text-[#D8BD74] transition-colors"
            >
              Why Choose Us
            </a>
            <span className="text-[#B89545]/40">•</span>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-[#FAF8F0]/80 hover:text-[#D8BD74] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Direct Channels */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://wa.me/923185690089"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#073B2A] hover:bg-[#0B3024] border border-[#B89545]/30 text-xs text-[#FAF8F0] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: +92 318 5690089</span>
            </a>

            <a
              href="mailto:darultajweedacademy@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#073B2A] hover:bg-[#0B3024] border border-[#B89545]/30 text-xs text-[#FAF8F0] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D8BD74]" />
              <span>Islamabad, Pakistan</span>
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="mt-12 pt-8 w-full border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F0]/60 font-sans">
            <p>© 2026 Darul Tajweed Academy. All rights reserved.</p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[#D8BD74] hover:text-[#FAF8F0] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

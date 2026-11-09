import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, BookOpen, Compass } from 'lucide-react'

interface HeroProps {
  onExploreCourses?: () => void
  onBeginJourney?: () => void
}

export default function Hero({ onExploreCourses, onBeginJourney }: HeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Attempt autoplay programmatically to satisfy browser policies
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, poster remains active
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#073B2A]"
      aria-label="Darul Tajweed Academy Hero"
    >
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero-quran.mp4" type="video/mp4" />
        </video>

        {/* Fallback Poster Image if video is loading or unsupported */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        />

        {/* Cinematic Emerald & Soft Vignette Overlays */}
        {/* Layer 1: Dark emerald gradient for exceptional text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#042318]/90 via-[#073B2A]/80 to-[#073B2A]" />

        {/* Layer 2: Radial vignette focusing light on center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,149,69,0.12)_0%,rgba(4,35,24,0.85)_80%)]" />

        {/* Layer 3: Subtle Islamic geometric watermark */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-40 mix-blend-overlay" />

        {/* Bottom smooth fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F0] to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 sm:pt-36 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Authentic Arabic Bismillah Calligraphy */}
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#B89545]" />
            <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#D8BD74] tracking-wide select-none drop-shadow-md">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#B89545]" />
          </div>

          {/* Academy Logo Emblem */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mb-6 relative group"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-[#D4AF37] via-[#B89545] to-[#0B3024] shadow-[0_0_35px_rgba(184,149,69,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF8F0] p-1 border border-[#B89545]/40 flex items-center justify-center">
                <img
                  src="/images/darul-tajweed-logo.jpg"
                  alt="Darul Tajweed Academy Official Crest"
                  className="w-full h-full object-cover object-center rounded-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Soft decorative aura */}
            <div className="absolute -inset-2 rounded-full bg-[#B89545]/20 blur-xl pointer-events-none -z-10" />
          </motion.div>

          {/* Small Introductory Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3024]/80 border border-[#B89545]/40 shadow-sm backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D8BD74]" />
            <span className="text-xs sm:text-sm font-cinzel font-semibold tracking-widest text-[#FAF8F0] uppercase">
              WELCOME TO DARUL TAJWEED ACADEMY
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8BD74]" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FAF8F0] leading-[1.15] max-w-4xl tracking-tight"
          >
            "Let the Light of the Quran{' '}
            <span className="italic text-gold-gradient font-serif font-medium">
              Guide Your Journey.
            </span>"
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#FAF8F0]/85 font-sans font-light max-w-2xl leading-relaxed"
          >
            Learn the Quran with proper Tajweed, understand its beautiful teachings and build a lasting connection with the words of Allah.
          </motion.p>

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#D8BD74] tracking-widest font-serif italic"
          >
            <span>Learn Quran</span>
            <span className="text-[#B89545]">•</span>
            <span>Perfect Tajweed</span>
            <span className="text-[#B89545]">•</span>
            <span>Live Sunnah</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                if (onExploreCourses) onExploreCourses()
                else scrollToSection('courses')
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-sm sm:text-base tracking-wide bg-gradient-to-r from-[#D4AF37] via-[#B89545] to-[#967A38] text-[#073B2A] hover:text-[#042318] shadow-lg hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] font-sans border border-[#FAF8F0]/30 group"
            >
              <BookOpen className="w-4 h-4 text-[#073B2A] group-hover:rotate-6 transition-transform" />
              <span className="font-semibold">Explore Our Courses</span>
            </button>

            <button
              onClick={() => {
                if (onBeginJourney) onBeginJourney()
                else scrollToSection('contact')
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm sm:text-base tracking-wide bg-[#0B3024]/70 hover:bg-[#0B3024] text-[#FAF8F0] border border-[#B89545]/50 hover:border-[#D8BD74] shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Compass className="w-4 h-4 text-[#D8BD74]" />
              <span>Begin Your Learning Journey</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll-Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 sm:mt-16 flex flex-col items-center"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('about')
            }}
            className="group flex flex-col items-center gap-2 text-xs tracking-widest text-[#FAF8F0]/70 hover:text-[#D8BD74] transition-colors"
          >
            <span className="font-sans uppercase text-[11px] font-medium tracking-wider">Scroll to Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-[#B89545]/50 flex items-start justify-center p-1.5 shadow-sm group-hover:border-[#D8BD74] transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#D8BD74]"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

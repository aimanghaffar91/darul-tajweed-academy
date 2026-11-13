import { motion } from 'framer-motion'
import { BookOpen, Compass, Sparkles } from 'lucide-react'
import QuranPageTurner from '../components/QuranPageTurner'

interface HeroProps {
  onExploreCourses?: () => void
  onBeginJourney?: () => void
}

export default function Hero({ onExploreCourses, onBeginJourney }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#073B2A]"
      aria-label="Darul Tajweed Academy Hero"
    >
      {/* Peaceful, Atmospheric Sacred Background (Tranquil, not fast-moving) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        {/* Serene High-Resolution Islamic Sanctuary Backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.4] saturate-[0.85] scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        />

        {/* Cinematic Emerald & Soft Vignette Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#042318]/90 via-[#073B2A]/85 to-[#073B2A]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,149,69,0.18)_0%,rgba(4,35,24,0.92)_80%)]" />
        <div className="absolute inset-0 bg-islamic-pattern opacity-30 mix-blend-overlay" />

        {/* Subtle Warm Sunlight Ray Beam from Top-Left */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Seamless soft fade into the warm ivory of the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FAF8F0] via-[#FAF8F0]/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content: Two-Column Split Layout on Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Brand Typography & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Authentic Arabic Bismillah Calligraphy */}
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#B89545]" />
              <p className="font-arabic text-2xl sm:text-3xl text-[#D8BD74] tracking-wider select-none drop-shadow-md">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#B89545]" />
            </div>

            {/* Small Introductory Text Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#0B3024]/90 border border-[#B89545]/50 shadow-md backdrop-blur-md mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D8BD74]" />
              <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-widest text-[#FAF8F0] uppercase">
                WELCOME TO DARUL TAJWEED ACADEMY
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D8BD74]" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-serif text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-normal text-[#FAF8F0] leading-[1.14] tracking-tight"
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
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-5 text-base sm:text-lg text-[#FAF8F0]/85 font-sans font-light max-w-xl leading-relaxed"
            >
              Learn the Quran with proper Tajweed, understand its beautiful teachings and build a lasting connection with the words of Allah.
            </motion.p>

            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-[#D8BD74] tracking-widest font-serif italic"
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
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => {
                  if (onExploreCourses) onExploreCourses()
                  else scrollToSection('courses')
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base tracking-wide bg-gradient-to-r from-[#D4AF37] via-[#B89545] to-[#967A38] text-[#073B2A] hover:text-[#042318] shadow-lg hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] font-sans border border-[#FAF8F0]/30 group"
              >
                <BookOpen className="w-4 h-4 text-[#073B2A] group-hover:rotate-6 transition-transform" />
                <span className="font-semibold">Explore Our Courses</span>
              </button>

              <button
                onClick={() => {
                  if (onBeginJourney) onBeginJourney()
                  else scrollToSection('contact')
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base tracking-wide bg-[#0B3024]/80 hover:bg-[#0B3024] text-[#FAF8F0] border border-[#B89545]/50 hover:border-[#D8BD74] shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Compass className="w-4 h-4 text-[#D8BD74]" />
                <span>Begin Your Learning Journey</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Eye-Catching 3D Quran Page-Turner (The Illuminated Mushaf) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full flex flex-col items-center justify-center"
          >
            {/* The 3D Quran Turning Pages Experience */}
            <QuranPageTurner />
          </motion.div>

        </div>

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

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntroLoaderProps {
  onComplete?: () => void
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(false)
      if (onComplete) onComplete()
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, 1800)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#073B2A] text-[#FAF8F0] select-none"
        >
          {/* Background Islamic Watermark */}
          <div className="absolute inset-0 bg-islamic-pattern-dark opacity-30 pointer-events-none" />

          {/* Glowing Ambient Circle */}
          <div className="absolute w-72 h-72 rounded-full bg-[#B89545]/15 blur-3xl" />

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Arabic Calligraphy Accent */}
            <p className="font-arabic text-xl sm:text-2xl text-[#D8BD74] mb-6 drop-shadow">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            {/* Official Logo */}
            <div className="relative mb-5">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-b from-[#D4AF37] via-[#B89545] to-[#0B3024] shadow-[0_0_40px_rgba(184,149,69,0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF8F0] p-1 flex items-center justify-center border border-[#B89545]">
                  <img
                    src="/images/darul-tajweed-logo.jpg"
                    alt="Darul Tajweed Academy Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Academy Title */}
            <h1 className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-[#FAF8F0] text-center">
              DARUL TAJWEED ACADEMY
            </h1>

            <p className="text-xs font-serif italic text-[#D8BD74] tracking-widest mt-1">
              "Learn Quran • Perfect Tajweed • Live Sunnah"
            </p>

            {/* Elegant Loading Line */}
            <div className="w-44 h-0.5 bg-[#0B3024] rounded-full mt-6 overflow-hidden border border-[#B89545]/30">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#D8BD74] to-transparent"
              />
            </div>
          </motion.div>

          {/* Quick Skip Button */}
          <button
            onClick={() => {
              setIsVisible(false)
              if (onComplete) onComplete()
            }}
            className="absolute bottom-8 text-xs font-sans text-[#FAF8F0]/50 hover:text-[#D8BD74] transition-colors tracking-wider uppercase"
          >
            Enter Academy
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


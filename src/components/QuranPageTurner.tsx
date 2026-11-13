import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, BookOpen } from 'lucide-react'

interface PageSpread {
  id: number
  arabicNumeral: string
  image: string
  title: string
}

const spreads: PageSpread[] = [
  {
    id: 1,
    arabicNumeral: '١',
    image: '/images/quran-spread-1.jpg',
    title: 'Surah Al-Fatiha',
  },
  {
    id: 2,
    arabicNumeral: '٢',
    image: '/images/quran-spread-2.jpg',
    title: 'Online Quran Learning',
  },
  {
    id: 3,
    arabicNumeral: '٣',
    image: '/images/quran-spread-3.jpg',
    title: 'Sacred Quranic Guidance',
  },
]

export default function QuranPageTurner() {
  const [currentSpread, setCurrentSpread] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<number | null>(null)

  // Automatic turning timer with smooth progress line
  useEffect(() => {
    if (!isAutoPlaying || isFlipping) return

    const totalDuration = 7000 // 7 seconds per page spread
    const tickInterval = 50
    const step = (tickInterval / totalDuration) * 100

    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          turnNext()
          return 0
        }
        return prev + step
      })
    }, tickInterval)

    timerRef.current = timer

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isAutoPlaying, isFlipping, currentSpread])

  const turnNext = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setDirection('next')
    setProgress(0)

    setTimeout(() => {
      setCurrentSpread((prev) => (prev + 1) % spreads.length)
      setIsFlipping(false)
    }, 650)
  }

  const turnPrev = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setDirection('prev')
    setProgress(0)

    setTimeout(() => {
      setCurrentSpread((prev) => (prev - 1 + spreads.length) % spreads.length)
      setIsFlipping(false)
    }, 650)
  }

  const goToSpread = (index: number) => {
    if (isFlipping || index === currentSpread) return
    setIsFlipping(true)
    setDirection(index > currentSpread ? 'next' : 'prev')
    setProgress(0)

    setTimeout(() => {
      setCurrentSpread(index)
      setIsFlipping(false)
    }, 650)
  }

  const spread = spreads[currentSpread]
  const nextSpread = spreads[(currentSpread + 1) % spreads.length]

  return (
    <div className="relative w-full max-w-md sm:max-w-lg mx-auto select-none">
      {/* Ambient Spiritual Illumination Halo */}
      <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#B89545]/20 via-[#D4AF37]/10 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse" />

      {/* Main Interactive Book Assembly */}
      <div
        className="relative cursor-pointer group"
        onClick={turnNext}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        title="Click to turn page"
      >
        {/* Ornate Hardcover Bevel (Leather binding with gold foil emboss) */}
        <div className="relative p-3 sm:p-4 rounded-[32px] sm:rounded-[36px] bg-gradient-to-b from-[#B89545] via-[#8C6E2D] to-[#042318] shadow-[0_30px_70px_rgba(0,0,0,0.7),0_0_50px_rgba(184,149,69,0.3)] border border-[#D4AF37]/60">
          
          {/* Inner Golden Book Box */}
          <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#073B2A] border border-[#B89545]/50 shadow-inner">

            {/* Book Page Viewer with 3D Page Turn Animation (Pure Image, No Text Overlaid) */}
            <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] overflow-hidden bg-[#073B2A]">
              
              {/* Underneath Layer (Revealed during flip) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={nextSpread.image}
                  alt={nextSpread.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Active Turning Page Leaf */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpread}
                  initial={{
                    rotateY: direction === 'next' ? 45 : -45,
                    opacity: 0.4,
                    transformOrigin: 'left center',
                  }}
                  animate={{
                    rotateY: 0,
                    opacity: 1,
                    transformOrigin: 'left center',
                  }}
                  exit={{
                    rotateY: direction === 'next' ? -90 : 90,
                    opacity: 0,
                    transformOrigin: 'left center',
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 w-full h-full shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={spread.image}
                    alt={spread.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                  />

                  {/* Subtle Arch Framing and Edge Glint */}
                  <div className="absolute inset-2 sm:inset-3 border border-[#B89545]/40 rounded-xl pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#FAF8F0] via-[#D4AF37] to-[#FAF8F0] opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Central Spine Golden Bookmark Ribbon with Tassel */}
              <div className="absolute top-0 left-8 z-40 flex flex-col items-center pointer-events-none">
                <div className="w-2.5 sm:w-3.5 h-16 sm:h-20 bg-gradient-to-b from-[#D4AF37] via-[#B89545] to-[#8C6E2D] shadow-lg rounded-b-sm border-x border-[#FAF8F0]/30" />
                <div className="w-1.5 h-3 bg-[#B89545] rounded-full shadow" />
                <div className="w-0.5 h-4 bg-[#D4AF37]" />
              </div>

              {/* Turning Shadow Sweep */}
              {isFlipping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 bg-black/40 pointer-events-none z-30"
                />
              )}

              {/* Interactive Hover Prompt */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-[#042318]/90 text-[#FAF8F0] border border-[#B89545] shadow-2xl backdrop-blur-md flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#D8BD74]" />
                  <span className="text-xs font-cinzel font-semibold tracking-wider text-[#D8BD74]">
                    Click to Turn Page
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Progress Timer Line */}
            <div className="w-full h-1 bg-[#042318] overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B89545] via-[#D4AF37] to-[#B89545]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Handcrafted Walnut Rehal (Bookstand) Silhouette */}
        <div className="relative mx-auto -mt-3.5 w-4/5 flex justify-center items-center pointer-events-none z-10">
          <div className="w-full h-5 rounded-b-2xl bg-gradient-to-r from-[#3D2810] via-[#5C3D1A] to-[#3D2810] border-t border-[#8C6E2D] shadow-2xl flex items-center justify-around px-8">
            <span className="text-[10px] text-[#B89545]/70 font-serif">۞</span>
            <span className="text-[10px] text-[#B89545]/70 font-serif">۞</span>
            <span className="text-[10px] text-[#B89545]/70 font-serif">۞</span>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="mt-5 flex items-center justify-between px-2 sm:px-4">
        {/* Previous Page Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            turnPrev()
          }}
          className="p-2.5 rounded-full bg-[#0B3024]/85 hover:bg-[#073B2A] text-[#FAF8F0] hover:text-[#D8BD74] border border-[#B89545]/40 shadow-md backdrop-blur-md transition-all active:scale-95"
          aria-label="Previous Page"
          title="Turn to previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Folio Dots */}
        <div className="flex items-center gap-2">
          {spreads.map((s, idx) => (
            <button
              key={s.id}
              onClick={(e) => {
                e.stopPropagation()
                goToSpread(idx)
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-cinzel transition-all ${
                idx === currentSpread
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89545] text-[#073B2A] font-bold shadow-md scale-105'
                  : 'bg-[#0B3024]/60 hover:bg-[#0B3024] text-[#FAF8F0]/70 hover:text-[#FAF8F0] border border-[#B89545]/25'
              }`}
            >
              <span className="font-arabic font-bold">{s.arabicNumeral}</span>
              <span className="hidden sm:inline text-[10px]">Folio {idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Auto-turn Pause/Play Toggle & Next Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsAutoPlaying(!isAutoPlaying)
            }}
            className="p-2 rounded-full bg-[#0B3024]/85 hover:bg-[#073B2A] text-[#FAF8F0]/80 hover:text-[#D8BD74] border border-[#B89545]/40 text-xs transition-colors"
            title={isAutoPlaying ? 'Pause page auto-turn' : 'Resume page auto-turn'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              turnNext()
            }}
            className="p-2.5 rounded-full bg-[#0B3024]/85 hover:bg-[#073B2A] text-[#FAF8F0] hover:text-[#D8BD74] border border-[#B89545]/40 shadow-md backdrop-blur-md transition-all active:scale-95"
            aria-label="Next Page"
            title="Turn to next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

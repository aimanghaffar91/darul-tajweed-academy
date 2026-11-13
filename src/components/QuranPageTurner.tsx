import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, BookOpen } from 'lucide-react'

interface PageData {
  id: number
  arabicNumeral: string
  title: string
  subtitle: string
  verseArabic: string
  verseTranslation: string
  image: string
  tag: string
}

const pages: PageData[] = [
  {
    id: 1,
    arabicNumeral: '١',
    title: 'Surah Al-Fatiha',
    subtitle: 'The Opening • أم الكتاب',
    verseArabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    verseTranslation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
    image: '/images/hero-bg.jpg',
    tag: 'SACRED OPENING',
  },
  {
    id: 2,
    arabicNumeral: '٢',
    title: 'The Divine Illumination',
    subtitle: 'Words of Allah • القرآن الكريم',
    verseArabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
    verseTranslation: 'Read in the name of your Lord who created.',
    image: '/images/quran-pages.jpg',
    tag: 'FIRST REVELATION',
  },
  {
    id: 3,
    arabicNumeral: '٣',
    title: 'The Art of Tajweed',
    subtitle: 'Measured Recitation • ورتل القرآن',
    verseArabic: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
    verseTranslation: 'And recite the Quran with measured recitation.',
    image: '/images/tajweed-art.jpg',
    tag: 'TAJWEED EXCELLENCE',
  },
]

export default function QuranPageTurner() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<number | null>(null)

  // Auto page-turning timer
  useEffect(() => {
    if (!isAutoPlaying || isFlipping) return

    const duration = 6000 // 6 seconds per page
    const intervalTime = 50
    const step = (intervalTime / duration) * 100

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          turnNext()
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    timerRef.current = interval

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isAutoPlaying, isFlipping, currentPage])

  const turnNext = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection('next')
    setProgress(0)

    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length)
      setIsFlipping(false)
    }, 700)
  }

  const turnPrev = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection('prev')
    setProgress(0)

    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
      setIsFlipping(false)
    }, 700)
  }

  const goToPage = (index: number) => {
    if (isFlipping || index === currentPage) return
    setIsFlipping(true)
    setFlipDirection(index > currentPage ? 'next' : 'prev')
    setProgress(0)

    setTimeout(() => {
      setCurrentPage(index)
      setIsFlipping(false)
    }, 700)
  }

  const page = pages[currentPage]
  const nextPageIndex = (currentPage + 1) % pages.length
  const nextPage = pages[nextPageIndex]

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Ambient Halo & Light Rays around the Book */}
      <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-[#B89545]/20 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main 3D Book Container */}
      <div
        className="relative perspective-[1600px] cursor-pointer group"
        onClick={turnNext}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        title="Click to turn page"
      >
        {/* Book Outer Leather / Hardcover Spine Frame */}
        <div className="relative p-2.5 sm:p-3.5 rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#B89545] via-[#8C6E2D] to-[#0B3024] shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(184,149,69,0.3)] border border-[#D4AF37]/50">
          
          {/* Wooden Rehal Texture / Inner Shadow Border */}
          <div className="relative rounded-[22px] sm:rounded-[30px] overflow-hidden bg-[#073B2A] border border-[#B89545]/40 shadow-inner">

            {/* Top Bar inside Book Frame: Quran Ribbon & Arabic Numeral */}
            <div className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6 py-2.5 bg-gradient-to-b from-black/70 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-[#D8BD74]" />
                <span className="text-[10px] sm:text-xs font-cinzel font-bold text-[#D8BD74] uppercase tracking-wider">
                  The Sacred Pages • {page.tag}
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-arabic text-sm sm:text-base text-[#D8BD74]">
                <span>الصفحة</span>
                <span className="font-bold text-[#FAF8F0] px-1.5 py-0.5 rounded-full bg-[#B89545]/30 border border-[#B89545]/40 text-xs">
                  {page.arabicNumeral}
                </span>
              </div>
            </div>

            {/* Two-Page Spread Book Visual */}
            <div className="relative w-full h-[290px] sm:h-[380px] md:h-[420px] flex overflow-hidden">
              {/* Left Page (The Binding / Foundation) */}
              <div className="relative w-1/2 h-full overflow-hidden border-r border-[#B89545]/40">
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-[200%] max-w-none h-full object-cover object-left filter brightness-95"
                />
                {/* Book Gutter Shadow (Spine curvature gradient) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/60 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />

                {/* Left Page Calligraphic Verse Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-left pointer-events-none">
                  <span className="text-[10px] sm:text-xs font-cinzel text-[#D8BD74] tracking-widest block uppercase font-semibold">
                    {page.title}
                  </span>
                  <p className="text-[10px] sm:text-xs text-[#FAF8F0]/85 font-serif italic line-clamp-2 mt-0.5">
                    "{page.verseTranslation}"
                  </p>
                </div>
              </div>

              {/* Right Page (The Active / Turning Leaf) */}
              <div className="relative w-1/2 h-full overflow-hidden">
                {/* Next Page preview underneath (revealed during flip) */}
                <div className="absolute inset-0">
                  <img
                    src={nextPage.image}
                    alt={nextPage.title}
                    className="w-[200%] max-w-none h-full object-cover object-right -translate-x-1/2 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-black/60 pointer-events-none" />
                </div>

                {/* Current Page Content on Right */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{
                      rotateY: flipDirection === 'next' ? 40 : -40,
                      opacity: 0.6,
                      transformOrigin: 'left center',
                    }}
                    animate={{
                      rotateY: 0,
                      opacity: 1,
                      transformOrigin: 'left center',
                    }}
                    exit={{
                      rotateY: flipDirection === 'next' ? -85 : 85,
                      opacity: 0,
                      transformOrigin: 'left center',
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="absolute inset-0 w-full h-full shadow-2xl"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={page.image}
                      alt={page.title}
                      className="w-[200%] max-w-none h-full object-cover object-right -translate-x-1/2"
                    />

                    {/* Page Bend Lighting / Sheen Animation during Turn */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-black/50 pointer-events-none" />
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />

                    {/* Subtle Golden Edge Glint on the page margin */}
                    <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#FAF8F0] via-[#D4AF37] to-[#FAF8F0] opacity-80" />

                    {/* Right Page Sacred Arabic Verse Highlight */}
                    <div className="absolute bottom-4 right-4 left-4 z-20 text-right pointer-events-none">
                      <p className="font-arabic text-base sm:text-xl md:text-2xl text-[#D8BD74] drop-shadow-md leading-relaxed">
                        {page.verseArabic}
                      </p>
                      <span className="text-[9px] sm:text-[10px] font-sans text-[#FAF8F0]/70 uppercase tracking-wider block mt-1">
                        {page.subtitle}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Central Spine Gold Bookmark Ribbon with Tassel */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none">
                <div className="w-2.5 sm:w-3 h-16 sm:h-20 bg-gradient-to-b from-[#D4AF37] via-[#B89545] to-[#8C6E2D] shadow-lg rounded-b-sm border-x border-[#FAF8F0]/40" />
                <div className="w-1.5 h-3 bg-[#B89545] rounded-full shadow" />
                <div className="w-0.5 h-4 bg-[#D4AF37]" />
              </div>

              {/* Turning Leaf Shadow Effect Overlay */}
              {isFlipping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 bg-black/40 pointer-events-none z-30"
                />
              )}

              {/* "Click to Turn" Subtle Floating Pill (Hover Prompt) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-4 py-2 rounded-full bg-[#042318]/90 text-[#FAF8F0] border border-[#B89545] shadow-2xl backdrop-blur-md flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#D8BD74]" />
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

        {/* Carved Wooden Rehal Stand Graphic Base */}
        <div className="relative mx-auto -mt-3 w-4/5 flex justify-center items-center pointer-events-none z-10">
          <div className="w-full h-5 rounded-b-2xl bg-gradient-to-r from-[#4A3518] via-[#6B4F26] to-[#4A3518] border-t border-[#8C6E2D] shadow-xl flex items-center justify-around px-8">
            <span className="text-[10px] text-[#B89545]/60 font-serif">۞</span>
            <span className="text-[10px] text-[#B89545]/60 font-serif">۞</span>
            <span className="text-[10px] text-[#B89545]/60 font-serif">۞</span>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar Below the Book */}
      <div className="mt-5 flex items-center justify-between px-2 sm:px-4">
        {/* Previous Page Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            turnPrev()
          }}
          className="p-2.5 rounded-full bg-[#0B3024]/80 hover:bg-[#073B2A] text-[#FAF8F0] hover:text-[#D8BD74] border border-[#B89545]/40 shadow-md backdrop-blur-md transition-all active:scale-95"
          aria-label="Previous Page"
          title="Turn to previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Dots & Numbers */}
        <div className="flex items-center gap-2">
          {pages.map((p, idx) => (
            <button
              key={p.id}
              onClick={(e) => {
                e.stopPropagation()
                goToPage(idx)
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-cinzel transition-all ${
                idx === currentPage
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89545] text-[#073B2A] font-bold shadow-md scale-105'
                  : 'bg-[#0B3024]/60 hover:bg-[#0B3024] text-[#FAF8F0]/70 hover:text-[#FAF8F0] border border-[#B89545]/20'
              }`}
            >
              <span className="font-arabic">{p.arabicNumeral}</span>
              <span className="hidden sm:inline text-[10px]">Page {idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Play/Pause & Next Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsAutoPlaying(!isAutoPlaying)
            }}
            className="p-2 rounded-full bg-[#0B3024]/80 hover:bg-[#073B2A] text-[#FAF8F0]/80 hover:text-[#D8BD74] border border-[#B89545]/40 text-xs transition-colors"
            title={isAutoPlaying ? 'Pause page auto-turn' : 'Resume page auto-turn'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              turnNext()
            }}
            className="p-2.5 rounded-full bg-[#0B3024]/80 hover:bg-[#073B2A] text-[#FAF8F0] hover:text-[#D8BD74] border border-[#B89545]/40 shadow-md backdrop-blur-md transition-all active:scale-95"
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


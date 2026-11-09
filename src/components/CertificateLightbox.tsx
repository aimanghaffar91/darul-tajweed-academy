import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Award, CheckCircle2 } from 'lucide-react'

export interface CertificateData {
  id: string
  title: string
  arabicSubtitle: string
  institution: string
  session: string
  achievement: string
  dateAwarded: string
  image: string
}

interface CertificateLightboxProps {
  certificates: CertificateData[]
  currentIndex: number | null
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function CertificateLightbox({
  certificates,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: CertificateLightboxProps) {
  const [zoomLevel, setZoomLevel] = useState(1)

  // Reset zoom on index change or close
  useEffect(() => {
    setZoomLevel(1)
  }, [currentIndex, isOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || currentIndex === null) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % certificates.length
        onNavigate(nextIndex)
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length
        onNavigate(prevIndex)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, certificates.length, onClose, onNavigate])

  if (!isOpen || currentIndex === null) return null

  const cert = certificates[currentIndex]

  const handleNext = () => {
    onNavigate((currentIndex + 1) % certificates.length)
  }

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + certificates.length) % certificates.length)
  }

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5))
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 1))
  const resetZoom = () => setZoomLevel(1)

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none">
        {/* Dark overlay backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#042318]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#FAF8F0] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#B89545]/50 z-10 flex flex-col max-h-[95vh]"
        >
          {/* Top Bar with Controls */}
          <div className="bg-[#073B2A] text-[#FAF8F0] px-6 py-4 flex items-center justify-between border-b border-[#B89545]/30 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#B89545] text-[#073B2A] flex items-center justify-center font-bold text-xs">
                {currentIndex + 1}/{certificates.length}
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#FAF8F0] leading-tight">
                  {cert.title}
                </h4>
                <p className="text-[11px] text-[#D8BD74] font-sans">
                  {cert.institution}
                </p>
              </div>
            </div>

            {/* Controls (Zoom & Close) */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 bg-[#0B3024] p-1 rounded-xl border border-[#B89545]/30">
                <button
                  onClick={zoomIn}
                  className="p-1.5 rounded-lg text-[#FAF8F0] hover:text-[#D8BD74] hover:bg-[#073B2A] transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={zoomOut}
                  className="p-1.5 rounded-lg text-[#FAF8F0] hover:text-[#D8BD74] hover:bg-[#073B2A] transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={resetZoom}
                  className="p-1.5 rounded-lg text-[#FAF8F0] hover:text-[#D8BD74] hover:bg-[#073B2A] transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#0B3024] hover:bg-[#042318] text-[#FAF8F0] hover:text-[#D8BD74] border border-[#B89545]/40 transition-colors ml-2"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Image Viewer with Zoom Capability */}
          <div className="relative flex-1 bg-[#1A1A1A] p-4 sm:p-8 flex items-center justify-center overflow-auto min-h-[350px] sm:min-h-[480px]">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#073B2A]/80 hover:bg-[#073B2A] text-[#FAF8F0] hover:text-[#D8BD74] border border-[#B89545]/50 shadow-xl transition-all"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* High-Resolution Certificate Image */}
            <div className="relative overflow-hidden flex items-center justify-center max-w-full max-h-full">
              <motion.img
                key={cert.id}
                src={cert.image}
                alt={`${cert.title} - ${cert.institution}`}
                animate={{ scale: zoomLevel }}
                transition={{ duration: 0.2 }}
                className="max-h-[60vh] sm:max-h-[68vh] w-auto object-contain rounded-lg shadow-2xl border-2 border-[#B89545]/40"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#073B2A]/80 hover:bg-[#073B2A] text-[#FAF8F0] hover:text-[#D8BD74] border border-[#B89545]/50 shadow-xl transition-all"
              aria-label="Next Certificate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Metadata Card */}
          <div className="bg-[#FAF8F0] px-6 py-4 border-t border-[#B89545]/30 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#242820]">
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-[#B89545]" />
                <span>Session: <strong>{cert.session}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#073B2A]" />
                <span>Score: <strong className="text-[#073B2A]">{cert.achievement}</strong></span>
              </div>
            </div>

            <p className="text-[11px] text-[#242820]/70 italic font-serif">
              Original award document issued by Al-Huda International Welfare Foundation, Islamabad.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}


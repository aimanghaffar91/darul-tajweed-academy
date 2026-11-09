import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true)

  const defaultMessage = encodeURIComponent(
    'Assalamu Alaikum! I would like to enquire about online Quran classes at Darul Tajweed Academy.'
  )

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden sm:flex items-center gap-3 bg-[#073B2A] text-[#FAF8F0] px-4 py-2.5 rounded-2xl border border-[#B89545]/40 shadow-2xl backdrop-blur-md"
          >
            <div className="flex flex-col">
              <span className="text-[11px] font-cinzel font-semibold text-[#D8BD74]">
                Teacher Aiman Ghaffar
              </span>
              <span className="text-xs text-[#FAF8F0]/90 font-sans">
                Chat on WhatsApp (+92 318 5690089)
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#FAF8F0]/60 hover:text-[#FAF8F0] p-1"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Floating Button */}
      <div className="relative group">
        {/* Subtle breathing aura */}
        <div className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md group-hover:bg-[#25D366]/60 animate-pulse transition-all" />

        <a
          href={`https://wa.me/923185690089?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-2xl border-2 border-[#FAF8F0] transform group-hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Contact Darul Tajweed Academy on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  )
}


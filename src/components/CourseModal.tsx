import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, BookOpen, Clock, Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

export interface CourseData {
  id: string
  title: string
  arabicTitle: string
  tagline: string
  description: string
  image: string
  curriculum: string[]
  suitableFor: string
  format: string
}

interface CourseModalProps {
  course: CourseData | null
  isOpen: boolean
  onClose: () => void
  onEnquire: (courseTitle: string) => void
}

export default function CourseModal({ course, isOpen, onClose, onEnquire }: CourseModalProps) {
  if (!course) return null

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Assalamu Alaikum! I would like to enquire about the "${course.title}" program at Darul Tajweed Academy.`
    )
    window.open(`https://wa.me/923185690089?text=${text}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#042318]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#FAF8F0] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#B89545]/40 z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header Image with Gradient */}
            <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-[#073B2A]">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073B2A] via-[#073B2A]/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-[#FAF8F0] border border-white/20 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F0]">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-cinzel font-semibold bg-[#B89545] text-[#073B2A]">
                    <Sparkles className="w-3 h-3" />
                    ACADEMY PROGRAM
                  </span>
                  <span className="font-arabic text-xl sm:text-2xl text-[#D8BD74]">
                    {course.arabicTitle}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {course.title}
                </h3>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#242820]">
              <div>
                <h4 className="text-xs font-cinzel font-semibold uppercase tracking-wider text-[#B89545] mb-2">
                  Course Overview
                </h4>
                <p className="text-base text-[#242820]/90 leading-relaxed font-sans">
                  {course.description}
                </p>
              </div>

              {/* Curriculum Highlights */}
              <div className="p-5 rounded-2xl bg-[#EDE5D4]/60 border border-[#B89545]/30">
                <h4 className="text-xs font-cinzel font-semibold uppercase tracking-wider text-[#073B2A] mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#B89545]" />
                  What You Will Learn & Perfect
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#242820]/85">
                      <CheckCircle className="w-4 h-4 text-[#B89545] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Format & Suitable For */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#B89545]/20 shadow-sm flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#B89545] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-cinzel text-xs font-bold text-[#073B2A] uppercase">
                      Class Format
                    </h5>
                    <p className="text-xs text-[#242820]/75 mt-1 font-sans">{course.format}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#B89545]/20 shadow-sm flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#B89545] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-cinzel text-xs font-bold text-[#073B2A] uppercase">
                      Suitable Learners
                    </h5>
                    <p className="text-xs text-[#242820]/75 mt-1 font-sans">{course.suitableFor}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 bg-[#EDE5D4]/40 border-t border-[#B89545]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-[#FAF8F0] bg-[#073B2A] hover:bg-[#0B3024] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D8BD74]" />
                <span>WhatsApp Enquiry</span>
              </button>

              <button
                onClick={() => {
                  onClose()
                  onEnquire(course.title)
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#073B2A] bg-gradient-to-r from-[#D4AF37] to-[#B89545] hover:opacity-95 shadow-md transition-all"
              >
                <span>Enquire in Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}


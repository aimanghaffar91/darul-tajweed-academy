import { motion } from 'framer-motion'
import { Sparkles, MessageCircle, MessageSquare, Calendar, BookOpen, ArrowRight } from 'lucide-react'

interface GetStartedSectionProps {
  onContactClick?: () => void
}

const steps = [
  {
    step: '01',
    title: 'GET IN TOUCH',
    description: 'Contact us and tell us about your Quran learning goals.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'DISCUSS YOUR NEEDS',
    description: 'Share your current learning level and the course you are interested in.',
    icon: MessageSquare,
  },
  {
    step: '03',
    title: 'ARRANGE YOUR CLASSES',
    description: 'Discuss suitable class timings and learning arrangements.',
    icon: Calendar,
  },
  {
    step: '04',
    title: 'BEGIN LEARNING',
    description: 'Start your Quran learning journey with guidance and regular practice.',
    icon: BookOpen,
  },
]

export default function GetStartedSection({ onContactClick }: GetStartedSectionProps) {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="get-started" className="relative py-24 sm:py-32 bg-[#FAF8F0] text-[#242820] overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EDE5D4]/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE5D4] border border-[#B89545]/40 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B89545]" />
            <span className="text-xs font-cinzel font-semibold tracking-widest text-[#073B2A] uppercase">
              ENROLMENT ROADMAP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#073B2A] font-normal leading-tight"
          >
            Your Quran Learning Journey Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#242820]/80 font-sans font-normal max-w-2xl mx-auto"
          >
            Getting started is simple. Take the first step towards improving your Quran recitation and understanding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-12 bg-[#B89545]/40" />
            <span className="text-[#B89545] font-serif text-sm">۞</span>
            <span className="h-[1px] w-12 bg-[#B89545]/40" />
          </motion.div>
        </div>

        {/* 4-Step Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#B89545]/20 via-[#B89545] to-[#B89545]/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-[#B89545]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center"
                >
                  {/* Step Number Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#073B2A] to-[#0B3024] text-[#D8BD74] border-2 border-[#B89545] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-5">
                    <Icon className="w-6 h-6 text-[#D8BD74]" />
                  </div>

                  <span className="text-xs font-cinzel font-bold tracking-widest text-[#B89545] uppercase mb-1">
                    STEP {item.step}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#073B2A] mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#242820]/80 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Card (Refined Regal Emerald Card against light ivory) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#073B2A] via-[#0B3024] to-[#073B2A] text-[#FAF8F0] border-2 border-[#B89545]/40 shadow-2xl text-center max-w-3xl mx-auto flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-islamic-pattern opacity-25 pointer-events-none" />

          <p className="relative z-10 text-xs sm:text-sm font-cinzel tracking-widest text-[#D8BD74] uppercase mb-2">
            TAKE THE FIRST STEP TODAY
          </p>

          <h3 className="relative z-10 font-serif text-2xl sm:text-4xl font-normal text-[#FAF8F0] mb-6">
            Ready to Begin?
          </h3>

          <button
            onClick={() => {
              if (onContactClick) onContactClick()
              else scrollToContact()
            }}
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide bg-gradient-to-r from-[#D4AF37] via-[#B89545] to-[#967A38] text-[#073B2A] hover:text-[#042318] shadow-lg hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Contact the Academy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Are classes available online?',
    answer: 'Yes. Classes are conducted online, allowing students to learn from the comfort of their homes.',
  },
  {
    question: 'Can beginners join?',
    answer:
      "Yes. Beginners are welcome. Learning can start from the appropriate level according to each student's needs.",
  },
  {
    question: 'Do you teach Quran with Tajweed?',
    answer: 'Yes. Tajweed classes focus on correct pronunciation, Makharij and the application of Tajweed rules.',
  },
  {
    question: 'Are Tafseer classes available?',
    answer:
      'Yes. Tafseer classes focus on understanding Quranic verses, their meanings and the guidance they offer.',
  },
  {
    question: 'Can children and adults enrol?',
    answer:
      'Quran learning is valuable at every age. Please contact the academy to discuss suitable learning arrangements.',
  },
  {
    question: 'How can I enrol?',
    answer:
      'Simply contact us through WhatsApp or the contact form. We can discuss your learning goals and suitable class arrangements.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#F7F4EB] text-[#242820] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#EDE5D4]/70 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE5D4] border border-[#B89545]/40 mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#B89545]" />
            <span className="text-xs font-cinzel font-semibold tracking-widest text-[#073B2A] uppercase">
              CLEAR GUIDANCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#073B2A] font-normal leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-12 bg-[#B89545]/40" />
            <span className="text-[#B89545] font-serif text-sm">۞</span>
            <span className="h-[1px] w-12 bg-[#B89545]/40" />
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#B89545] shadow-lg'
                    : 'bg-white border-[#B89545]/20 hover:border-[#B89545]/50 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#073B2A] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? 'bg-[#073B2A] text-[#D8BD74]'
                        : 'bg-[#EDE5D4] text-[#073B2A]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#242820]/80 font-sans leading-relaxed border-t border-[#EDE5D4]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

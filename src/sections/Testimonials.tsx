import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Aisha Rahman',
    location: 'United Kingdom',
    avatar: 'AR',
    rating: 5,
    text: 'Darul Tajweed Academy has transformed my relationship with the Quran. My teacher is incredibly patient and knowledgeable. I went from barely reading Arabic to reciting with proper Tajweed in just 6 months.',
    course: 'Quran with Tajweed',
  },
  {
    name: 'Mohammed Khan',
    location: 'Canada',
    avatar: 'MK',
    rating: 5,
    text: 'The flexibility of scheduling classes around my work hours is amazing. The teachers are professional and the curriculum is well-structured. My children have also joined and they love their classes!',
    course: 'Quran Reading & Hifz',
  },
  {
    name: 'Fatima Ali',
    location: 'United States',
    avatar: 'FA',
    rating: 5,
    text: 'I enrolled in the Tafseer course and it has deepened my understanding of the Quran tremendously. The teachers explain complex concepts in an easy-to-understand manner. Highly recommended!',
    course: 'Quran Tafseer',
  },
  {
    name: 'Omar Hassan',
    location: 'Australia',
    avatar: 'OH',
    rating: 5,
    text: 'After trying several online Quran academies, Darul Tajweed stands out for its quality of teaching and professionalism. The progress tracking system keeps me motivated to continue learning.',
    course: 'Quran Translation',
  },
  {
    name: 'Zainab Siddiqui',
    location: 'UAE',
    avatar: 'ZS',
    rating: 5,
    text: 'My daughter has been learning Noorani Qaida here for 3 months. The teacher is so good with children - patient, encouraging, and makes learning fun. I am very happy with her progress.',
    course: 'Islamic Studies for Children',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-dt-cream py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedText
            text="What Our Students Say"
            className="font-display text-4xl lg:text-5xl text-dt-dark mb-4"
            as="h2"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dt-sage/70 text-lg max-w-2xl mx-auto"
          >
            Hear from our students and parents about their experience with Darul Tajweed Academy.
          </motion.p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-[32px] shadow-xl border border-dt-gold/10 overflow-hidden">
            <div className="absolute top-6 left-8">
              <Quote className="w-12 h-12 text-dt-gold/20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="p-10 lg:p-16"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-dt-gold fill-dt-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl text-dt-dark leading-relaxed mb-8 font-display">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-dt-sage flex items-center justify-center text-dt-gold font-display text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-display text-lg text-dt-dark">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-dt-sage/60">
                      {testimonials[current].location} &bull; {testimonials[current].course}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-dt-sage/10 flex items-center justify-center hover:bg-dt-sage/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-dt-sage" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-dt-sage/10 flex items-center justify-center hover:bg-dt-sage/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-dt-sage" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-dt-sage' : 'bg-dt-sage/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-dt-gold/10 hover:border-dt-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-dt-gold fill-dt-gold" />
                ))}
              </div>
              <p className="text-sm text-dt-sage/80 mb-4 line-clamp-3">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-dt-sage/10 flex items-center justify-center text-dt-sage text-xs font-display">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-dt-dark">{t.name}</div>
                  <div className="text-xs text-dt-sage/50">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

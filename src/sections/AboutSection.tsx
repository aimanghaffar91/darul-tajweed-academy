import { motion } from 'framer-motion'
import { Heart, Sparkles, BookOpen, Compass, Award } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#FAF8F0] text-[#242820] overflow-hidden">
      {/* Decorative background geometric accents */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDE5D4]/60 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EDE5D4]/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Tag */}
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
              ABOUT THE ACADEMY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#073B2A] font-normal leading-tight"
          >
            A Place to Learn, Understand and Love the Quran.
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

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Islamic Arch Framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Arch Frame Image */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden arch-frame border-2 border-[#B89545]/40 shadow-2xl bg-[#073B2A]">
                <img
                  src="/images/quran-pages.jpg"
                  alt="Holy Quran Pages"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042318]/85 via-transparent to-black/20" />

                {/* Floating Calligraphy Quote inside image */}
                <div className="absolute bottom-6 left-6 right-6 text-center text-[#FAF8F0]">
                  <p className="font-arabic text-2xl sm:text-3xl text-[#D8BD74] mb-1 drop-shadow">
                    وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                  </p>
                  <p className="text-xs font-serif italic text-[#FAF8F0]/80">
                    "And recite the Quran with measured recitation." — Surah Al-Muzzammil 73:4
                  </p>
                </div>
              </div>

              {/* Decorative Secondary Overlay Image */}
              {/* <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#FAF8F0] shadow-xl">
                <img
                  src="/images/mosque-interior.jpg"
                  alt="Islamic Mosque Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#073B2A]/25" />
              </div> */}

              {/* Experience Stamp */}
              <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-[#073B2A] text-[#FAF8F0] p-4 rounded-2xl border border-[#B89545]/50 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B89545]/20 flex items-center justify-center border border-[#B89545]">
                  <Award className="w-5 h-5 text-[#D8BD74]" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-[#D8BD74] leading-tight">2+ Years</div>
                  <div className="text-[10px] text-[#FAF8F0]/80 tracking-wider uppercase font-sans">
                    Teaching Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Academy Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Exact Introduction Paragraphs */}
            <div className="space-y-6 text-[#242820]/90 text-base sm:text-lg leading-relaxed font-sans">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#B89545] first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                At Darul Tajweed Academy, our aim is to make Quran learning meaningful, accessible and enjoyable. We believe that learning the Quran is not only about reading its words but also about understanding its message and applying its teachings in everyday life.
              </p>

              <p>
                Through online Quran classes, we help learners improve their recitation, develop a better understanding of the Quran and strengthen their connection with Allah.
              </p>

              <div className="p-5 rounded-2xl bg-[#EDE5D4]/70 border-l-4 border-[#B89545] text-[#073B2A] font-medium text-base sm:text-lg italic font-serif">
                "Every learner deserves patience, encouragement and guidance throughout their learning journey."
              </div>
            </div>

            {/* Core Values Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#B89545]/20">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#B89545]/20 shadow-sm">
                <div className="p-2.5 rounded-xl bg-[#073B2A] text-[#D8BD74]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#073B2A] uppercase tracking-wide">
                    Meaningful
                  </h4>
                  <p className="text-xs text-[#242820]/75 mt-0.5">
                    Beyond words into deep Quranic understanding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#B89545]/20 shadow-sm">
                <div className="p-2.5 rounded-xl bg-[#073B2A] text-[#D8BD74]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#073B2A] uppercase tracking-wide">
                    Accessible
                  </h4>
                  <p className="text-xs text-[#242820]/75 mt-0.5">
                    Comfortable online learning from your home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#B89545]/20 shadow-sm">
                <div className="p-2.5 rounded-xl bg-[#073B2A] text-[#D8BD74]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#073B2A] uppercase tracking-wide">
                    Enjoyable
                  </h4>
                  <p className="text-xs text-[#242820]/75 mt-0.5">
                    Nurtured with patience, care, and gentle guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Statement Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#073B2A] to-[#0B3024] text-[#FAF8F0] shadow-xl border border-[#B89545]/40 flex items-center gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#B89545]/20 border border-[#B89545] items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#D8BD74]" />
              </div>
              <div>
                <span className="text-[11px] font-cinzel tracking-widest text-[#D8BD74] uppercase block">
                  ACADEMY CREED
                </span>
                <p className="font-serif text-lg sm:text-xl text-[#FAF8F0] italic font-medium mt-0.5">
                  "Learning the Quran is a journey of the heart, mind and soul."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

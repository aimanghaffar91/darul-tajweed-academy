import { motion } from 'framer-motion'
import { Award, BookOpen, Heart, Sparkles, CheckCircle2, MessageCircle, ArrowRight, User } from 'lucide-react'

interface TeacherSectionProps {
  onContactTeacher?: () => void
}

export default function TeacherSection({ onContactTeacher }: TeacherSectionProps) {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="teacher" className="relative py-24 sm:py-32 bg-[#073B2A] text-[#FAF8F0] overflow-hidden">
      {/* Background Islamic Watermark & Ambient Glow */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#B89545]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#0B3024] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3024] border border-[#B89545]/40 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D8BD74]" />
            <span className="text-xs font-cinzel font-semibold tracking-widest text-[#FAF8F0] uppercase">
              FOUNDER & EDUCATOR
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F0] font-normal"
          >
            Meet Your Quran Teacher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base font-cinzel tracking-wider text-[#D8BD74]"
          >
            AIMAN GHAFFAR • ISLAMABAD, PAKISTAN
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Tasteful Teacher Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Islamic Arch Border */}
              <div className="relative p-3 rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-[#D4AF37] via-[#B89545] to-[#0B3024] shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                {/* Inner Arch Container */}
                <div className="relative w-full h-[460px] sm:h-[500px] rounded-t-[130px] rounded-b-2xl bg-gradient-to-b from-[#0B3024] via-[#073B2A] to-[#042318] overflow-hidden flex flex-col items-center justify-between p-8 border border-[#B89545]/40 text-center">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />

                  {/* Top Arch Calligraphy / Crest */}
                  <div className="relative z-10 pt-4">
                    <p className="font-arabic text-2xl text-[#D8BD74] drop-shadow">
                      اقْرَأْ بِاسْمِ رَبِّكَ
                    </p>
                    <span className="text-[10px] font-cinzel text-[#FAF8F0]/60 tracking-widest block mt-0.5">
                      "Read in the Name of your Lord"
                    </span>
                  </div>

                  {/* Tasteful Teacher Portrait Placeholder Frame */}
                  <div className="relative z-10 my-auto flex flex-col items-center">
                    <div className="relative group cursor-pointer">
                      <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-2 border-dashed border-[#B89545] p-2 flex items-center justify-center bg-[#073B2A]/80 backdrop-blur-sm shadow-inner transition-colors hover:border-[#D8BD74]">
                        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0B3024] to-[#042318] flex flex-col items-center justify-center text-[#D8BD74]">
                          <User className="w-12 h-12 text-[#B89545]/70" />
                          <span className="text-[11px] font-sans font-medium text-[#FAF8F0]/80 mt-1">
                            Aiman Ghaffar
                          </span>
                        </div>
                      </div>

                      {/* Floating verified badge */}
                      <div className="absolute -bottom-2 right-2 bg-[#B89545] text-[#073B2A] p-1.5 rounded-full shadow-lg">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <p className="text-xs text-[#FAF8F0]/80 font-sans italic">
                        Tasteful portrait placeholder — ready for teacher photograph
                      </p>
                    </div>
                  </div>

                  {/* Bottom Teacher Info Badge */}
                  <div className="relative z-10 w-full pt-4 border-t border-[#B89545]/30">
                    <h3 className="font-serif text-2xl font-bold text-[#FAF8F0] tracking-wide">
                      Aiman Ghaffar
                    </h3>
                    <p className="text-xs font-sans text-[#D8BD74] tracking-wider uppercase mt-1">
                      Online Quran & Tajweed Educator
                    </p>
                    <p className="text-[11px] text-[#FAF8F0]/60 font-sans mt-0.5">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Stars */}
              <div className="absolute -top-3 -right-3 text-xl text-[#D8BD74] select-none">۞</div>
              <div className="absolute -top-3 -left-3 text-xl text-[#D8BD74] select-none">۞</div>
            </div>
          </motion.div>

          {/* Right Column: Personal Introduction & 3 Qualities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Arabic Greeting */}
            <div className="mb-4">
              <span className="text-sm font-arabic text-[#D8BD74] text-right block sm:inline">
                السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
              </span>
            </div>

            {/* Exact Teacher Introduction */}
            <div className="space-y-4 text-[#FAF8F0]/90 text-base sm:text-lg leading-relaxed font-sans">
              <p className="text-xl font-serif text-[#D8BD74] italic">
                "Assalamu Alaikum! I am Aiman Ghaffar, an online Quran teacher with two years of teaching experience."
              </p>

              <p>
                I teach Quran with Tajweed and Tafseer, helping learners improve their recitation, understand Quranic teachings and develop a stronger connection with the Holy Quran.
              </p>

              <p>
                I believe every student learns differently. My approach is based on patience, clear explanations and individual attention so that students can learn comfortably and progress at their own pace.
              </p>

              <p className="font-medium text-[#FAF8F0]">
                My goal is to make Quran learning a meaningful part of everyday life.
              </p>
            </div>

            {/* Three Highlighted Qualities */}
            <div className="mt-8 space-y-4">
              <h4 className="font-cinzel text-xs font-semibold tracking-widest text-[#D8BD74] uppercase">
                DISTINGUISHED QUALITIES & EXPERTISE
              </h4>

              <div className="grid grid-cols-1 gap-3.5">
                {/* Quality 1 */}
                <div className="p-4 rounded-xl bg-[#0B3024]/80 border border-[#B89545]/30 hover:border-[#D8BD74] transition-all flex items-start gap-3.5 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-[#073B2A] text-[#D8BD74] border border-[#B89545]/40 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base sm:text-lg text-[#FAF8F0] font-semibold">
                      Two Years of Online Teaching Experience
                    </h5>
                    <p className="text-xs sm:text-sm text-[#FAF8F0]/75 mt-0.5 font-sans leading-relaxed">
                      Extensive experience guiding international students of varying ages and backgrounds comfortably across digital platforms.
                    </p>
                  </div>
                </div>

                {/* Quality 2 */}
                <div className="p-4 rounded-xl bg-[#0B3024]/80 border border-[#B89545]/30 hover:border-[#D8BD74] transition-all flex items-start gap-3.5 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-[#073B2A] text-[#D8BD74] border border-[#B89545]/40 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base sm:text-lg text-[#FAF8F0] font-semibold">
                      Knowledge of Quran Recitation with Tajweed
                    </h5>
                    <p className="text-xs sm:text-sm text-[#FAF8F0]/75 mt-0.5 font-sans leading-relaxed">
                      Rigorous command of correct Makharij (points of articulation), Sifaat, and melodic rules of Tajweed.
                    </p>
                  </div>
                </div>

                {/* Quality 3 */}
                <div className="p-4 rounded-xl bg-[#0B3024]/80 border border-[#B89545]/30 hover:border-[#D8BD74] transition-all flex items-start gap-3.5 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-[#073B2A] text-[#D8BD74] border border-[#B89545]/40 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base sm:text-lg text-[#FAF8F0] font-semibold">
                      Academic Learning in Quran Understanding & Asma-ul-Husna
                    </h5>
                    <p className="text-xs sm:text-sm text-[#FAF8F0]/75 mt-0.5 font-sans leading-relaxed">
                      Graduated with high distinction from Al-Huda International Welfare Foundation in Fahm al-Quran (95.43%) and Fiqh Asma-ul-Husna (93.75%).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (onContactTeacher) onContactTeacher()
                  else scrollToContact()
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium text-sm tracking-wide bg-gradient-to-r from-[#D4AF37] via-[#B89545] to-[#967A38] text-[#073B2A] hover:text-[#042318] shadow-md hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Study With Teacher Aiman</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923185690089?text=Assalamu%20Alaikum%20Teacher%20Aiman!%20I%20would%20like%20to%20discuss%20online%20Quran%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-[#FAF8F0] hover:text-[#D8BD74] bg-[#0B3024] hover:bg-[#0E523B] border border-[#B89545]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D8BD74]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


import { motion } from 'framer-motion'
import { Award, BookOpen, Sparkles, CheckCircle2, MessageCircle, ArrowRight, User } from 'lucide-react'

interface TeacherSectionProps {
  onContactTeacher?: () => void
}

export default function TeacherSection({ onContactTeacher }: TeacherSectionProps) {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="teacher" className="relative py-24 sm:py-32 bg-[#FAF8F0] text-[#242820] overflow-hidden">
      {/* Background Subtle Watermark & Warm Lighting */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#EDE5D4]/70 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#EDE5D4]/70 rounded-full blur-3xl -z-10" />

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
              FOUNDER & EDUCATOR
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#073B2A] font-normal leading-tight"
          >
            Meet Your Quran Teacher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base font-cinzel tracking-wider text-[#B89545] font-semibold"
          >
            AIMAN GHAFFAR • ISLAMABAD, PAKISTAN
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Pointed Islamic Arch Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Islamic Arch Border */}
              <div className="relative p-3 rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-[#D4AF37] via-[#B89545] to-[#073B2A] shadow-2xl">
                {/* Inner Arch Container */}
                <div className="relative w-full h-[470px] sm:h-[510px] rounded-t-[130px] rounded-b-2xl bg-gradient-to-b from-[#0B3024] via-[#073B2A] to-[#042318] overflow-hidden flex flex-col items-center justify-between p-8 border border-[#B89545]/40 text-center text-[#FAF8F0]">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />

                  {/* Top Arch Calligraphy / Crest */}
                  <div className="relative z-10 pt-4">
                    <p className="font-arabic text-2xl sm:text-3xl text-[#D8BD74] drop-shadow">
                      اقْرَأْ بِاسْمِ رَبِّكَ
                    </p>
                    <span className="text-[10px] font-cinzel text-[#FAF8F0]/70 tracking-widest block mt-1 uppercase">
                      "Read in the Name of your Lord"
                    </span>
                  </div>

                  {/* Tasteful Teacher Portrait Placeholder Frame */}
                  <div className="relative z-10 my-auto flex flex-col items-center">
                    <div className="relative group cursor-pointer">
                      <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-2 border-dashed border-[#B89545] p-2 flex items-center justify-center bg-[#073B2A]/90 backdrop-blur-sm shadow-inner transition-colors hover:border-[#D8BD74]">
                        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0B3024] to-[#042318] flex flex-col items-center justify-center text-[#D8BD74]">
                          <User className="w-12 h-12 text-[#B89545]/70" />
                          <span className="text-[11px] font-sans font-medium text-[#FAF8F0]/85 mt-1">
                            Aiman Ghaffar
                          </span>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      <div className="absolute -bottom-1 right-2 bg-[#B89545] text-[#073B2A] p-1.5 rounded-full shadow-lg border border-[#FAF8F0]">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-4 px-4 py-1.5 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm">
                      <p className="text-[11px] text-[#FAF8F0]/80 font-sans italic">
                        Teacher photograph placeholder — ready for your photo
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
                    <p className="text-[11px] text-[#FAF8F0]/70 font-sans mt-0.5">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Stars */}
              <div className="absolute -top-3 -right-3 text-xl text-[#B89545] select-none">۞</div>
              <div className="absolute -top-3 -left-3 text-xl text-[#B89545] select-none">۞</div>
            </div>
          </motion.div>

          {/* Right Column: Personal Introduction & 3 Qualities on Crisp Light Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Arabic Greeting */}
            <div className="mb-4">
              <span className="text-base sm:text-lg font-arabic text-[#073B2A] font-semibold text-right block sm:inline">
                السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
              </span>
            </div>

            {/* Exact Teacher Introduction */}
            <div className="space-y-4 text-[#242820]/90 text-base sm:text-lg leading-relaxed font-sans">
              <p className="text-xl sm:text-2xl font-serif text-[#073B2A] italic font-medium">
                "Assalamu Alaikum! I am Aiman Ghaffar, an online Quran teacher with two years of teaching experience."
              </p>

              <p>
                I teach Quran with Tajweed and Tafseer, helping learners improve their recitation, understand Quranic teachings and develop a stronger connection with the Holy Quran.
              </p>

              <p>
                I believe every student learns differently. My approach is based on patience, clear explanations and individual attention so that students can learn comfortably and progress at their own pace.
              </p>

              <div className="p-4 rounded-xl bg-[#EDE5D4]/60 border-l-4 border-[#B89545] font-medium text-[#073B2A]">
                My goal is to make Quran learning a meaningful part of everyday life.
              </div>
            </div>

            {/* Three Highlighted Qualities on Crisp Cards */}
            <div className="mt-8 space-y-3.5">
              <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#B89545] uppercase">
                DISTINGUISHED QUALITIES & EXPERTISE
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {/* Quality 1 */}
                <div className="p-4 rounded-2xl bg-white border border-[#B89545]/25 hover:border-[#B89545] transition-all flex items-start gap-4 shadow-sm hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-[#073B2A] text-[#D8BD74] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base sm:text-lg text-[#073B2A] font-bold">
                      Two Years of Online Teaching Experience
                    </h5>
                    <p className="text-xs sm:text-sm text-[#242820]/80 mt-0.5 font-sans leading-relaxed">
                      Extensive experience guiding international students of varying ages and backgrounds comfortably across digital platforms.
                    </p>
                  </div>
                </div>

                {/* Quality 2 */}
                <div className="p-4 rounded-2xl bg-white border border-[#B89545]/25 hover:border-[#B89545] transition-all flex items-start gap-4 shadow-sm hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-[#073B2A] text-[#D8BD74] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base sm:text-lg text-[#073B2A] font-bold">
                      Knowledge of Quran Recitation with Tajweed
                    </h5>
                    <p className="text-xs sm:text-sm text-[#242820]/80 mt-0.5 font-sans leading-relaxed">
                      Rigorous command of correct Makharij (points of articulation), Sifaat, and melodic rules of Tajweed.
                    </p>
                  </div>
                </div>

                {/* Quality 3 */}
                <div className="p-4 rounded-2xl bg-white border border-[#B89545]/25 hover:border-[#B89545] transition-all flex items-start gap-4 shadow-sm hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-[#073B2A] text-[#D8BD74] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base sm:text-lg text-[#073B2A] font-bold">
                      Academic Learning in Quran Understanding & Asma-ul-Husna
                    </h5>
                    <p className="text-xs sm:text-sm text-[#242820]/80 mt-0.5 font-sans leading-relaxed">
                      Graduated with high distinction from Al-Huda International Welfare Foundation in Fahm al-Quran (95.43%) and Fiqh Asma-ul-Husna (93.75%).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (onContactTeacher) onContactTeacher()
                  else scrollToContact()
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide bg-gradient-to-r from-[#D4AF37] via-[#B89545] to-[#967A38] text-[#073B2A] hover:text-[#042318] shadow-md hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Study With Teacher Aiman</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923185690089?text=Assalamu%20Alaikum%20Teacher%20Aiman!%20I%20would%20like%20to%20discuss%20online%20Quran%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-[#073B2A] hover:text-[#FAF8F0] bg-[#EDE5D4] hover:bg-[#073B2A] border border-[#B89545]/40 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Sparkles, ZoomIn, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react'
import CertificateLightbox, { type CertificateData } from '../components/CertificateLightbox'

const certificates: CertificateData[] = [
  {
    id: 'fahm-al-quran',
    title: 'Fahm al-Quran',
    arabicSubtitle: 'فَهْمُ الْقُرْآنِ الْكَرِيم',
    institution: 'Al-Huda International Welfare Foundation, Islamabad, Pakistan',
    session: 'January 2019 – December 2019',
    achievement: '95.43%',
    dateAwarded: 'December 21, 2021',
    image: '/images/certificate-fahm-ul-quran.jpg',
  },
  {
    id: 'asma-ul-husna',
    title: 'Fiqh Asma i Allah i Al-Husna',
    arabicSubtitle: 'فِقْهُ أَسْمَاءِ اللَّهِ الْحُسْنَى',
    institution: 'Al-Huda International Welfare Foundation, Islamabad, Pakistan',
    session: 'September 2021 – August 2022',
    achievement: '93.75%',
    dateAwarded: 'September 10, 2022',
    image: '/images/certificate-asma-ul-husna.jpg',
  },
]

export default function QualificationsSection() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedCertIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="qualifications" className="relative py-24 sm:py-32 bg-[#FAF8F0] overflow-hidden">
      {/* Background Decorative Watermark */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#EDE5D4]/70 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE5D4] border border-[#B89545]/30 mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89545]" />
            <span className="text-xs font-cinzel font-semibold tracking-widest text-[#073B2A] uppercase">
              CREDENTIALS & HONORS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#073B2A] font-normal leading-tight"
          >
            Continuous Learning, Deeper Understanding
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#242820]/80 font-sans font-normal max-w-2xl mx-auto"
          >
            My learning journey includes formal Quranic studies through Al-Huda International Welfare Foundation. These courses have helped strengthen my understanding of the Quran and Islamic teachings.
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

        {/* Certificates Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative rounded-3xl bg-white border-2 border-[#B89545]/30 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Framed Image View */}
              <div
                onClick={() => openLightbox(index)}
                className="relative p-6 sm:p-8 bg-gradient-to-b from-[#EDE5D4]/60 to-white cursor-pointer overflow-hidden"
              >
                {/* Certificate Frame with Gold Border & Corner Accents */}
                <div className="relative rounded-xl overflow-hidden border-2 border-[#B89545]/60 shadow-md bg-white group-hover:border-[#D4AF37] transition-all">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Original Certificate`}
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Click to Zoom Hover Overlay */}
                  <div className="absolute inset-0 bg-[#073B2A]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#FAF8F0] gap-2">
                    <div className="p-3 rounded-full bg-[#B89545] text-[#073B2A] shadow-xl">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-cinzel font-semibold tracking-wider text-[#FAF8F0]">
                      Click to View Original Certificate
                    </span>
                  </div>

                  {/* Achievement Ribbon Overlay */}
                  <div className="absolute top-3 right-3 px-3.5 py-1.5 rounded-full bg-[#073B2A] text-[#D8BD74] border border-[#B89545] shadow-lg flex items-center gap-1.5 font-cinzel font-bold text-xs">
                    <Award className="w-3.5 h-3.5 text-[#D8BD74]" />
                    <span>Achievement: {cert.achievement}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Details Card */}
              <div className="p-6 sm:p-8 border-t border-[#B89545]/20 bg-white flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-cinzel font-semibold tracking-widest text-[#B89545] uppercase">
                      CERTIFICATE COURSE
                    </span>
                    <span className="font-arabic text-sm text-[#073B2A]">
                      {cert.arabicSubtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#073B2A] leading-tight">
                    {cert.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-sm text-[#242820]/80 font-sans">
                    <div className="flex items-start gap-2">
                      <span className="text-[#B89545] font-bold">Institution:</span>
                      <span>{cert.institution}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[#B89545] font-bold">Session:</span>
                      <span>{cert.session}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[#B89545] font-bold">Result:</span>
                      <span className="font-semibold text-[#073B2A]">{cert.achievement} Distinction</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="pt-4 border-t border-[#EDE5D4] flex items-center justify-between">
                  <button
                    onClick={() => openLightbox(index)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#073B2A] hover:text-[#B89545] transition-colors"
                  >
                    <ZoomIn className="w-4 h-4 text-[#B89545]" />
                    <span>Enlarge & Inspect Certificate</span>
                  </button>

                  <span className="text-xs font-serif text-[#242820]/60 italic">
                    Original Verified Asset
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Professional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#EDE5D4]/70 border border-[#B89545]/30 text-xs sm:text-sm text-[#073B2A] font-sans font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#B89545]" />
            <span>Certificates awarded by Al-Huda International Welfare Foundation.</span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Lightbox */}
      <CertificateLightbox
        certificates={certificates}
        currentIndex={selectedCertIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(index) => setSelectedCertIndex(index)}
      />
    </section>
  )
}

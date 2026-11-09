import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Sparkles, ArrowRight, Check, Eye, Clock, Users, GraduationCap, Compass, Heart } from 'lucide-react'
import CourseModal, { type CourseData } from '../components/CourseModal'

interface CoursesSectionProps {
  onSelectCourseForContact?: (courseTitle: string) => void
}

interface ExtendedCourseData extends CourseData {
  badge: string
  level: string
  icon: typeof BookOpen
}

const courses: ExtendedCourseData[] = [
  {
    id: 'tajweed',
    title: 'Quran with Tajweed',
    arabicTitle: 'تَجْوِيدُ الْقُرْآن',
    tagline: 'Makharij, Pronunciation Mastery & Melodic Recitation',
    description:
      'Learn to recite the Holy Quran correctly with proper pronunciation, Makharij and Tajweed rules. Build confidence in your recitation through guided practice.',
    image: '/images/tajweed-art.jpg',
    badge: 'RECITATION MASTERY',
    level: 'Beginner to Advanced',
    icon: BookOpen,
    curriculum: [
      'Correct points of articulation (Makharij al-Huroof)',
      'Characteristics of letters (Sifaat al-Huroof)',
      'Rules of Noon Saakin and Tanween (Idgham, Ikhfa, Iqlab, Izhar)',
      'Rules of Meem Saakin and Madd (Elongation)',
      'Stop and pause signs (Waqf) for respectful recitation',
      'One-on-one personalized correction & guided practice',
    ],
    suitableFor: 'Beginners seeking fundamentals to advanced reciters polishing their Tajweed.',
    format: '1-on-1 private online sessions with dedicated correction.',
  },
  {
    id: 'tafseer',
    title: 'Quran Tafseer',
    arabicTitle: 'تَفْسِيرُ الْقُرْآن',
    tagline: 'Deep Meanings, Contextual Wisdom & Divine Guidance',
    description:
      'Go beyond recitation and explore the meanings and explanations of Quranic verses. Develop a deeper understanding of Quranic messages, guidance and lessons.',
    image: '/images/quran-pages.jpg',
    badge: 'VERSE COMPREHENSION',
    level: 'All Dedicated Learners',
    icon: Compass,
    curriculum: [
      'Verse-by-verse comprehensive explanation',
      'Causes and historical occasions of revelation (Asbab al-Nuzul)',
      'Linguistic nuances and thematic connection between Surahs',
      'Extraction of timeless moral and legal rulings',
      'Spiritual reflections for modern daily life',
      'Interactive discussions and contextual Q&A',
    ],
    suitableFor: 'Learners seeking intellectual clarity and spiritual depth in the Quran.',
    format: 'Structured modules with interactive discussions.',
  },
  {
    id: 'hadith',
    title: 'Hadith & Sunnah Studies',
    arabicTitle: 'حَدِيث وَسُنَّة',
    tagline: 'Living the Prophetic Way • Manners & Daily Character',
    description:
      'Learn about the teachings and practices of Prophet Muhammad ﷺ through authentic Hadith. Explore Hadith, their meanings and the valuable lessons they offer for everyday life. Develop a better understanding of the Sunnah and learn how to apply its guidance in daily actions, manners and character.',
    image: '/images/calligraphy.jpg',
    badge: 'PROPHETIC CHARACTER',
    level: 'Youth & Adults',
    icon: Heart,
    curriculum: [
      'Study of authentic Hadith collections (Riyad al-Salihin & Forty Hadith)',
      'Core manners (Adab) and ethical character (Akhlaq) of the Prophet ﷺ',
      'Sunnah in worship, family life, speech, and dealings',
      'Understanding Hadith in its authentic context',
      'Daily practical Sunnah habits and remembrance (Adhkar)',
      'Developing character inspired by the Prophet Muhammad ﷺ',
    ],
    suitableFor: 'Anyone wanting to embody the Sunnah in their daily conduct and character.',
    format: 'Guided thematic lessons with practical weekly implementation exercises.',
  },
  {
    id: 'fahm-ul-quran',
    title: 'Fahm-ul-Quran',
    arabicTitle: 'فَهْمُ الْقُرْآن',
    tagline: 'Understanding Quranic Language, Themes & Core Messages',
    description:
      'Explore the meanings and teachings of the Holy Quran and develop a better understanding of its guidance for everyday life.',
    image: '/images/student-reading.jpg',
    badge: 'DIRECT UNDERSTANDING',
    level: 'Intermediate & Advanced',
    icon: GraduationCap,
    curriculum: [
      'Frequent Quranic vocabulary and key root words',
      'Understanding grammatical structures of common verses',
      'Thematic overview of the 30 Juz and major Quranic narratives',
      'Developing direct comprehension during prayer (Salah)',
      'Transformative life principles directly from the Quran',
      'Practical tools to sustain daily contemplation (Tadabbur)',
    ],
    suitableFor: 'Students eager to understand what they recite directly without relying solely on translations.',
    format: 'Systematic curriculum designed around gradual comprehension.',
  },
  {
    id: 'asma-ul-husna',
    title: 'Asma-ul-Husna',
    arabicTitle: 'أَسْمَاءُ اللَّهِ الْحُسْنَى',
    tagline: 'Knowing Allah Through His Most Beautiful Names',
    description:
      'Learn about the Beautiful Names of Allah, their meanings and the lessons they teach us about knowing and remembering our Creator.',
    image: '/images/mosque-interior.jpg',
    badge: 'DIVINE NAMES & ATTRIBUTES',
    level: 'Open to All Seekers',
    icon: Sparkles,
    curriculum: [
      'In-depth study of the 99 Beautiful Names of Allah',
      'Linguistic origins and theological distinctions between Divine Attributes',
      'How each Name manifests in the creation and in our personal lives',
      'Calling upon Allah through His Names in personal Du’a and worship',
      'Cultivating inner peace, trust (Tawakkul), and awe (Khushu)',
      'Reflections guided by classical Islamic scholarship',
    ],
    suitableFor: 'Seekers wanting to deepen their personal relationship and love for Allah.',
    format: 'Spiritual and scholarly study with reflection assignments.',
  },
]

export default function CoursesSection({ onSelectCourseForContact }: CoursesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleLearnMore = (course: CourseData) => {
    setSelectedCourse(course)
    setModalOpen(true)
  }

  const handleEnquire = (courseTitle: string) => {
    if (onSelectCourseForContact) {
      onSelectCourseForContact(courseTitle)
    } else {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="courses" className="relative py-24 sm:py-32 bg-[#F7F4EB] text-[#242820] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#EDE5D4]/70 rounded-full blur-3xl -z-10" />

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
              ONLINE CURRICULUM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#073B2A] font-normal leading-tight"
          >
            Explore Our Quran Learning Programs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#242820]/80 font-sans font-normal max-w-2xl mx-auto"
          >
            Whether you are beginning your Quran learning journey or looking to improve your recitation and understanding, explore a learning program that meets your needs.
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

        {/* 5 Bespoke Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const isFullWidthMobile = idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`group relative rounded-3xl bg-white border border-[#B89545]/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${isFullWidthMobile}`}
              >
                {/* Top Image Container with zoom interaction */}
                <div className="relative h-60 w-full overflow-hidden bg-[#073B2A]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042318]/95 via-[#073B2A]/40 to-transparent" />

                  {/* Top Bar on Image: Badge & Arabic Name */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#042318]/80 backdrop-blur-md border border-[#B89545]/40 text-[10px] font-cinzel font-bold text-[#D8BD74] uppercase tracking-wider">
                      {course.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#042318]/80 backdrop-blur-md border border-[#B89545]/40 font-arabic text-xs text-[#D8BD74]">
                      {course.arabicTitle}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Title & Level */}
                  <div className="absolute bottom-4 left-5 right-5 text-[#FAF8F0]">
                    <div className="flex items-center gap-2 text-[11px] text-[#D8BD74] font-cinzel tracking-wider uppercase mb-1">
                      <Clock className="w-3 h-3 text-[#D8BD74]" />
                      <span>{course.level}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F0] group-hover:text-[#D8BD74] transition-colors leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Animated Gold Accent Line under Image */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B89545]/40 to-transparent group-hover:via-[#B89545] transition-all" />

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-[#242820]/80 font-sans leading-relaxed">
                      {course.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 pt-4 border-t border-[#EDE5D4] space-y-2">
                      {course.curriculum.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#242820]/80">
                          <Check className="w-3.5 h-3.5 text-[#B89545] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-[#EDE5D4] flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleLearnMore(course)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073B2A] hover:text-[#B89545] transition-colors py-2 font-cinzel uppercase tracking-wider"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#B89545]" />
                      <span>Learn More</span>
                    </button>

                    <button
                      onClick={() => handleEnquire(course.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide bg-[#073B2A] text-[#FAF8F0] hover:bg-[#B89545] hover:text-[#073B2A] transition-all duration-300 shadow-sm"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Interactive Learn More Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEnquire={handleEnquire}
      />
    </section>
  )
}

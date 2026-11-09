import { motion } from 'framer-motion'
import { Link } from 'react-router'
import {
  BookOpen,
  Star,
  Languages,
  ScrollText,
  BookMarked,
  Heart,
  GraduationCap,
  Baby,
  ArrowRight,
  Clock,
  Users,
  Video,
} from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const courses = [
  {
    slug: 'quran-reading',
    title: 'Quran Reading',
    subtitle: 'Learn to read the Quran fluently',
    description:
      'Start your journey with the Quran by learning proper reading techniques. This course covers Arabic letters, joining rules, and basic reading fluency.',
    icon: BookOpen,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    duration: '3-6 months',
    students: '2,500+',
    format: 'One-on-One',
    topics: ['Arabic Alphabet', 'Letter Recognition', 'Joining Letters', 'Basic Reading', 'Fluency Practice'],
  },
  {
    slug: 'quran-tajweed',
    title: 'Quran with Tajweed',
    subtitle: 'Master the art of Quranic recitation',
    description:
      'Learn the rules of Tajweed to recite the Quran beautifully and correctly. Understand Makharij, Sifaat, and all essential Tajweed rules.',
    icon: Star,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    duration: '6-12 months',
    students: '3,200+',
    format: 'One-on-One',
    topics: ['Makharij', 'Sifaat', 'Noon Saakin', 'Meem Saakin', 'Madd Rules', 'Practical Recitation'],
  },
  {
    slug: 'quran-translation',
    title: 'Quran Translation',
    subtitle: 'Understand the meaning of the Quran',
    description:
      'Gain a deep understanding of Quranic verses through word-by-word translation and context analysis.',
    icon: Languages,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    duration: '12+ months',
    students: '1,800+',
    format: 'One-on-One',
    topics: ['Word-by-word meaning', 'Vocabulary building', 'Context understanding', 'Reflection exercises'],
  },
  {
    slug: 'quran-tafseer',
    title: 'Quran Tafseer',
    subtitle: 'Deep dive into Quranic explanations',
    description:
      'Study the detailed explanation and context of Quranic verses with renowned Tafseer texts.',
    icon: ScrollText,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    duration: 'Ongoing',
    students: '1,200+',
    format: 'One-on-One',
    topics: ['Surah explanations', 'Context of revelation', 'Life lessons', 'Contemporary applications'],
  },
  {
    slug: 'hadith-sunnah',
    title: 'Hadith & Sunnah',
    subtitle: 'Study the traditions of the Prophet',
    description:
      'Learn about the sayings and practices of Prophet Muhammad (PBUH) and their relevance to daily life.',
    icon: BookMarked,
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    duration: '6-12 months',
    students: '900+',
    format: 'One-on-One',
    topics: ['Sciences of Hadith', 'Authentic collections', 'Character building', 'Daily implementation'],
  },
  {
    slug: 'hifz-program',
    title: 'Hifz Program',
    subtitle: 'Memorize the entire Quran',
    description:
      'A structured memorization program with daily revision, progress tracking, and parent reports.',
    icon: Heart,
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    duration: '2-4 years',
    students: '800+',
    format: 'One-on-One',
    topics: ['Memorization plans', 'Daily revision', 'Progress tracking', 'Parent reports', 'Sanad certification'],
  },
  {
    slug: 'islamic-children',
    title: 'Islamic Studies for Children',
    subtitle: 'Fun learning for young Muslims',
    description:
      'Engaging Islamic education tailored for children including Quran, Duas, Islamic manners, and stories.',
    icon: Baby,
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    duration: 'Ongoing',
    students: '1,500+',
    format: 'One-on-One or Group',
    topics: ['Quran for kids', 'Islamic manners', 'Prophet stories', 'Daily Duas', 'Islamic values'],
  },
  {
    slug: 'noorani-qaida',
    title: 'Noorani Qaida',
    subtitle: 'Build a strong foundation',
    description:
      'Master Arabic letters and sounds with the classic Noorani Qaida method - perfect for absolute beginners.',
    icon: GraduationCap,
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    duration: '1-3 months',
    students: '2,000+',
    format: 'One-on-One',
    topics: ['Arabic letters', 'Vowel marks', 'Letter joining', 'Word formation', 'Basic reading'],
  },
]

export default function Courses() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-dt-sage py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="courses-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#D4C5A9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#courses-pattern)" />
          </svg>
        </div>

        <div className="section-container relative z-10">
          <AnimatedText
            text="Our Courses"
            className="font-display text-5xl lg:text-6xl text-dt-gold mb-4 text-center"
            as="h1"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dt-gold/60 text-lg max-w-2xl mx-auto text-center"
          >
            Explore our comprehensive range of Islamic courses designed for learners of all ages and
            levels.
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-dt-cream py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/courses/${course.slug}`}
                  className={`block bg-white rounded-[32px] p-8 border ${course.borderColor} card-hover group`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <course.icon className={`w-8 h-8 ${course.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-dt-dark mb-1 group-hover:text-dt-sage transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-dt-sage/60 mb-3">{course.subtitle}</p>
                      <p className="text-dt-sage/70 text-sm leading-relaxed mb-4">
                        {course.description}
                      </p>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="flex items-center gap-1 text-xs text-dt-sage/60">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-dt-sage/60">
                          <Users className="w-3.5 h-3.5" />
                          {course.students}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-dt-sage/60">
                          <Video className="w-3.5 h-3.5" />
                          {course.format}
                        </span>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 rounded-full bg-dt-sage/5 text-dt-sage/70 text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-dt-gold/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm text-dt-sage font-medium group-hover:gap-2 transition-all">
                      View Course Details
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { ArrowRight, BookOpen, Star, Languages, ScrollText, Heart, GraduationCap, Baby, BookMarked } from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const courses = [
  {
    slug: 'quran-reading',
    title: 'Quran Reading',
    description: 'Learn to read the Quran with proper pronunciation from scratch.',
    icon: BookOpen,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    slug: 'quran-tajweed',
    title: 'Quran with Tajweed',
    description: 'Master the rules of Tajweed for beautiful Quranic recitation.',
    icon: Star,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    slug: 'quran-translation',
    title: 'Quran Translation',
    description: 'Understand the meaning of Quranic verses in your language.',
    icon: Languages,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    slug: 'quran-tafseer',
    title: 'Quran Tafseer',
    description: 'Deep dive into the detailed explanation and context of the Quran.',
    icon: ScrollText,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    slug: 'hadith-sunnah',
    title: 'Hadith & Sunnah',
    description: 'Study the sayings and practices of Prophet Muhammad (PBUH).',
    icon: BookMarked,
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    slug: 'hifz-program',
    title: 'Hifz Program',
    description: 'Memorize the Quran with our structured memorization plan.',
    icon: Heart,
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    slug: 'islamic-children',
    title: 'Islamic Studies for Children',
    description: 'Fun and engaging Islamic education tailored for young learners.',
    icon: Baby,
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    slug: 'noorani-qaida',
    title: 'Noorani Qaida',
    description: 'Build a strong foundation in Arabic letters and sounds.',
    icon: GraduationCap,
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
]

export default function CoursesPreview() {
  return (
    <section className="bg-dt-sage py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Courses"
            className="font-display text-4xl lg:text-5xl text-dt-gold mb-4"
            as="h2"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dt-gold/60 text-lg max-w-2xl mx-auto mb-8"
          >
            Choose from our comprehensive range of Islamic courses designed for all levels and ages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-dt-gold hover:text-white transition-colors font-medium"
            >
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="block bg-white rounded-[24px] p-6 h-full card-hover group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <course.icon className={`w-7 h-7 ${course.iconColor}`} />
                </div>
                <h3 className="font-display text-lg text-dt-dark mb-2 group-hover:text-dt-sage transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-dt-sage/60 leading-relaxed mb-4">
                  {course.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-dt-sage font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

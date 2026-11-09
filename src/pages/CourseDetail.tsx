import { useParams, Link } from 'react-router'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  Users,
  Video,
  Calendar,
  CheckCircle,
  Star,
  BookOpen,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const courseData: Record<string, {
  title: string
  subtitle: string
  description: string
  longDescription: string
  icon: typeof BookOpen
  duration: string
  students: string
  format: string
  days: string
  time: string
  platform: string
  topics: string[]
  outcomes: string[]
  image: string
}> = {
  'quran-reading': {
    title: 'Quran Reading',
    subtitle: 'Learn to read the Quran fluently',
    description: 'Start your journey with the Quran by learning proper reading techniques.',
    longDescription:
      'This comprehensive course takes you from recognizing Arabic letters to reading the Quran fluently. Our certified teachers use proven methods to ensure you develop strong reading skills with proper pronunciation. Whether you are a complete beginner or need to improve your reading, this course is designed for you.',
    icon: BookOpen,
    duration: '3-6 months',
    students: '2,500+',
    format: 'One-on-One',
    days: 'Monday to Thursday',
    time: '30 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Arabic Alphabet recognition', 'Proper pronunciation of letters', 'Joining letters and words', 'Reading short verses', 'Reading longer passages', 'Fluency and speed improvement'],
    outcomes: ['Read Arabic text confidently', 'Recognize all Arabic letters', 'Join letters to form words', 'Read Quranic verses fluently', 'Build foundation for Tajweed'],
    image: '/images/quran-pages.jpg',
  },
  'quran-tajweed': {
    title: 'Quran with Tajweed',
    subtitle: 'Master the art of Quranic recitation',
    description: 'Learn the rules of Tajweed to recite the Quran beautifully and correctly.',
    longDescription:
      'Tajweed is the science of Quranic recitation. This course covers all essential rules including Makharij (points of articulation), Sifaat (characteristics of letters), and special rules for Noon Saakin, Meem Saakin, and Madd. You will learn to recite the Quran with the precision and beauty it deserves.',
    icon: Star,
    duration: '6-12 months',
    students: '3,200+',
    format: 'One-on-One',
    days: 'Monday to Thursday',
    time: '30 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Makharij (Points of articulation)', 'Sifaat (Letter characteristics)', 'Noon Saakin & Tanween rules', 'Meem Saakin rules', 'Madd (Elongation) rules', 'Qalqalah & other special rules', 'Practical Quran recitation'],
    outcomes: ['Recite Quran with proper Tajweed', 'Identify and apply all Tajweed rules', 'Understand points of articulation', 'Develop beautiful recitation style', 'Receive Ijazah certification'],
    image: '/images/tajweed-art.jpg',
  },
  'quran-translation': {
    title: 'Quran Translation',
    subtitle: 'Understand the meaning of the Quran',
    description: 'Gain a deep understanding of Quranic verses through word-by-word translation.',
    longDescription:
      'Understanding the Quran is essential for every Muslim. This course helps you comprehend the meaning of Quranic verses through word-by-word analysis, vocabulary building, and context understanding. You will develop a personal connection with the words of Allah.',
    icon: BookOpen,
    duration: '12+ months',
    students: '1,800+',
    format: 'One-on-One',
    days: 'Monday to Thursday',
    time: '30 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Word-by-word meaning', 'Vocabulary building', 'Grammar basics', 'Context understanding', 'Reflection exercises', 'Thematic study of Surahs'],
    outcomes: ['Understand Quranic Arabic vocabulary', 'Follow translation while reading', 'Grasp context of revelations', 'Reflect on Quranic messages', 'Apply teachings in daily life'],
    image: '/images/calligraphy.jpg',
  },
  'quran-tafseer': {
    title: 'Quran Tafseer',
    subtitle: 'Deep dive into Quranic explanations',
    description: 'Study the detailed explanation and context of Quranic verses.',
    longDescription:
      'Tafseer is the detailed commentary and explanation of the Quran. This course explores the circumstances of revelation, linguistic analysis, and practical applications of Quranic teachings. Study classical and contemporary Tafseer texts with qualified scholars.',
    icon: BookOpen,
    duration: 'Ongoing',
    students: '1,200+',
    format: 'One-on-One',
    days: 'Monday to Thursday',
    time: '30 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Surah explanations (Asbab al-Nuzul)', 'Context of revelation', 'Linguistic analysis', 'Life lessons from the Quran', 'Contemporary applications', 'Comparative Tafseer study'],
    outcomes: ['Deep understanding of Quranic context', 'Knowledge of revelation circumstances', 'Ability to derive life lessons', 'Apply Quran to modern challenges', 'Study classical Tafseer texts'],
    image: '/images/calligraphy.jpg',
  },
  'hadith-sunnah': {
    title: 'Hadith & Sunnah',
    subtitle: 'Study the traditions of the Prophet',
    description: 'Learn about the sayings and practices of Prophet Muhammad (PBUH).',
    longDescription:
      'The Sunnah is the second source of Islamic law and guidance. This course covers the sciences of Hadith, authentic collections, and practical implementation of Prophetic teachings in daily life. Develop love for the Prophet by studying his noble character.',
    icon: BookOpen,
    duration: '6-12 months',
    students: '900+',
    format: 'One-on-One',
    days: 'Monday to Thursday',
    time: '30 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Sciences of Hadith (Ulum al-Hadith)', 'Authentic collections (Sihah Sitta)', 'Character building (Tazkiyah)', 'Daily implementation', 'Fiqh from Hadith', 'Seerah integration'],
    outcomes: ['Understand Hadith terminology', 'Know major Hadith collections', 'Implement Sunnah in daily life', 'Develop Prophetic character', 'Distinguish authentic narrations'],
    image: '/images/mosque-interior.jpg',
  },
  'hifz-program': {
    title: 'Hifz Program',
    subtitle: 'Memorize the entire Quran',
    description: 'A structured memorization program with daily revision and progress tracking.',
    longDescription:
      'Our Hifz program provides a structured path to memorizing the Quran. With personalized memorization plans, daily revision schedules, and regular assessments, you will steadily progress toward becoming a Hafiz/Hafiza. Parents receive detailed progress reports.',
    icon: Star,
    duration: '2-4 years',
    students: '800+',
    format: 'One-on-One',
    days: 'Monday to Thursday',
    time: '30-45 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Customized memorization plan', 'Daily new memorization (Sabaq)', 'Daily revision (Dhor)', 'Weekly assessment', 'Tajweed integration', 'Parent progress reports'],
    outcomes: ['Memorize the entire Quran', 'Strong retention through revision', 'Beautiful recitation with Tajweed', 'Receive Sanad/Ijazah', 'Develop discipline and consistency'],
    image: '/images/quran-pages.jpg',
  },
  'islamic-children': {
    title: 'Islamic Studies for Children',
    subtitle: 'Fun learning for young Muslims',
    description: 'Engaging Islamic education tailored for children.',
    longDescription:
      'Our children\'s program makes learning Islam fun and engaging. Through interactive lessons, stories, games, and activities, children learn Quran, Duas, Islamic manners, and values. Our teachers are specially trained to work with young learners.',
    icon: Star,
    duration: 'Ongoing',
    students: '1,500+',
    format: 'One-on-One or Group',
    days: 'Monday to Thursday',
    time: '20-30 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Quran reading for kids', 'Islamic manners (Adab)', 'Prophet stories (Qasas)', 'Daily Duas and Azkar', 'Islamic values', 'Fun Islamic activities'],
    outcomes: ['Love for Quran and Islam', 'Know essential Duas', 'Understand Islamic manners', 'Learn Prophet stories', 'Develop Muslim identity'],
    image: '/images/children-class.jpg',
  },
  'noorani-qaida': {
    title: 'Noorani Qaida',
    subtitle: 'Build a strong foundation',
    description: 'Master Arabic letters and sounds with the classic Noorani Qaida method.',
    longDescription:
      'Noorani Qaida is the traditional method of learning Arabic reading. This course provides a solid foundation by teaching each letter with its correct pronunciation, vowel marks, and joining rules. Perfect for absolute beginners of all ages.',
    icon: BookOpen,
    duration: '1-3 months',
    students: '2,000+',
    format: 'One-on-One',
    days: 'Monday to Thursday',
    time: '20-30 minutes per class',
    platform: 'Zoom or Google Meet',
    topics: ['Individual Arabic letters', 'Vowel marks (Fatha, Kasra, Damma)', 'Tanween', 'Letter joining rules', 'Sukoon and Shaddah', 'Word and sentence reading'],
    outcomes: ['Recognize all Arabic letters', 'Read with correct pronunciation', 'Understand vowel marks', 'Join letters confidently', 'Ready for Quran reading'],
    image: '/images/student-reading.jpg',
  },
}

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const course = slug ? courseData[slug] : null

  if (!course) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-dt-cream">
        <div className="text-center">
          <h1 className="font-display text-3xl text-dt-dark mb-4">Course Not Found</h1>
          <p className="text-dt-sage/60 mb-6">The course you are looking for does not exist.</p>
          <Link to="/courses" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </main>
    )
  }

  const CourseIcon = course.icon

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dt-sage/70" />
        <div className="relative z-10 h-full flex items-end">
          <div className="section-container pb-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-dt-gold/80 hover:text-dt-gold mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
            <AnimatedText
              text={course.title}
              className="font-display text-5xl lg:text-6xl text-white mb-2"
              as="h1"
            />
            <p className="text-dt-gold/80 text-xl">{course.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-dt-cream py-16 lg:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl text-dt-dark mb-4">About This Course</h2>
                <p className="text-dt-sage/80 text-lg leading-relaxed mb-8">
                  {course.longDescription}
                </p>
              </motion.div>

              {/* Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="font-display text-2xl text-dt-dark mb-4">What You Will Learn</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white rounded-xl p-4 border border-dt-gold/10"
                    >
                      <CheckCircle className="w-5 h-5 text-dt-sage flex-shrink-0 mt-0.5" />
                      <span className="text-dt-sage/80 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="font-display text-2xl text-dt-dark mb-4">Learning Outcomes</h3>
                <div className="bg-dt-sage/5 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {course.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-dt-sage/20 flex items-center justify-center flex-shrink-0">
                          <Star className="w-3 h-3 text-dt-sage" />
                        </div>
                        <span className="text-dt-sage/80">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] p-6 border border-dt-gold/10 shadow-lg sticky top-24"
              >
                <div className="w-16 h-16 rounded-2xl bg-dt-sage/10 flex items-center justify-center mb-6">
                  <CourseIcon className="w-8 h-8 text-dt-sage" />
                </div>

                <h3 className="font-display text-xl text-dt-dark mb-6">Course Details</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-dt-sage" />
                    <div>
                      <div className="text-xs text-dt-sage/60">Duration</div>
                      <div className="text-sm text-dt-dark">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-dt-sage" />
                    <div>
                      <div className="text-xs text-dt-sage/60">Students</div>
                      <div className="text-sm text-dt-dark">{course.students}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-dt-sage" />
                    <div>
                      <div className="text-xs text-dt-sage/60">Format</div>
                      <div className="text-sm text-dt-dark">{course.format}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-dt-sage" />
                    <div>
                      <div className="text-xs text-dt-sage/60">Days</div>
                      <div className="text-sm text-dt-dark">{course.days}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-dt-sage" />
                    <div>
                      <div className="text-xs text-dt-sage/60">Class Duration</div>
                      <div className="text-sm text-dt-dark">{course.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-dt-sage" />
                    <div>
                      <div className="text-xs text-dt-sage/60">Platform</div>
                      <div className="text-sm text-dt-dark">{course.platform}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/register" className="btn-secondary w-full flex items-center justify-center gap-2">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-dt-sage/20 text-dt-sage font-medium hover:bg-dt-sage/5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Ask on WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { motion } from 'framer-motion'
import { Users, Globe, Clock, BookOpen, Award, Heart } from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const stats = [
  { icon: Users, value: '10,000+', label: 'Students Enrolled' },
  { icon: Globe, value: '50+', label: 'Countries Reached' },
  { icon: Clock, value: '24/7', label: 'Live Classes' },
]

const features = [
  {
    icon: BookOpen,
    title: 'Structured Curriculum',
    description: 'Step-by-step learning from basics to advanced levels',
  },
  {
    icon: Award,
    title: 'Certified Teachers',
    description: 'All instructors are certified in Quranic sciences',
  },
  {
    icon: Heart,
    title: 'Personalized Approach',
    description: 'One-on-one attention tailored to each student',
  },
]

export default function Programs() {
  return (
    <section className="bg-dt-cream py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,10 L120,80 L190,100 L120,120 L100,190 L80,120 L10,100 L80,80 Z"
            fill="none"
            stroke="#3D524C"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedText
              text="Structured Learning for Every Stage"
              className="font-display text-4xl lg:text-5xl text-dt-dark mb-6 leading-tight"
              as="h2"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dt-sage/80 text-lg leading-relaxed mb-10"
            >
              From Noorani Qaida for beginners to advanced Hifz and Tafseer programs, we provide a
              clear path for your Quranic journey. Our curriculum is designed by scholars to ensure
              authentic, comprehensive learning.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-2xl p-4 border border-dt-gold/20 text-center"
                >
                  <stat.icon className="w-6 h-6 text-dt-sage mx-auto mb-2" />
                  <div className="text-xl font-display text-dt-dark">{stat.value}</div>
                  <div className="text-xs text-dt-sage/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-dt-sage/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-dt-sage" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-dt-dark mb-1">{feature.title}</h4>
                    <p className="text-sm text-dt-sage/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="/images/student-reading.jpg"
                alt="Student reading Quran"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-dt-sage/10" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-dt-gold/30 rounded-[32px] -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dt-gold/10 rounded-[24px] -z-10" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-dt-sage flex items-center justify-center">
                <Award className="w-6 h-6 text-dt-gold" />
              </div>
              <div>
                <div className="text-sm font-display text-dt-dark">Certified</div>
                <div className="text-xs text-dt-sage/60">Quranic Education</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

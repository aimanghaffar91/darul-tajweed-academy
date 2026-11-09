import { motion } from 'framer-motion'
import {
  Sparkles,
  UserCheck,
  BookOpen,
  Compass,
  HeartHandshake,
  Laptop,
  Award,
} from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Personalized Learning',
    description: "Lessons are approached with attention to each learner's level, pace and learning needs.",
    icon: UserCheck,
    tag: 'INDIVIDUAL FOCUS',
  },
  {
    id: 2,
    title: 'Tajweed-Focused Teaching',
    description: 'Develop correct pronunciation and learn to apply Tajweed rules in Quran recitation.',
    icon: BookOpen,
    tag: 'RECITATION EXCELLENCE',
  },
  {
    id: 3,
    title: 'Quranic Understanding',
    description: 'Explore the meanings and lessons of the Quran through Tafseer.',
    icon: Compass,
    tag: 'SPIRITUAL CLARITY',
  },
  {
    id: 4,
    title: 'Supportive Environment',
    description:
      'Learn in a comfortable atmosphere where questions, practice and gradual improvement are encouraged.',
    icon: HeartHandshake,
    tag: 'PATIENCE & CARE',
  },
  {
    id: 5,
    title: 'Online Accessibility',
    description: 'Learn from the comfort of your home through online classes.',
    icon: Laptop,
    tag: 'FLEXIBLE & CONVENIENT',
  },
  {
    id: 6,
    title: 'Two Years of Experience',
    description: 'Benefit from two years of experience in teaching Quran online.',
    icon: Award,
    tag: 'PROVEN DEDICATION',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#F7F4EB] text-[#242820] overflow-hidden">
      {/* Background Watermark Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EDE5D4]/70 rounded-full blur-[120px] pointer-events-none" />

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
              OUR TEACHING PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#073B2A] font-normal leading-tight"
          >
            Learning with Care, Patience and Purpose
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#242820]/80 font-sans font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Choosing the right learning environment makes a difference. At Darul Tajweed Academy, we focus on helping every learner develop confidence, improve their Quran recitation and understand the message of the Quran.
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

        {/* 6 Feature Cards Grid (Crisp White on Soft Warm Canvas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white border border-[#B89545]/30 hover:border-[#B89545] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-[#073B2A] text-[#D8BD74] border border-[#B89545]/40 group-hover:bg-[#B89545] group-hover:text-[#073B2A] transition-colors duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-cinzel font-semibold tracking-widest text-[#073B2A] uppercase px-3 py-1 rounded-full bg-[#EDE5D4]/70 border border-[#B89545]/20">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#073B2A] group-hover:text-[#B89545] transition-colors leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#242820]/80 font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Gold Bottom Line */}
                <div className="mt-6 pt-4 border-t border-[#EDE5D4] flex items-center justify-between text-xs text-[#073B2A]/70 font-cinzel">
                  <span>Darul Tajweed Academy</span>
                  <span className="text-[#B89545] font-bold">0{feature.id}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

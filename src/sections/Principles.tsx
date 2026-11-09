import { motion } from 'framer-motion'
import { Video, Calendar, BarChart3, MessageSquare, FileCheck, Headphones } from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const principles = [
  {
    icon: Video,
    title: 'Interactive Learning',
    description:
      'One-on-one live sessions with certified tutors using video conferencing. Experience real-time feedback and personalized guidance.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description:
      'Book classes at your convenience, easily rescheduled to fit your busy life. Learn at your own pace, anytime, anywhere.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description:
      'Detailed reports and certificates upon completion. Monitor your improvement with our comprehensive analytics dashboard.',
  },
  {
    icon: MessageSquare,
    title: 'Parent Updates',
    description:
      'Regular progress reports for parents. Stay informed about your child\'s learning journey with weekly summaries.',
  },
  {
    icon: FileCheck,
    title: 'Structured Curriculum',
    description:
      'Age-appropriate learning materials designed by Islamic scholars. Follow a proven path from beginner to advanced levels.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Our support team is always available to help. Get answers to your questions whenever you need them.',
  },
]

export default function Principles() {
  return (
    <section className="bg-dt-sage py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="principles-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M30,5 L35,20 L50,20 L38,30 L42,45 L30,35 L18,45 L22,30 L10,20 L25,20 Z"
                fill="none"
                stroke="#D4C5A9"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#principles-pattern)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Why Choose Darul Tajweed"
            className="font-display text-4xl lg:text-5xl text-dt-gold mb-4"
            as="h2"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dt-gold/60 text-lg max-w-2xl mx-auto"
          >
            We combine traditional Islamic teaching methods with modern technology to deliver an
            exceptional learning experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-dt-sage/50 border border-dt-gold/20 rounded-[32px] p-8 hover:border-dt-gold/60 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-dt-gold/10 flex items-center justify-center mb-6 group-hover:bg-dt-gold/20 transition-colors">
                <principle.icon className="w-7 h-7 text-dt-gold" />
              </div>
              <h3 className="font-display text-xl text-dt-gold mb-3">{principle.title}</h3>
              <p className="text-dt-gold/60 text-sm leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

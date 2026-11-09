import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { Target, Eye, Heart, Award, Users, BookOpen, ArrowRight, CheckCircle } from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'We teach based on authentic Islamic sources with proper chain of transmission (Sanad).',
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Quality Islamic education should be available to everyone, everywhere, at any time.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in teaching, constantly improving our methods and materials.',
  },
  {
    icon: BookOpen,
    title: 'Tradition',
    description: 'We preserve the traditional methods of Quranic learning while embracing modern technology.',
  },
]

const stats = [
  { value: '10,000+', label: 'Students Worldwide' },
  { value: '200+', label: 'Certified Teachers' },
  { value: '50+', label: 'Countries' },
  { value: '98%', label: 'Satisfaction Rate' },
]

const team = [
  { name: 'Sheikh Ahmad Khan', role: 'Head of Academics', initials: 'AK' },
  { name: 'Ustadha Sarah Ali', role: 'Lead Tajweed Instructor', initials: 'SA' },
  { name: 'Sheikh Omar Farooq', role: 'Tafseer & Hadith', initials: 'OF' },
  { name: 'Ustadha Maryam Hussain', role: 'Children\'s Program Lead', initials: 'MH' },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-dt-sage py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="about-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M30,5 L35,20 L50,20 L38,30 L42,45 L30,35 L18,45 L22,30 L10,20 L25,20 Z"
                  fill="none"
                  stroke="#D4C5A9"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-pattern)" />
          </svg>
        </div>

        <div className="section-container relative z-10">
          <AnimatedText
            text="About Darul Tajweed"
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
            Dedicated to preserving and spreading the knowledge of the Quran with excellence and
            authenticity.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-dt-cream py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-10 border border-dt-gold/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-dt-sage/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-dt-sage" />
              </div>
              <h2 className="font-display text-3xl text-dt-dark mb-4">Our Mission</h2>
              <p className="text-dt-sage/70 leading-relaxed">
                To make authentic Quranic education accessible to Muslims worldwide through innovative
                online learning. We aim to help every student develop a deep connection with the
                Quran, mastering its recitation with proper Tajweed and understanding its meanings to
                transform their lives.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-10 border border-dt-gold/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-dt-sage/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-dt-sage" />
              </div>
              <h2 className="font-display text-3xl text-dt-dark mb-4">Our Vision</h2>
              <p className="text-dt-sage/70 leading-relaxed">
                To become the world's leading online Quranic education platform, producing a generation
                of Muslims who recite the Quran beautifully, understand its message deeply, and live by
                its teachings. We envision a world where every Muslim has access to quality Islamic
                education regardless of location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dt-sage py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-display text-dt-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-dt-gold/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dt-cream py-20 lg:py-28">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Core Values"
              className="font-display text-4xl lg:text-5xl text-dt-dark mb-4"
              as="h2"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dt-sage/70 text-lg max-w-2xl mx-auto"
            >
              The principles that guide everything we do at Darul Tajweed Academy.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[24px] p-8 border border-dt-gold/10 flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-dt-sage/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-dt-sage" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-dt-dark mb-2">{value.title}</h3>
                  <p className="text-dt-sage/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="bg-dt-sage py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedText
                text="Our Teaching Methodology"
                className="font-display text-4xl lg:text-5xl text-dt-gold mb-6"
                as="h2"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-dt-gold/60 text-lg leading-relaxed mb-8"
              >
                We combine traditional Islamic teaching methods with modern educational technology to
                create an effective and engaging learning experience.
              </motion.p>

              <div className="space-y-4">
                {[
                  'One-on-one personalized instruction',
                  'Interactive digital whiteboards',
                  'Audio-visual learning aids',
                  'Regular progress assessments',
                  'Recorded sessions for revision',
                  'Customized learning plans',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-dt-gold flex-shrink-0" />
                    <span className="text-dt-gold/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src="/images/mosque-interior.jpg"
                  alt="Islamic learning"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-dt-cream py-20 lg:py-28">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Meet Our Leadership"
              className="font-display text-4xl lg:text-5xl text-dt-dark mb-4"
              as="h2"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dt-sage/70 text-lg max-w-2xl mx-auto"
            >
              Our team of dedicated scholars and educators.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-dt-sage flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display text-dt-gold">{member.initials}</span>
                </div>
                <h4 className="font-display text-lg text-dt-dark mb-1">{member.name}</h4>
                <p className="text-sm text-dt-sage/60">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dt-sage py-16">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl text-dt-gold mb-4">
              Start Your Learning Journey Today
            </h2>
            <p className="text-dt-gold/60 mb-8 max-w-xl mx-auto">
              Join thousands of students who have transformed their relationship with the Quran.
            </p>
            <Link to="/register" className="btn-primary inline-flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

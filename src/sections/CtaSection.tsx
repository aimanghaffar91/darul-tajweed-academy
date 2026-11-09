import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const benefits = [
  'Free trial class',
  'Flexible scheduling',
  'Certified teachers',
  'Progress tracking',
  'One-on-one sessions',
  'Affordable pricing',
]

export default function CtaSection() {
  return (
    <section className="bg-dt-cream py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text="Begin Your Journey Today"
              className="font-display text-4xl lg:text-5xl text-dt-dark mb-6"
              as="h2"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dt-sage/80 text-lg leading-relaxed mb-8"
            >
              Register for a free trial class and experience the difference of dedicated Quranic
              education. No commitment required - see for yourself why thousands trust Darul Tajweed
              Academy.
            </motion.p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-dt-sage flex-shrink-0" />
                  <span className="text-sm text-dt-sage/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link to="/register" className="btn-secondary flex items-center gap-2">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="/images/online-class.jpg"
                alt="Online learning setup"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-dt-gold/20 rounded-[20px] -z-10" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-dt-sage/20 rounded-[24px] -z-10" />

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-dt-dark">Class Booked!</div>
                  <div className="text-xs text-dt-sage/60">Tomorrow at 4:00 PM</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

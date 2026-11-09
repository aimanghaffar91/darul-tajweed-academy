import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Globe,
} from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (234) 567-890',
      href: 'https://wa.me/1234567890',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@darultajweed.com',
      href: 'mailto:info@darultajweed.com',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.darultajweed.com',
      href: '/',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-dt-sage py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#D4C5A9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-pattern)" />
          </svg>
        </div>

        <div className="section-container relative z-10">
          <AnimatedText
            text="Get in Touch"
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
            Have questions? We would love to hear from you. Reach out through any of the channels
            below.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-dt-cream py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-dt-gold/10 hover:border-dt-gold/30 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="font-display text-lg text-dt-dark mb-1">{item.title}</h3>
                <p className="text-sm text-dt-sage/60">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-dt-cream py-16 lg:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl text-dt-dark mb-2">Send us a Message</h2>
              <p className="text-dt-sage/60 mb-8">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-dt-dark mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-dt-gold/20 text-dt-dark placeholder-dt-sage/40 focus:outline-none focus:border-dt-sage transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dt-dark mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-dt-gold/20 text-dt-dark placeholder-dt-sage/40 focus:outline-none focus:border-dt-sage transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dt-dark mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-dt-gold/20 text-dt-dark focus:outline-none focus:border-dt-sage transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="courses">Course Information</option>
                      <option value="pricing">Pricing & Plans</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dt-dark mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-dt-gold/20 text-dt-dark placeholder-dt-sage/40 focus:outline-none focus:border-dt-sage transition-colors resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button type="submit" className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Working Hours */}
              <div className="bg-white rounded-[24px] p-8 border border-dt-gold/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dt-sage/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-dt-sage" />
                  </div>
                  <h3 className="font-display text-xl text-dt-dark">Working Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-dt-sage/60">Monday - Thursday</span>
                    <span className="text-dt-dark font-medium">6:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dt-sage/60">Friday</span>
                    <span className="text-dt-dark font-medium">2:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dt-sage/60">Saturday - Sunday</span>
                    <span className="text-dt-dark font-medium">8:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-50 rounded-[24px] p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-green-800 mb-1">Chat on WhatsApp</h3>
                    <p className="text-sm text-green-600">
                      Get instant replies during working hours
                    </p>
                  </div>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="bg-white rounded-[24px] p-6 border border-dt-gold/10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-dt-sage" />
                  <h3 className="font-display text-lg text-dt-dark">Online Worldwide</h3>
                </div>
                <div className="rounded-2xl overflow-hidden bg-dt-sage/5 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-dt-sage/30 mx-auto mb-2" />
                    <p className="text-sm text-dt-sage/50">
                      We serve students from 50+ countries
                      <br />
                      All classes are conducted online
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Phone,
  CheckCircle,
  Clock,
  ArrowRight,
} from 'lucide-react'

interface ContactSectionProps {
  preselectedCourse?: string
}

const coursesList = [
  'Quran with Tajweed',
  'Quran Tafseer',
  'Hadith & Sunnah Studies',
  'Fahm-ul-Quran',
  'Asma-ul-Husna',
  'General Enquiry / Other',
]

export default function ContactSection({ preselectedCourse }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: preselectedCourse || 'Quran with Tajweed',
    message: '',
  })

  const [submittedType, setSubmittedType] = useState<'whatsapp' | 'email' | null>(null)

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, course: preselectedCourse }))
    }
  }, [preselectedCourse])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, course, message } = formData

    const text = encodeURIComponent(
      `Assalamu Alaikum Darul Tajweed Academy!\n\n` +
        `• Name: ${name || 'Prospective Student'}\n` +
        `• Email: ${email || 'Not provided'}\n` +
        `• Course of Interest: ${course}\n` +
        `• Message: ${message || 'I would like to enquire about class schedules and enrolment.'}`
    )

    window.open(`https://wa.me/923185690089?text=${text}`, '_blank')
    setSubmittedType('whatsapp')
  }

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, course, message } = formData

    const subject = encodeURIComponent(`Darul Tajweed Academy Enquiry - ${course} [${name || 'Student'}]`)
    const body = encodeURIComponent(
      `Assalamu Alaikum Teacher Aiman,\n\n` +
        `My Name: ${name}\n` +
        `My Email: ${email}\n` +
        `Course of Interest: ${course}\n\n` +
        `Message:\n${message}\n\n` +
        `Looking forward to hearing from you.`
    )

    window.location.href = `mailto:darultajweedacademy@gmail.com?subject=${subject}&body=${body}`
    setSubmittedType('email')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#073B2A] text-[#FAF8F0] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#B89545]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0B3024] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3024] border border-[#B89545]/40 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D8BD74]" />
            <span className="text-xs font-cinzel font-semibold tracking-widest text-[#FAF8F0] uppercase">
              ENROLMENT & CONTACT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F0] font-normal leading-tight"
          >
            Take the First Step Towards Learning the Quran
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#FAF8F0]/80 font-sans font-light max-w-2xl mx-auto space-y-2 leading-relaxed"
          >
            <p>
              Whether you want to improve your recitation, learn Tajweed or understand the Quran through Tafseer, I would be happy to hear from you.
            </p>
            <p className="text-[#D8BD74] font-normal">
              Get in touch to discuss your learning goals and find out more about online classes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-12 bg-[#B89545]/40" />
            <span className="text-[#D8BD74] font-serif text-sm">۞</span>
            <span className="h-[1px] w-12 bg-[#B89545]/40" />
          </motion.div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Academy Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F0] mb-3">
                Let's Begin Your Journey
              </h3>
              <p className="text-sm text-[#FAF8F0]/80 font-sans leading-relaxed">
                Connect directly with teacher Aiman Ghaffar. We will discuss your current recitation level, goals, and suitable online schedule.
              </p>

              {/* Direct Info Cards */}
              <div className="mt-8 space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923185690089?text=Assalamu%20Alaikum!%20I%20am%20interested%20in%20online%20Quran%20classes%20at%20Darul%20Tajweed%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-[#0B3024]/80 border border-[#B89545]/40 hover:border-[#D8BD74] transition-all flex items-center justify-between group shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-cinzel tracking-wider text-[#D8BD74] uppercase block">
                        Direct WhatsApp
                      </span>
                      <span className="font-sans text-base font-semibold text-[#FAF8F0]">
                        +92 318 5690089
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#B89545] group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email */}
                <a
                  href="mailto:darultajweedacademy@gmail.com"
                  className="p-5 rounded-2xl bg-[#0B3024]/80 border border-[#B89545]/40 hover:border-[#D8BD74] transition-all flex items-center justify-between group shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#B89545]/20 border border-[#B89545]/40 flex items-center justify-center text-[#D8BD74] group-hover:scale-105 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-cinzel tracking-wider text-[#D8BD74] uppercase block">
                        Official Email
                      </span>
                      <span className="font-sans text-sm sm:text-base font-semibold text-[#FAF8F0]">
                        darultajweedacademy@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#B89545] group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Location */}
                <div className="p-5 rounded-2xl bg-[#0B3024]/80 border border-[#B89545]/40 flex items-center gap-4 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#073B2A] border border-[#B89545]/40 flex items-center justify-center text-[#D8BD74]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-cinzel tracking-wider text-[#D8BD74] uppercase block">
                      Location & Delivery
                    </span>
                    <span className="font-sans text-base font-semibold text-[#FAF8F0]">
                      Islamabad, Pakistan • Online Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Guarantee Note */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-[#FAF8F0]/75 font-serif italic text-center">
                "Every session is held with care, individual attention, and dedicated spiritual focus."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Functional Enrolment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FAF8F0] to-[#FAF8F0] text-[#242820] shadow-2xl border-2 border-[#B89545]/40 relative">
              <div className="mb-6">
                <span className="text-xs font-cinzel font-semibold tracking-widest text-[#B89545] uppercase block mb-1">
                  DIRECT ENROLMENT FORM
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#073B2A]">
                  Send Your Learning Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#242820]/75 font-sans mt-1">
                  Fill in your details below. You can send this instantly to our official WhatsApp or via Email.
                </p>
              </div>

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#073B2A] uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Fatima Zahra / Muhammad Ali"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#B89545]/40 focus:border-[#073B2A] focus:ring-1 focus:ring-[#073B2A] text-sm text-[#242820] outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#073B2A] uppercase mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#B89545]/40 focus:border-[#073B2A] focus:ring-1 focus:ring-[#073B2A] text-sm text-[#242820] outline-none transition-all"
                  />
                </div>

                {/* Course Selection Dropdown */}
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#073B2A] uppercase mb-1">
                    Select Program / Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#B89545]/40 focus:border-[#073B2A] focus:ring-1 focus:ring-[#073B2A] text-sm text-[#242820] outline-none transition-all"
                  >
                    {coursesList.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#073B2A] uppercase mb-1">
                    Your Goals or Questions *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current Quran reading experience, preferred timings, and any specific goals you have..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#B89545]/40 focus:border-[#073B2A] focus:ring-1 focus:ring-[#073B2A] text-sm text-[#242820] outline-none transition-all resize-none"
                  />
                </div>

                {/* Submission Options (Real Functionality: WhatsApp or Email) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#073B2A] hover:bg-[#0B3024] text-[#FAF8F0] shadow-md hover:shadow-lg transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                </div>

                {/* Real Status Notification */}
                {submittedType && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-[#073B2A]/10 border border-[#073B2A]/30 text-xs text-[#073B2A] flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-[#073B2A] shrink-0" />
                    <span>
                      {submittedType === 'whatsapp'
                        ? 'Opening WhatsApp with your pre-formatted enquiry...'
                        : 'Opening your email client to send your message...'}
                    </span>
                  </motion.div>
                )}

                <p className="text-[11px] text-[#242820]/60 font-sans text-center mt-2">
                  No automated spam. Your enquiry is received directly by teacher Aiman Ghaffar.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


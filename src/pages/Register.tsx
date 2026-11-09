import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import { Eye, EyeOff, UserPlus, Chrome, ArrowRight, ArrowLeft, CheckCircle, BookOpen, Star, GraduationCap, Heart } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const interests = [
  { id: 'quran-reading', label: 'Quran Reading', icon: BookOpen },
  { id: 'tajweed', label: 'Tajweed', icon: Star },
  { id: 'hifz', label: 'Hifz Program', icon: GraduationCap },
  { id: 'tafseer', label: 'Tafseer', icon: BookOpen },
  { id: 'children', label: 'For Children', icon: Heart },
  { id: 'hadith', label: 'Hadith', icon: BookOpen },
]

export default function Register() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [accountType, setAccountType] = useState<'student' | 'parent'>('student')
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const validateStep1 = () => {
    if (!name || !email || !phone || !country) {
      setError('Please fill in all fields')
      return false
    }
    setError('')
    return true
  }

  const validateStep2 = () => {
    if (selectedInterests.length === 0) {
      setError('Please select at least one interest')
      return false
    }
    setError('')
    return true
  }

  const validateStep3 = () => {
    if (!password || !confirmPassword) {
      setError('Please fill in all fields')
      return false
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }
    setError('')
    return true
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2)
    else if (step === 2 && validateStep2()) setStep(3)
  }

  const handleBack = () => {
    setError('')
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep3()) return

    setIsLoading(true)
    try {
      const success = await register(name, email, password, accountType)
      if (success) {
        navigate('/dashboard')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-dt-cream pt-20 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-dark rounded-[32px] p-8">
            <div className="text-center mb-8">
              <img
                src="/logo.jpg"
                alt="Darul Tajweed Academy"
                className="h-14 w-auto rounded-full mx-auto mb-4"
              />
              <h1 className="font-display text-2xl text-white mb-2">Create Your Account</h1>
              <p className="text-white/60 text-sm">
                Join thousands of students learning the Quran worldwide.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      s === step
                        ? 'bg-dt-gold text-dt-sage'
                        : s < step
                        ? 'bg-dt-gold/30 text-dt-gold'
                        : 'bg-white/10 text-white/40'
                    }`}
                  >
                    {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-12 h-0.5 rounded ${
                        s < step ? 'bg-dt-gold/30' : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-white font-display text-lg mb-4">Personal Information</h3>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-dt-gold/50 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-dt-gold/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-dt-gold/50 transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-dt-gold/50 transition-colors"
                    placeholder="Your country"
                  />
                </div>
                <button
                  onClick={handleNext}
                  className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* Step 2: Learning Interests */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-white font-display text-lg mb-4">What do you want to learn?</h3>

                {/* Account Type */}
                <div className="mb-6">
                  <label className="block text-sm text-white/60 mb-2">I am a</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setAccountType('student')}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        accountType === 'student'
                          ? 'bg-dt-gold text-dt-sage'
                          : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      Student
                    </button>
                    <button
                      onClick={() => setAccountType('parent')}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        accountType === 'parent'
                          ? 'bg-dt-gold text-dt-sage'
                          : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      Parent
                    </button>
                  </div>
                </div>

                {/* Interests */}
                <div className="mb-6">
                  <label className="block text-sm text-white/60 mb-2">
                    Select your interests (choose all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <button
                        key={interest.id}
                        onClick={() => toggleInterest(interest.id)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-colors ${
                          selectedInterests.includes(interest.id)
                            ? 'bg-dt-gold/20 text-dt-gold border border-dt-gold/30'
                            : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <interest.icon className="w-4 h-4" />
                        {interest.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 btn-primary flex items-center justify-center gap-2"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Account Creation */}
            {step === 3 && (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <h3 className="text-white font-display text-lg mb-4">Create Your Account</h3>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-5 py-3 pr-12 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-dt-gold/50 transition-colors"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-dt-gold/50 transition-colors"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-dt-sage border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        Create Account
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-dt-dark text-white/40">or</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
              <Chrome className="w-5 h-5" />
              Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-white/60">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-dt-gold hover:text-dt-gold-light transition-colors font-medium inline-flex items-center gap-1"
              >
                Sign in
                <ArrowRight className="w-3 h-3" />
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

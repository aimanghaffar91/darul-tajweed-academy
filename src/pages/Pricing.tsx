import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { Check, ArrowRight, Star, MessageCircle, Zap, Crown, Users } from 'lucide-react'
import { AnimatedText } from '../hooks/useScrollReveal'

const plans = [
  {
    name: 'Group Classes',
    icon: Users,
    description: 'Learn in a small group setting with peers',
    monthlyPrice: 29,
    yearlyPrice: 290,
    popular: false,
    features: [
      'Small group (3-5 students)',
      '2 classes per week',
      '30 minutes per class',
      'Access to learning materials',
      'Monthly progress report',
      'Email support',
    ],
  },
  {
    name: 'One-on-One',
    icon: Zap,
    description: 'Personalized individual instruction',
    monthlyPrice: 49,
    yearlyPrice: 490,
    popular: true,
    features: [
      'Dedicated personal teacher',
      '4 classes per week',
      '30 minutes per class',
      'Customized learning plan',
      'Weekly progress report',
      'Priority scheduling',
      'WhatsApp support',
      'Session recordings',
    ],
  },
  {
    name: 'Family Package',
    icon: Crown,
    description: 'Best value for families with multiple students',
    monthlyPrice: 79,
    yearlyPrice: 790,
    popular: false,
    features: [
      'Up to 4 family members',
      'Individual or shared classes',
      '4 classes per week per member',
      '30 minutes per class',
      'Customized plans for each member',
      'Weekly family progress report',
      'Priority scheduling',
      'Dedicated account manager',
      'Session recordings',
    ],
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-dt-sage py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="pricing-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#D4C5A9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-pattern)" />
          </svg>
        </div>

        <div className="section-container relative z-10">
          <AnimatedText
            text="Simple, Transparent Pricing"
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
            Choose the plan that works best for you. All plans include a free trial class.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-dt-cream py-20 lg:py-28">
        <div className="section-container">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!isYearly ? 'text-dt-dark' : 'text-dt-sage/50'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-dt-sage' : 'bg-dt-sage/30'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-dt-dark' : 'text-dt-sage/50'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="ml-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                Save 20%
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-white rounded-[32px] p-8 border ${
                  plan.popular ? 'border-dt-gold shadow-xl' : 'border-dt-gold/10 shadow-lg'
                } card-hover`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-dt-gold rounded-full text-dt-sage text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      plan.popular ? 'bg-dt-sage' : 'bg-dt-sage/10'
                    } flex items-center justify-center mx-auto mb-4`}
                  >
                    <plan.icon
                      className={`w-8 h-8 ${plan.popular ? 'text-dt-gold' : 'text-dt-sage'}`}
                    />
                  </div>
                  <h3 className="font-display text-2xl text-dt-dark mb-2">{plan.name}</h3>
                  <p className="text-sm text-dt-sage/60">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-display text-dt-dark">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-dt-sage/60">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  {isYearly && (
                    <p className="text-xs text-green-600 mt-1">
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dt-sage flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-dt-sage/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/register"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-dt-sage text-dt-gold hover:bg-dt-sage-light'
                      : 'bg-dt-sage/10 text-dt-sage hover:bg-dt-sage/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-dt-sage/60 mb-4">
              Need a custom learning plan? Contact us for a tailored solution.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-dt-sage font-medium hover:text-dt-sage-light transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dt-sage py-20 lg:py-28">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Frequently Asked Questions"
              className="font-display text-4xl lg:text-5xl text-dt-gold mb-4"
              as="h2"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Is there a free trial class?',
                a: 'Yes! We offer a free trial class so you can experience our teaching methodology before committing to a plan.',
              },
              {
                q: 'Can I change my plan later?',
                a: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit/debit cards, PayPal, and bank transfers. For certain regions, we also accept local payment methods.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No. The price you see is the price you pay. There are no setup fees, hidden charges, or additional costs.',
              },
              {
                q: 'What if I need to miss a class?',
                a: 'We understand that life happens. You can reschedule classes with at least 24 hours notice at no extra charge.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-dt-sage/50 border border-dt-gold/20 rounded-2xl p-6"
              >
                <h4 className="font-display text-lg text-dt-gold mb-2">{faq.q}</h4>
                <p className="text-dt-gold/60 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

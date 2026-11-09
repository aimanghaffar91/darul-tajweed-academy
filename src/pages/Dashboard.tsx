import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  BarChart3,
  Award,
  Clock,
  TrendingUp,
  Video,
  FileText,
  Star,
  ChevronRight,
  Bell,
  User,
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { AnimatedText } from '../hooks/useScrollReveal'

const upcomingClasses = [
  {
    subject: 'Quran with Tajweed',
    teacher: 'Ustadha Sarah',
    time: 'Today, 4:00 PM',
    duration: '30 min',
    status: 'upcoming',
  },
  {
    subject: 'Quran Reading',
    teacher: 'Sheikh Ahmad',
    time: 'Tomorrow, 5:30 PM',
    duration: '30 min',
    status: 'scheduled',
  },
]

const progress = [
  { subject: 'Quran Reading', completed: 75, total: 100, color: 'bg-emerald-500' },
  { subject: 'Tajweed Rules', completed: 45, total: 100, color: 'bg-amber-500' },
  { subject: 'Quran Memorization', completed: 30, total: 100, color: 'bg-blue-500' },
]

const recentAssignments = [
  { title: 'Practice Surah Al-Fatiha with Tajweed', due: 'Due today', status: 'pending' },
  { title: 'Memorize verses 1-10 of Surah Al-Baqarah', due: 'Due tomorrow', status: 'pending' },
  { title: 'Review Noon Saakin rules', due: 'Due in 3 days', status: 'completed' },
]

const sidebarItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: BookOpen, label: 'My Courses', active: false },
  { icon: Calendar, label: 'Schedule', active: false },
  { icon: FileText, label: 'Assignments', active: false },
  { icon: Award, label: 'Certificates', active: false },
  { icon: User, label: 'Profile', active: false },
]

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null
  }

  return (
    <main className="pt-20 min-h-screen bg-dt-cream">
      <div className="section-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-[24px] p-6 border border-dt-gold/10 shadow-sm sticky top-24">
              <div className="text-center mb-6 pb-6 border-b border-dt-gold/10">
                <div className="w-20 h-20 rounded-full bg-dt-sage flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-display text-dt-gold">
                    {user?.name?.charAt(0)?.toUpperCase() || 'S'}
                  </span>
                </div>
                <h3 className="font-display text-lg text-dt-dark">{user?.name || 'Student'}</h3>
                <p className="text-sm text-dt-sage/60">{user?.email}</p>
              </div>

              <nav className="space-y-1">
                {sidebarItems.map((item, i) => (
                  <button
                    key={i}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                      item.active
                        ? 'bg-dt-sage/10 text-dt-sage font-medium'
                        : 'text-dt-sage/60 hover:bg-dt-sage/5 hover:text-dt-sage'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start justify-between"
            >
              <div>
                <AnimatedText
                  text={`Welcome back, ${user?.name || 'Student'}!`}
                  className="font-display text-3xl text-dt-dark"
                  as="h1"
                />
                <p className="text-dt-sage/60 mt-2">
                  Here's your learning progress and upcoming activities.
                </p>
              </div>
              <button className="w-10 h-10 rounded-full bg-white border border-dt-gold/10 flex items-center justify-center hover:bg-dt-gold/10 transition-colors relative">
                <Bell className="w-5 h-5 text-dt-sage" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                  2
                </span>
              </button>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Clock, label: 'Hours Learned', value: '48h', color: 'bg-blue-50' },
                { icon: BookOpen, label: 'Courses', value: '3', color: 'bg-emerald-50' },
                { icon: Star, label: 'Avg Rating', value: '4.9', color: 'bg-amber-50' },
                { icon: TrendingUp, label: 'Progress', value: '68%', color: 'bg-purple-50' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-4 border border-dt-gold/10"
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                    <stat.icon className="w-5 h-5 text-dt-sage" />
                  </div>
                  <div className="text-2xl font-display text-dt-dark">{stat.value}</div>
                  <div className="text-xs text-dt-sage/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[24px] p-6 border border-dt-gold/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl text-dt-dark">Upcoming Classes</h2>
                <Link
                  to="#"
                  className="text-sm text-dt-sage flex items-center gap-1 hover:text-dt-sage-light transition-colors"
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingClasses.map((cls, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-2xl bg-dt-cream border border-dt-gold/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-dt-sage/10 flex items-center justify-center">
                        <Video className="w-6 h-6 text-dt-sage" />
                      </div>
                      <div>
                        <h4 className="font-display text-dt-dark">{cls.subject}</h4>
                        <p className="text-sm text-dt-sage/60">
                          {cls.teacher} &bull; {cls.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-dt-sage font-medium">{cls.time}</p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs ${
                          cls.status === 'upcoming'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {cls.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Progress & Assignments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Course Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[24px] p-6 border border-dt-gold/10"
              >
                <h2 className="font-display text-xl text-dt-dark mb-6">Course Progress</h2>
                <div className="space-y-5">
                  {progress.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-dt-dark">{item.subject}</span>
                        <span className="text-sm text-dt-sage/60">
                          {item.completed}/{item.total}
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-dt-cream rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.completed / item.total) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Assignments */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-[24px] p-6 border border-dt-gold/10"
              >
                <h2 className="font-display text-xl text-dt-dark mb-6">Assignments</h2>
                <div className="space-y-4">
                  {recentAssignments.map((assignment, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-dt-cream"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          assignment.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm text-dt-dark">{assignment.title}</p>
                        <p className="text-xs text-dt-sage/50 mt-1">{assignment.due}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          assignment.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dt-sage rounded-[24px] p-6"
            >
              <h2 className="font-display text-xl text-dt-gold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Book Class', icon: Calendar, href: '#' },
                  { label: 'View Courses', icon: BookOpen, href: '/courses' },
                  { label: 'My Certificates', icon: Award, href: '#' },
                  { label: 'Get Help', icon: Bell, href: '/contact' },
                ].map((action, i) => (
                  <Link
                    key={i}
                    to={action.href}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center"
                  >
                    <action.icon className="w-6 h-6 text-dt-gold" />
                    <span className="text-sm text-dt-gold/80">{action.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

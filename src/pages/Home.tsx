import { useState } from 'react'
import Hero from '../sections/Hero'
import AboutSection from '../sections/AboutSection'
import TeacherSection from '../sections/TeacherSection'
import CoursesSection from '../sections/CoursesSection'
import QualificationsSection from '../sections/QualificationsSection'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'
import GetStartedSection from '../sections/GetStartedSection'
import FaqSection from '../sections/FaqSection'
import ContactSection from '../sections/ContactSection'

interface HomeProps {
  onEnquireCourse?: (courseTitle: string) => void
}

export default function Home({ onEnquireCourse }: HomeProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>('Quran with Tajweed')

  const handleSelectCourseForContact = (courseTitle: string) => {
    setSelectedCourse(courseTitle)
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBeginJourney = () => {
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleExploreCourses = () => {
    const coursesEl = document.getElementById('courses')
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="w-full">
      {/* 01. Full-Screen Cinematic Video Hero */}
      <Hero
        onExploreCourses={handleExploreCourses}
        onBeginJourney={handleBeginJourney}
      />

      {/* 02. About the Academy */}
      <AboutSection />

      {/* 03. Meet Your Teacher (Aiman Ghaffar) */}
      <TeacherSection onContactTeacher={handleBeginJourney} />

      {/* 04. Courses and Programs (5 Interactive Cards & Modal) */}
      <CoursesSection onSelectCourseForContact={handleSelectCourseForContact} />

      {/* 05. Educational Qualifications (Original Al-Huda Certificates Gallery & Lightbox) */}
      <QualificationsSection />

      {/* 06. Why Choose Us (6 Features) */}
      <WhyChooseUsSection />

      {/* 07. How to Get Started (4-Step Timeline Roadmap) */}
      <GetStartedSection onContactClick={handleBeginJourney} />

      {/* 08. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 09. Contact and Enrolment (Functional WhatsApp & Email form) */}
      <ContactSection preselectedCourse={selectedCourse} />
    </main>
  )
}

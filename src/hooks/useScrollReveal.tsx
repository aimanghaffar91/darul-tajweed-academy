import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return ref
}

export function splitTextToWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean)
}

type TagType = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

export function AnimatedText({
  text,
  className = '',
  as: Tag = 'div',
}: {
  text: string
  className?: string
  as?: TagType
}) {
  const ref = useScrollReveal(0.3)
  const words = splitTextToWords(text)

  return (
    <Tag ref={ref as any} className={`text-animated ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word-wrapper">
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </Tag>
  )
}

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedHeroVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Load image
    const img = new Image()
    img.src = '/images/quran-pages.jpg' // Using existing Quran image
    imgRef.current = img

    let animationId: number
    let time = 0

    const drawFrame = () => {
      time += 0.005

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (imgRef.current?.complete) {
        const img = imgRef.current
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        // Save context state
        ctx.save()

        // Apply zoom with smooth oscillation
        const baseZoom = 1
        const zoomAmplitude = 0.15
        const zoom = baseZoom + Math.sin(time * 0.3) * zoomAmplitude

        // Apply pan movement
        const panX = Math.sin(time * 0.2) * 30
        const panY = Math.cos(time * 0.15) * 30

        // Apply transformations
        ctx.translate(centerX + panX, centerY + panY)
        ctx.scale(zoom, zoom)

        // Calculate image display dimensions
        let displayWidth = canvas.width
        let displayHeight = canvas.height
        let imgX = -displayWidth / 2
        let imgY = -displayHeight / 2

        // Maintain aspect ratio
        const imgAspect = img.naturalWidth / img.naturalHeight
        const canvasAspect = canvas.width / canvas.height

        if (imgAspect > canvasAspect) {
          displayHeight = canvas.width / imgAspect
          imgY = -displayHeight / 2
        } else {
          displayWidth = canvas.height * imgAspect
          imgX = -displayWidth / 2
        }

        // Draw image with opacity
        ctx.globalAlpha = 0.85 + Math.sin(time * 0.5) * 0.15

        // Apply color overlay for depth
        ctx.fillStyle = 'rgba(26, 26, 26, 0.3)'
        ctx.fillRect(imgX, imgY, displayWidth, displayHeight)

        ctx.globalAlpha = 1
        ctx.drawImage(img, imgX, imgY, displayWidth, displayHeight)

        // Draw light rays
        ctx.strokeStyle = `rgba(212, 197, 169, ${0.1 + Math.sin(time * 0.4) * 0.15})`
        ctx.lineWidth = 2
        ctx.globalCompositeOperation = 'screen'

        for (let i = 0; i < 5; i++) {
          const angle = (time * 0.1 + (i / 5) * Math.PI * 2) % (Math.PI * 2)
          const rayLength = 200
          const x1 = Math.cos(angle) * 50
          const y1 = Math.sin(angle) * 50
          const x2 = Math.cos(angle) * rayLength
          const y2 = Math.sin(angle) * rayLength

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()
        }

        // Draw particles
        ctx.fillStyle = `rgba(212, 197, 169, ${0.3 + Math.sin(time * 0.6) * 0.2})`
        ctx.globalCompositeOperation = 'source-over'

        for (let i = 0; i < 20; i++) {
          const angle = (time * 0.05 + (i / 20) * Math.PI * 2) % (Math.PI * 2)
          const distance = 100 + Math.sin(time * 0.2 + i) * 50
          const px = Math.cos(angle) * distance
          const py = Math.sin(angle) * distance
          const size = 1.5 + Math.sin(time * 0.3 + i) * 1

          ctx.beginPath()
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }

      animationId = requestAnimationFrame(drawFrame)
    }

    img.onload = () => {
      drawFrame()
    }

    if (img.complete) {
      drawFrame()
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'brightness(0.8) contrast(1.1)' }}
      />

      {/* Light overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(0, 0, 0, 0.3)',
        }}
      />
    </motion.div>
  )
}

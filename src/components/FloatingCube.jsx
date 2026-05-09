import { useEffect, useRef } from 'react'

const FloatingCube = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let rotation = 0

    function drawCube() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const size = 100

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#00f0ff')
      gradient.addColorStop(0.5, '#a855f7')
      gradient.addColorStop(1, '#ec4899')

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Draw cube faces
      ctx.fillStyle = gradient
      ctx.globalAlpha = 0.8
      
      // Front face
      ctx.fillRect(-size/2, -size/2, size, size)
      
      // Add glow effect
      ctx.shadowBlur = 30
      ctx.shadowColor = '#00f0ff'
      ctx.strokeStyle = '#00f0ff'
      ctx.lineWidth = 2
      ctx.strokeRect(-size/2, -size/2, size, size)

      ctx.restore()

      rotation += 0.01
      requestAnimationFrame(drawCube)
    }

    drawCube()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  )
}

export default FloatingCube

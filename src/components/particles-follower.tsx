import {h, useEffect, useRef, useState } from "../core/roboto.js";


interface CursorLightProps {
  mousePosition: { x: number; y: number }
}

export default function CursorLight({ mousePosition }: CursorLightProps) {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const prevMousePosition = useRef({ x: 0, y: 0 })
  const moveSpeedRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)

  // Initialize light position
  useEffect(() => {
    setLightPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })
    prevMousePosition.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
  }, [])

  // Smooth light movement with easing
  useEffect(() => {
    // Calculate movement speed
    const dx = mousePosition.x - prevMousePosition.current.x
    const dy = mousePosition.y - prevMousePosition.current.y
    moveSpeedRef.current = Math.sqrt(dx * dx + dy * dy)

    // Update previous position
    prevMousePosition.current = { ...mousePosition }

    // Set moving state for visual effects
    if (moveSpeedRef.current > 1) {
      setIsMoving(true)
      // Reset the moving state after a delay
      clearTimeout(window.setTimeout as any)
      setTimeout(() => setIsMoving(false), 100)
    }

    // Animation function for smooth following
    const animateLight = () => {
      setLightPosition((current:any) => {
        // Calculate distance to target
        const dx = mousePosition.x - current.x
        const dy = mousePosition.y - current.y

        // Easing factor - faster when cursor moves quickly
        const easeFactor = Math.min(0.1 + moveSpeedRef.current / 500, 0.3)

        // Apply easing
        return {
          x: current.x + dx * easeFactor,
          y: current.y + dy * easeFactor,
        }
      })

      animationFrameRef.current = requestAnimationFrame(animateLight)
    }

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animateLight)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition])

  // Calculate light size based on movement speed
  const lightSize = isMoving ? Math.min(200 + moveSpeedRef.current * 1.5, 350) : 250

  // Calculate light intensity based on movement speed
  const lightIntensity = isMoving ? Math.min(0.7 + moveSpeedRef.current * 0.005, 0.9) : 0.7

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main light glow */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${lightPosition.x}px`,
          top: `${lightPosition.y}px`,
          width: `${lightSize}px`,
          height: `${lightSize}px`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(14, 165, 233, 0.5) 30%, rgba(2, 132, 199, 0.2) 60%, transparent 80%)",
          opacity: lightIntensity,
          filter: "blur(30px)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />

      {/* Brighter center */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${lightPosition.x}px`,
          top: `${lightPosition.y}px`,
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(125, 211, 252, 0.7) 50%, transparent 100%)",
          boxShadow: "0 0 20px 5px rgba(56, 189, 248, 0.7)",
          filter: "blur(5px)",
        }}
      />

      {/* Subtle outer glow for wider illumination */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${lightPosition.x}px`,
          top: `${lightPosition.y}px`,
          width: `${lightSize * 2}px`,
          height: `${lightSize * 2}px`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(14, 165, 233, 0.05) 40%, transparent 70%)",
          filter: "blur(50px)",
          transition: "width 0.5s ease, height 0.5s ease",
        }}
      />
    </div>
  )
}

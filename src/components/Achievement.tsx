import {h, useEffect, useState} from "../core/roboto.js"

export default function AchievementsDashboard({winRate, level, loseRate}: {winRate?: number, level?: number, loseRate?: number}) {
  const [animate, setAnimate] = useState(false)
  
  useEffect(() => {
    setAnimate(true)
  }, [])
  
  return (
    <div className="w-full max-w-lg p-6 rounded-3xl bg-[#0a0b34] text-white">
      <h2 className="text-lg font-normal mb-4">Achievements</h2>
      <div className="flex justify-between items-center gap-3">
        <ProgressCircle percentage={winRate ?? 0} color="cyan" label="Win" animate={animate} />
        <ProgressCircle percentage={level ?? 0} color="fuchsia" label="Level" animate={animate}  />
        <ProgressCircle percentage={loseRate ?? 0} color="red" label="Lose" animate={animate}  />
      </div>
    </div>
  )
}

interface ProgressCircleProps {
  percentage: number
  color: "cyan" | "fuchsia" | "red"
  label: string
  animate: boolean
  delay?: number
}

function ProgressCircle({ percentage, color, label, animate, delay = 0 }: ProgressCircleProps) {
  const [displayPercentage, setDisplayPercentage] = useState(0)
  
  const colorMap = {
    cyan: {
      bg: "rgba(0, 255, 255, 0.2)",
      border: "rgb(0, 255, 255)",
      glow: "0 0 15px rgba(0, 255, 255, 0.8)",
      text: "text-cyan-400",
      pulseClass: "pulse-cyan"
    },
    fuchsia: {
      bg: "rgba(255, 0, 255, 0.2)",
      border: "rgb(255, 0, 255)",
      glow: "0 0 15px rgba(255, 0, 255, 0.8)",
      text: "text-fuchsia-500",
      pulseClass: "pulse-fuchsia"
    },
    red: {
      bg: "rgba(255, 0, 0, 0.2)",
      border: "rgb(255, 0, 0)",
      glow: "0 0 15px rgba(255, 0, 0, 0.8)",
      text: "text-red-500",
      pulseClass: "pulse-red"
    },
  }

  useEffect(() => {
    if (animate) {
      // Delay the start of the animation based on the delay prop
      const timer = setTimeout(() => {
        // Animate the percentage counter
        let start = 0
        const duration = 800 // ms
        const increment = percentage / (duration / 20) 
        
        const counter = setInterval(() => {
          start += increment
          if (start >= percentage) {
            setDisplayPercentage(percentage)
            clearInterval(counter)
          } else {
            setDisplayPercentage(Math.floor(start))
          }
        }, 16)
        
        return () => clearInterval(counter)
      }, delay * 2000)
      
      return () => clearTimeout(timer)
    }
  }, [animate, percentage, delay])

  // Calculate the rotation for the progress
  const rotation = animate ? displayPercentage * 3.6 : 0 // 3.6 = 360 / 100

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-[100px] h-[100px] flex items-center justify-center">
        {/* Background glow */}
        <div
          className={`absolute w-full h-full rounded-full ${colorMap[color].pulseClass}`}
          style={{
            background: `radial-gradient(circle, ${colorMap[color].bg} 0%, rgba(10, 11, 52, 0) 70%)`,
            opacity: animate ? 1 : 0,
            transition: `opacity 0.5s ease ${delay}s`
          }}
        />

        {/* Progress circle container */}
        <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center relative">
          {/* Background circle */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "8px solid rgba(255, 255, 255, 0.05)",
            }}
          />

          {/* Progress circle with animation */}
          <div
            className={`absolute inset-0 rounded-full ${colorMap[color].pulseClass}`}
            style={{
              background: `conic-gradient(${colorMap[color].border} 0deg ${rotation}deg, transparent ${rotation}deg 360deg)`,
              clipPath: "circle(50%)",
              boxShadow: colorMap[color].glow,
              filter: "drop-shadow(0 0 8px " + colorMap[color].border + ")",
              transition: animate ? `all 1.5s cubic-bezier(0.12, 0.93, 0.12, 0.93) ${delay}s` : "none"
            }}
          />

          {/* Mask to create the ring effect */}
          <div className="absolute inset-[8px] rounded-full bg-[#0a0b34] z-10" />

          {/* Content */}
          <div className="z-20 flex flex-col items-center">
            <span 
              className={`text-lg font-bold ${colorMap[color].text}`}
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(10px)",
                transition: `all 0.5s ease ${delay + 0.5}s`
              }}
            >
              {displayPercentage}%
            </span>
            <span 
              className="text-sm text-gray-300"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(10px)",
                transition: `all 0.5s ease ${delay + 0.7}s`
              }}
            >
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

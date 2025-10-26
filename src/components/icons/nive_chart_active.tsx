import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

function NivoChartActive() {
  // Calculate the circumference of the circle
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  
  // Split into 4 equal parts
  const quarterCircle = circumference / 4;
  
    const { resolvedTheme } = useTheme()
     const [mounted, setMounted] = useState(false)
     
     useEffect(() => {
       setMounted(true)
     }, [])
     
      const iconColor = mounted 
       ? (resolvedTheme === "dark" ? "#fff" : "#000") 
       : "currentColor"
       
  


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" role="img" aria-label="Circle ring split into four colors with a black n">
      {/* Yellow segment (first quarter) */}
      <circle
        cx="100" cy="100" r="80"
        fill="none"
        stroke="#FFD700" // Yellow
        strokeWidth="20"
        strokeLinecap="butt"
        strokeDasharray={`${quarterCircle} ${circumference - quarterCircle}`}
        strokeDashoffset="0"
        transform="rotate(-90 100 100)"
      />
      
      {/* Orange segment (second quarter) */}
      <circle
        cx="100" cy="100" r="80"
        fill="none"
        stroke="#FFA500" // Orange
        strokeWidth="20"
        strokeLinecap="butt"
        strokeDasharray={`${quarterCircle} ${circumference - quarterCircle}`}
        strokeDashoffset={`${-quarterCircle}`}
        transform="rotate(-90 100 100)"
      />
      
      {/* Light green segment (third quarter) */}
      <circle
        cx="100" cy="100" r="80"
        fill="none"
        stroke="#90EE90" // Light green
        strokeWidth="20"
        strokeLinecap="butt"
        strokeDasharray={`${quarterCircle} ${circumference - quarterCircle}`}
        strokeDashoffset={`${-quarterCircle * 2}`}
        transform="rotate(-90 100 100)"
      />
      
      {/* Cyan segment (fourth quarter) */}
      <circle
        cx="100" cy="100" r="80"
        fill="none"
        stroke="#00FFFF" // Cyan
        strokeWidth="20"
        strokeLinecap="butt"
        strokeDasharray={`${quarterCircle} ${circumference - quarterCircle}`}
        strokeDashoffset={`${-quarterCircle * 3}`}
        transform="rotate(-90 100 100)"
      />
      
      {/* Transparent inner circle */}
      <circle cx="100" cy="100" r="60" fill="transparent" />

      {/* Centered "n" */}
      <text 
        x="100" 
        y="110" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif" 
        fontWeight="700"
        fontSize="120" 
        fill={iconColor}
      >
        n
      </text>
    </svg>
  )
}

export default NivoChartActive
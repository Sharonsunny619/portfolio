import React from 'react'

function SizzyActive() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24"
    >
      {/* Violet square background */}
      <rect 
        x="0" 
        y="0" 
        width="24" 
        height="24" 
        rx="3" 
        ry="3" 
        fill="#8A2BE2" 
      />
      
      {/* White capital S */}
      <text 
        x="12" 
        y="17.5" 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fontWeight="bold" 
        fill="#FFFFFF" 
        textAnchor="middle" 
        dominantBaseline="middle"
      >
        S
      </text>
    </svg>
  )
}

export default SizzyActive
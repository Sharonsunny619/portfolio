import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function Projects() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
   const iconColor = mounted 
    ? (resolvedTheme === 'dark' ? 'white' : 'black') 
    : 'currentColor' 
  
  return (
    <svg 
      width="28px" 
      height="28px" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-200"
    >
      <path 
        d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"
        fill={iconColor}
      />
      <path fill="none" d="M0 0h24v24H0z"/>
    </svg>
  )
}
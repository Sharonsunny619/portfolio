import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function ZitadelInactive() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use dynamic fill color based on theme
  const iconColor = mounted 
    ? (resolvedTheme === 'dark' ? 'white' : 'black') 
    : 'currentColor';
    
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="28" 
      height="28" 
      viewBox="0 0 24 24"
      className="transition-colors duration-200 mb-1 ml-1"
      style={{ transform: 'rotate(15deg)' }}
    >
      <path 
        fill={iconColor} 
        d="M1 21L11.5 2.81L22 21zm19.27-1L11.5 4.81L2.73 20z"
      />
    </svg>
  )
}

export default ZitadelInactive
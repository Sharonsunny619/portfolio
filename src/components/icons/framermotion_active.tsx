import React from 'react'

function FramerMotionActive() {
  return (
    <div className="bg-yellow-300 p-[2px] rounded-md flex items-center justify-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
      >
        <path 
          fill="none" 
          stroke="#000" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
        />
      </svg>
    </div>
  )
}

export default FramerMotionActive
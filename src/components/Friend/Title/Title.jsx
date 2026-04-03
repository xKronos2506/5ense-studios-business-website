import React from 'react'

const Title
 = () => {
  return (
    <div className='relative w-full min-h-130 flex flex-col items-center justify-end pb-10 overflow-hidden'>
      <div className="relative z-10 text-center">
        <p
          className="text-white font-bold text-2xl tracking-[0.3em] uppercase mb-1"
          style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
        >
          THE
        </p>
        <h1
          className="font-black uppercase leading-none"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 6rem)",
            fontFamily: "'Arial Black', Impact, sans-serif",
            letterSpacing: "0.05em",
            textShadow: "0 4px 30px rgba(0,0,0,0.9)",
          }}
        >
          <span className="text-white">FRI</span>
          <span style={{ color: "#00d4a0" }}>E</span>
          <span className="text-white">ND</span>
        </h1>
      </div>
    </div>
  )
}

export default Title

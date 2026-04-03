import React from 'react'

const Content = () => {
  return (
    <div className='min-h-screen bg-[#1F1F21] flex items-center justify-center py-20'>
      <div className='max-w-2xl'>
        <div className="font-mono text-white text-l leading-relaxed mb-8 space-y-3">
          <p>
            At 02:14 AM, emergency services responded to a 911 call from a residential home.
            Upon arrival, paramedics found the victim, Chris, unresponsive. Four "friends" were
            found at the scene.
          </p>
          <p>
            The footage has been recovered. The cloud data is yours to navigate.
          </p>
        </div>

        {/* YouTube video embed placeholder */}
        <div className="relative w-full aspect-video bg-[#1a1a1a] rounded-sm overflow-hidden flex items-center justify-center mb-4 border border-white/10">
          {/* Play button */}
          <button className="flex items-center justify-center w-16 h-12 rounded-xl bg-red-600 hover:bg-red-500 transition-colors shadow-2xl">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Thumbnail carousel */}
        <div className="flex items-center gap-2">
          {/* Left arrow */}
          <button className="text-white/60 hover:text-white text-xl font-bold px-1">‹</button>

          {/* Thumbnails */}
          <div className="flex gap-2 flex-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-1 aspect-video bg-[#1a1a1a] border border-white/10 rounded-sm"
              />
            ))}
          </div>

          {/* Right arrow */}
          <button className="text-white/60 hover:text-white text-xl font-bold px-1">›</button>
        </div>
      </div>
    </div>
  )
}

export default Content
import React from 'react'

const AboutContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#1F2021]">
      <div className="max-w-4xl">
        <h2 className="text-xl md:text-5xl font-medium text-white mb-4">
          Experience real games with
        </h2>

        <h1 className="text-5xl md:text-8xl font-extrabold text-orange-500 mb-6">
          5ENSE STUDIOS.
        </h1>

        <p className="text-white text-2xl md:text-xl leading-relaxed">
          A collective of unique individuals, 5ENSE STUDIOS merges different talents across
          film, music, and design to enhance how{" "}
          <span className="text-orange-500 italic">you</span> navigate digital experiences.
        </p>
      </div>
    </div>
  )
}

export default AboutContent
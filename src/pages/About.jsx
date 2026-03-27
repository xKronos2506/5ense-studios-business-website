import React from 'react'

//compoenent imports
import Text from '../components/About/Hero/HeroText.jsx';
import Content from '../components/About/Content/AboutContent.jsx';
import Team from '../components/About/Team/Team.jsx';


//asset imports
import BGvideo from '../assets/videos/bg-home.mp4'


const About = () => {
  return (
    <div className='relative min-h-screen'>
      <video 
      className='fixed top-0 left-0 w-full h-full object-cover bg -z-10'
      autoPlay
      loop
      muted
      playsInline
      src={BGvideo}
      />

      <div className="fixed top-0 left-0 w-full h-full bg-gray-900/70 -z-10"></div>

      <div className=''>
        <Text />
        <Content />
        <Team />
      </div>
    </div>


  )
}

export default About
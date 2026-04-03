import React from 'react'

import BGVideo from '../assets/videos/bg-home.mp4'

import Title from '../components/Friend/Title/Title.jsx';
import Content from '../components/Friend/Content/Content.jsx';
import Game from '../components/Friend/Game/Game.jsx';
const Friend = () => {
  return (
    <div className='min-h-screen'>
        <video 
        className='fixed top-0 left-0 w-full h-full object-cover bg -z-10'
        autoPlay
        loop
        muted
        playsInline
        src={BGVideo}
        />
        <Title />
        <Content />
        <Game />
    </div>
  )
}

export default Friend
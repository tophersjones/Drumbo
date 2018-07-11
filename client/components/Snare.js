import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Sound from 'react-sound'

const soundFile = 'https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Kick.mp3'

// import { SoundManager } from '../../node_modules/soundmanager2';

const Snare = () => {
  return (
    <div>
    <h1>Snare</h1>
      <Sound 
        autoLoad={true}
        url={soundFile}
        playStatus={Sound.status.PLAYING}
        />
    </div>
  )
}


export default Snare
import React from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'

const soundFile = 'https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Snare.mp3'

const Snare = (props) => {
  const playIt = props.hits.includes(props.activeCell)
  return (
    <div>
    {
      playIt &&
      <Sound 
        autoLoad={true}
        url={soundFile}
        playStatus={Sound.status.PLAYING}
        />
    }
    </div>
  )
}

const mapState = state => {
  return {
    hits: state.instruments.snare
  }
}

export default connect(mapState, null)(Snare)
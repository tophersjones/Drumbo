import React from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'

const soundFile = 'https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531254315/Hat.mp3'

const Hat = (props) => {
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
    hits: state.instruments.hat
  }
}

export default connect(mapState, null)(Hat)
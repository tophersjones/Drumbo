import React, { Component } from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'

const soundFile = 'https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531254315/Snare.mp3'

class Snare extends Component {
  constructor () {
    super()
    this.state = {
      sounds: []
    }
  }

  handleChange = () => {
    console.log('CHAAANCGE')
    this.setState({
      sounds: this.state.sounds.concat({ url: soundFile })
    })
  }
 
  render() {

    const playIt = this.props.hits.includes(this.props.activeCell)
    // playIt && this.handleChange()
    // console.log(playIt)

    return (
      <div>
      {
        playIt &&
        <Sound 
          url={soundFile}
          playStatus={Sound.status.PLAYING}
          />
      }
      </div>
    )
  }
}

const mapState = state => {
  return {
    hits: state.instruments.snare
  }
}

export default connect(mapState, null)(Snare)
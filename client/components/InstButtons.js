import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchInstrumentThunk } from '../store/currentInst';

class InstButtons extends Component {

  handleClick = (event) => {
    this.props.switchInst(event.target.getAttribute('value'))
    event.target.setAttribute('selected', true) //
    console.log(event.target)
  }

  render() {
    return (
      <div id="instrument buttons">
        <button 
          type="submit"
          onClick={this.handleClick}
          value='https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Snare.mp3' >
          Snare
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value='https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Kick.mp3' >
          Kick Drum
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value='https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Floor.mp3' >
          Floor Tom
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value='https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Rack.mp3' >
          Rack Tom
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value='https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Hat.mp3' >
          Hi-Hat
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value='https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Ride.mp3' >
          Ride
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value='https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Crash.mp3' >
          Crash
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentInstrument: state.currentInstrument
  }
}

const mapDispatch = dispatch => {
  return {
    switchInst: (instStr) => dispatch(switchInstrumentThunk(instStr))
  }
}

export default connect(mapState, mapDispatch)(InstButtons)
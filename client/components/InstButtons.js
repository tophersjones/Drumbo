import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchInstrumentThunk } from '../store/currentInst';

class InstButtons extends Component {

  handleClick = (event) => {
    this.props.switchInst(event.target.getAttribute('value'))
  }

  render() {
    return (
      <div id="instrument buttons">
        <button
          type="submit"
          onClick={this.handleClick}
          value="snare" >
          Snare
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value="kick" >
          Kick Drum
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value="floor" >
          Floor Tom
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value="rack" >
          Rack Tom
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value="hat" >
          Hi-Hat
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value="ride" >
          Ride
        </button>
        <button
          type="submit"
          onClick={this.handleClick}
          value="crash" >
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
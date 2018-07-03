import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const snare = new Audio ()
snare.src = "snare 1 open hard.wav"

class Snare extends Component {
  constructor() {
    super()
  }

  render() {
    snare.play()
    return (
    <div>
    <h1>Snare</h1>

    </div>
  )

  }
}

export default Snare
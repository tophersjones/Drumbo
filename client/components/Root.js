import React, { Component } from 'react'
// import styles from '../../public/style'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const snare = new Audio ()
snare.src = "./snare 1 open hard.wav"

export default class UserHome extends Component {
  constructor() {
    super()
    this.state = {
      tempo: 120,
      activeCell: 0,
      tempoInMs: 180,
      intervalId: '',
      isGoing: false
    }
    this.iterateFunc = this.iterateFunc.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInputChange = (event) => {
    this.setState({ tempo: event.target.value })

  }

  startIterator = (event) => {
    event.preventDefault()
    snare.play()
    this.iterateFunc()
    this.setState({isGoing: true})
    
  } 

  stopIterator = (event) => {
    event.preventDefault()
    clearInterval(this.state.intervalId)
    this.setState({isGoing: false})
  }

  setTempo = (event) => {
    event.preventDefault()
    const bpmToMs = 15000 / event.target.value;
    this.setState({tempoInMs: bpmToMs})
    console.log(`tempo updated to ${bpmToMs} ms`)

  }

  iterateFunc =  function() {
    let cell = -1
    this.setState({intervalId: setInterval(  () => {
       this.setState({
         activeCell: (++cell) % 16
       })
    }, this.state.tempoInMs)
    })
  }

  handleClick = function(event) {
    const cell = event.currentTarget
    if (cell.classList.contains("active")) {
      cell.classList.remove("active")
    } else {
      cell.classList.add("active")
    }
  }

  render() {
    const iterator = [
      { active: 0, id: 0 },
      { active: 0, id: 1 },
      { active: 0, id: 2 },
      { active: 0, id: 3 },
      { active: 0, id: 4 },
      { active: 0, id: 5 },
      { active: 0, id: 6 },
      { active: 0, id: 7 },
      { active: 0, id: 8 },
      { active: 0, id: 9 },
      { active: 0, id: 10 },
      { active: 0, id: 11 },
      { active: 0, id: 12 },
      { active: 0, id: 13 },
      { active: 0, id: 14 },
      { active: 0, id: 15 },
    ]

    iterator.map((cell) => {
      cell.id === this.state.activeCell ?
      cell.active = 1 :
      cell.active = 0
    })

    return (

      <div id="container">
        <h3>Welcome</h3>
          <table id="iterator">
            <tbody>
              <tr>
            { 
              iterator.map(cell => 
                (cell.active ?
                  (
                  <td 
                  key={cell.id} 
                  id="drumbo" 
                  value={cell.id}
                  onClick={this.handleClick} />
                ) : (
                <td 
                  key={cell.id} 
                  id="cell" 
                  value={cell.id}
                  onClick={this.handleClick} />
                )
              ))
            }
              </tr>
            </tbody>
          </table>
        <div id="buttons">
          <form>
            <label>
              Set Tempo (BPM):
                <input 
                  name="tempo"
                  type="number"
                  min="44"
                  max="266"
                  value={this.state.tempo}
                  onChange={this.handleInputChange} />
            </label>
              <br />
            <button 
              type="submit"
              value={this.state.tempo}
              onClick={this.setTempo}
            >
            Set
            </button>
          </form>
            <br />
          <button
            type="submit"
            value="Start"
            disabled={this.state.isGoing}
            onClick={this.startIterator} >
              Start
          </button>
            <br />
          <button
            type="submit"
            value="Stop"
            disabled={!this.state.isGoing}
            onClick={this.stopIterator} >
            Stop
          </button>
        </div>
        <div>{this.state.activeCell + 1}</div>
      </div>
    )
  }

  }

/**
 * CONTAINER
 */

// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(UserHome)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }

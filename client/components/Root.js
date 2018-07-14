import React, { Component } from 'react'
// import styles from '../../public/style'
import Snare from './instruments/Snare'
import Kick from './instruments/Kick'
import Floor from './instruments/Floor'
import Rack from './instruments/Rack'
import Hat from './instruments/Hat'
import Ride from './instruments/Ride'
import Crash from './instruments/Crash'
import { connect } from 'react-redux'
import InstButtons from './InstButtons'
import { armInstrumentThunk, disarmInstrumentThunk } from '../store/instruments';

class Root extends Component {
  constructor () {
    super()
    this.state = {
      tempo: 120,
      activeCell: 0,
      tempoInMs: 180,
      intervalId: '',
    }
  }

  handleInputChange = (event) => {
    this.setState({ tempo: event.target.value })
  }

  startIterator = (event) => {
    event.preventDefault()
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

  iterateFunc = () => {
    let cell = -1
    this.setState({intervalId: setInterval( () => {
       this.setState({
         activeCell: (++cell) % 16
       })
    }, this.state.tempoInMs)
    })
  }

  handleClick = (event) => {
    const cell = event.currentTarget
    const cellId = Number(event.target.getAttribute('value'))
    const instrument = this.props.currentInstrument
    if (cell.classList.contains("active")) {
      cell.classList.remove("active")
      this.props.disarmInst(cellId, instrument)
    } else {
      cell.classList.add("active")
      this.props.armInst(cellId, instrument)
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

    // const playIt = this.state.isArmed.includes(this.state.activeCell)

    return (
      <div id="container">
        <Snare activeCell={this.state.activeCell}/>
        <Kick activeCell={this.state.activeCell}/>
        <Floor activeCell={this.state.activeCell}/>
        <Rack activeCell={this.state.activeCell}/>
        <Hat activeCell={this.state.activeCell}/>
        <Ride activeCell={this.state.activeCell}/>
        <Crash activeCell={this.state.activeCell}/>
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
              ) 
            )
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
        <InstButtons />
        <div>{this.state.activeCell + 1}</div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentInstrument: state.currentInst.selectedInstrument
  }
}

const mapDispatch = dispatch => {
  return {
    armInst: (cellId, instrument) => dispatch(armInstrumentThunk(cellId, instrument)),
    disarmInst: (cellId, instrument) => dispatch(disarmInstrumentThunk(cellId, instrument)),
  }
}

export default connect(mapState, mapDispatch)(Root)
/**
 * ACTION TYPES
 */

const ARM_INSTRUMENT = 'ARM_INSTRUMENT'
const DISARM_INSTRUMENT = 'DISARM_INSTRUMENT'

/**
 * INITIAL STATE
 */

const initialState = {
    // snare: [],
    // kick: [],
    // floor: [],
    // rack: [],
    // hat: [],
    // ride: [],
    // crash: []
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
}

/**
 * ACTION CREATORS
 */

const armInstrumentAction = (cellId, instrument) => {
  return {
    type: ARM_INSTRUMENT,
    cellId,
    instrument
  }
}

const disarmInstrumentAction = (cellId, instrument) => {
  return {
    type: DISARM_INSTRUMENT,
    cellId,
    instrument
  }
}

/**
 * THUNK CREATORS
 */

export const armInstrumentThunk = (cellId, instrument) => {
  return dispatch => {
    const action = armInstrumentAction(cellId, instrument)
    dispatch(action)
  }
}

export const disarmInstrumentThunk = (cellId, instrument) => {
  return dispatch => {
    const action = disarmInstrumentAction(cellId, instrument)
    dispatch(action)
  }
}

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case ARM_INSTRUMENT:
      const inst = action.instrument
      return { ...state, [inst]: [...state[inst], action.cellId] }
    case DISARM_INSTRUMENT:
      const filteredArr = state[action.instrument].filter(num => num !== action.cellId)
      return { ...state, [action.instrument]: filteredArr }
    default:
      return state
  }
}

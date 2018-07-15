// /**
//  * ACTION TYPES
//  */

// const START_ITERATOR = 'START_ITERATOR'
// const STOP_ITERATOR = 'STOP_ITERATOR'
// const SET_TEMPO = 'SET_TEMPO'

// /**
//  * INITIAL STATE
//  */

// const initialState = {
//   activeCell: 0,
// }

// /**
//  * ACTION CREATORS
//  */

// const startIteratorAction = (tempoInMs) => {
//   return {
//     type: ARM_INSTRUMENT,
//     cellId,
//     instrument
//   }
// }

// const disarmInstrumentAction = (cellId, instrument) => {
//   return {
//     type: DISARM_INSTRUMENT,
//     cellId,
//     instrument
//   }
// }

// /**
//  * THUNK CREATORS
//  */

// export const armInstrumentThunk = (cellId, instrument) => {
//   return dispatch => {
//     const action = armInstrumentAction(cellId, instrument)
//     dispatch(action)
//   }
// }

// export const disarmInstrumentThunk = (cellId, instrument) => {
//   return dispatch => {
//     const action = disarmInstrumentAction(cellId, instrument)
//     dispatch(action)
//   }
// }

// /**
//  * REDUCER
//  */

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case ARM_INSTRUMENT:
//       const inst = action.instrument
//       return { ...state, [inst]: [...state[inst], action.cellId] }
//     case DISARM_INSTRUMENT:
//       const filteredArr = state[action.instrument].filter(num => num !== action.cellId)
//       return { ...state, [action.instrument]: filteredArr }
//     default:
//       return state
//   }
// }

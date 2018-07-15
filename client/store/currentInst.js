
const SWITCH_INSTRUMENT = 'SWITCH_INSTRUMENT'

const initialState = {
  selectedInstrument: { url: 'https://res.cloudinary.com/dl7gzlb0w/video/upload/v1531265492/Snare.mp3' }
}

const switchInstrumentAction = (instStr) => {
  return {
    type: SWITCH_INSTRUMENT,
    instStr: { url: instStr }
  }
}

export const switchInstrumentThunk = (instStr) => {
  return dispatch => {
    const action = switchInstrumentAction(instStr)
    dispatch(action)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SWITCH_INSTRUMENT:
      return { ...state, selectedInstrument: action.instStr }
    default: 
      return state
  }
}
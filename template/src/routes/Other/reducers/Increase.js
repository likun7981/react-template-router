import { handleActions, createAction } from 'redux-actions'

export const increase = createAction('@other/increate', (count = 1) => count)

export const doubleAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increase(getState().increase))
  }, 1200)
}

const reducerMaps = {
  [increase]: (state, action) => state + action.payload,
}

const initState = 0

export default handleActions(reducerMaps, initState)

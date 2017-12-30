import createReducers from 'utils/creators'

const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
/**
 * [incrementBase description]
 * @param  {Number} value [description]
 * @return {[type]}       [description]
 */
const increaseBase = (value: number = 1) => ({
  type: COUNTER_INCREMENT,
  payload: value,
})

/**
 * actions for this reducer
 */
const doubleAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increaseBase(getState().increaseResult))
  }, 1200)
}
const increase = increaseBase

export const actionCreatorMaps = {
  increase,
  doubleAsync,
}

const reducerMaps = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
}

const initState = 0

export default createReducers(reducerMaps, initState)

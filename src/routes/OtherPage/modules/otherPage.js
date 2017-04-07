import { browserHistory } from 'react-router'
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'
export const COUNTER_HALF_ASYNC = 'COUNTER_HALF_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function decrement (value = 1) {
  return {
    type    : COUNTER_DECREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const halfAsync = () => {
  return (dispatch, getState) => {
    dispatch({
      type    : COUNTER_HALF_ASYNC,
      payload : getState().otherPage
    })
    browserHistory.push('/counter')
  }
}

export const actions = {
  decrement,
  halfAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_DECREMENT]    : (state, action) => state - action.payload,
  [COUNTER_HALF_ASYNC] : (state, action) => state * 0.5
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 5
export default function otherPageReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

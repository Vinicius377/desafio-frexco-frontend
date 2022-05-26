import types from './types'

function increment(id: string) {
  return {
    type: types.INCREMENT,
    payload: {
      id,
    },
  }
}
function decrement(id: string) {
  return {
    type: types.DECREMENT,
    payload: {
      id,
    },
  }
}

export { increment, decrement }

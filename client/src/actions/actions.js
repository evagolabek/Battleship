import { ADD_BOAT, BOAT_COMPLETED } from './types'


export const addBoat = (row, col, boat) => ({
  type: ADD_BOAT,
  payload: {
    row,
    col,
    boat
  }
})

export const boatCompleted = () => ({
  type: BOAT_COMPLETED,
})

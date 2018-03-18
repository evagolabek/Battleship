import { CLICK } from './types'

export const doClick = (row, col) => ({
  type: CLICK,
  payload: {
    row,
    col
  }
})

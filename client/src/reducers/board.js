import { CLICK } from '../actions/types'

const emptyBoard = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

export default (state = emptyBoard, {type, payload } = {}) => {
  switch (type) {
    case CLICK:
      return state.map((thisRow, rowIndex) => {
        if (rowIndex !== payload.row) return thisRow

        return thisRow.map((thisValue, colIndex) => {
          if (colIndex !== payload.col) return thisValue

          switch (thisValue) {
            case 0: return 1
            default: return 0
          }
        })
      })

    default:
      return state
  }
}

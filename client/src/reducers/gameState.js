import { BOAT_COMPLETED } from '../actions/types'


export default (state = "addBoat1", { type, payload } = {}) => {
  switch (type) {
    case BOAT_COMPLETED:
      switch(state) {
        case "addBoat1": return "addBoat2"
        case "addBoat2": return "addBoat3"
        case "addBoat3": return "addBoat4"
        case "addBoat4": return "addBoat5"
        default: return "state unknown"
      }

    default:
      return state

  }
}

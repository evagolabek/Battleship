import { NEXT_STATE } from '../actions/types'

export default (state = "addBoats", {type, payload } = {}) => {
  switch(type) {
    case NEXT_STATE:
      return state

    default:
      return state
  }
}

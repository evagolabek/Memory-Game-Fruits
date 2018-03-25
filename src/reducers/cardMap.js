import {CREATE_GAME} from '../actions/game'

const emptyBoard = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]

export default (state = emptyBoard, {type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME:
      return [].concat(payload.cardMap)

    default:
      return state
  }
}

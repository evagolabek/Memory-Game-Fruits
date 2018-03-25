import {FLIP_CARD, CREATE_GAME} from '../actions/game'

const emptyBoard = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]

export default (state = emptyBoard, {type, payload } = {}) => {
  switch (type) {
    case FLIP_CARD:
      return state.map((row,rowIndex) => {
        if (rowIndex !== payload.row) return row
        return row.map((value, colIndex) => {
         if (colIndex !== payload.col) return value
         return 1
        })
      })
    case CREATE_GAME:
      return [].concat(payload.flipMap)

    default:
      return state
  }
}

import {fillMaps} from '../libs/game'
export const FLIP_CARD = 'FLIP_CARD'
export const CREATE_GAME = 'CREATE_GAME'

export const flipCard = (row, col) => ({
  type: FLIP_CARD,
  payload: {row, col}
})

export const createGame = (nRow, nCol) => {
  const [cardMap, flipMap] = fillMaps(nRow, nCol)
  return {
    type: CREATE_GAME,
    payload: {cardMap, flipMap}
  }
}

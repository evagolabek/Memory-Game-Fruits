// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function fillMaps(nRows, nCols) {
  const nCards = nRows * nCols / 2

  let cardArray = []
  for (let i = 1; i <= nCards; i++) {
    cardArray.push(i)
    cardArray.push(i)
  }
  cardArray = shuffle(cardArray)

  let cardMap = new Array(nRows).fill(0).map(() => new Array(nCols).fill(0))
  let flipMap = new Array(nRows).fill(0).map(() => new Array(nCols).fill(0))

  cardMap = cardMap.map((row, rowIndex) => row.map((val, colIndex) => cardArray[(rowIndex * nCols) + colIndex] ))

  return [cardMap, flipMap]
}

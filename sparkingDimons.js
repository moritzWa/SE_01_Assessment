let board = [1, 2, 3, 5, 4, 4, 5, 4, 5, 3, 4, 3, 2, 1, 2, 3]
let board2 = [1, 2, 3, 5, 4, 4, 5, 4, 5, 3, 4, 3, 3, 5, 3, 3]

//---------//----------//----------//----------//----------//

const swapIndex1 = 6
const swapIndex2 = 10

const swapIndex1b2 = 9
const swapIndex2b2 = 13

const checkIfLegalMove = (board, swapIndex1, swapIndex2) => {
  //swapping
  let tempo = board[swapIndex2]
  board[swapIndex2] = board[swapIndex1]
  board[swapIndex1] = tempo

  //check horizontal
  for (let i = 0; i < 16; i += 4) {
    if (
      (board[i] === board[i + 1] &&
        board[i + 1] === board[i + 2] &&
        board[i + 2] === board[i + 3]) ||
      (board[i + 1] === board[i + 2] &&
        board[i + 2] === board[i + 3] &&
        board[i + 3] === board[i + 4])
    ) {
      console.log(`legal move, in horizontal line ${i / 4 + 1}`)
      return true
    }
  }
  //check vertical
  for (let i = 0; i < 16; i += 4) {
    if (
      (board[i] === board[i + 4] &&
        board[i + 4] === board[i + 8] &&
        board[i + 8] === board[i + 12]) ||
      (board[i + 4] === board[i + 8] &&
        board[i + 8] == board[i + 12] &&
        board[i + 12] === board[i + 16])
    ) {
      console.log(`legal move, in vertical line ${i / 4 + 1}`)
      return true
    }
  }
}

checkIfLegalMove(board, swapIndex1, swapIndex2)
checkIfLegalMove(board2, swapIndex1b2, swapIndex2b2)

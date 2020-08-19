let board = [1, 2, 3, 4, 4, 5, 5, 3, 4]

const swapIndex1 = 5
const swapIndex2 = 8

const checkIfLegalMove = (board, swapIndex1, swapIndex2) => {
  console.log(board)
  //swapping
  let tempo = board[swapIndex2]
  board[swapIndex2] = board[swapIndex1]
  board[swapIndex1] = tempo
}

checkIfLegalMove(board, swapIndex1, swapIndex2)

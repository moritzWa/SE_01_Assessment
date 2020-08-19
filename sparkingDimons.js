let board = [1, 2, 3, 4, 4, 5, 5, 3, 4]

const swapIndex1 = 5
const swapIndex2 = 8

const checkIfLegalMove = (board, swapIndex1, swapIndex2) => {
  //swapping
  let tempo = board[swapIndex2]
  board[swapIndex2] = board[swapIndex1]
  board[swapIndex1] = tempo

  //check horizontal
  for (let i = 0; i < 9; i += 3) {
    if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
      console.log(`legal move, in horizontal line ${i}`)
      return true
    }
  }
  //check vertical
  for (let i = 0; i < 9; i += 3) {
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
      console.log(`legal move, in vertical line ${i}`)
      return true
    }
  }
}

checkIfLegalMove(board, swapIndex1, swapIndex2)

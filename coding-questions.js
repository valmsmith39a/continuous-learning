/*
  2 - Dimensional arrays
*/

let arr = []
console.log("arr is ", arr);

let arr2 = [[]]
console.log("arr2 is ", arr2);

// Create a board of rows and columns
// Creating a matrix of m x n dimensions
// m rows and n columns
let board = []
let colArr = []

// 1st dimension of the board is an array of rows
// So for a m x 1 dimension matrix
// 3 x 1 matrix
for (let rows = 0; rows < 3; rows++) {
  board.push("x")
}
console.log("m x 1 dimension matrix is ", board);

// 2nd dimension of the board are array of columns
// So for a 1 x n dimension matrix
let board2 = []
for (let row = 0; row < 1; row++) {
  let colArr = []
  for (let col = 0; col < 3; col++) {
    colArr.push("x")
  }
  board2.push(colArr)
}
console.log("1 x n dimensnion matrix is ", board2);

// m x n dimension matrix
let board3 = []
for (let row = 0; row < 3; row++) {
  let colArr = []
  for (let col = 0; col < 3; col++) {
    colArr.push(col)
  }
  board3.push(colArr)
}
console.log("m x n dimension matrix is ", board3);

console.log("row 1, col 1 is ", board3[0][0]);
console.log("row 1, col 2 is ", board3[0][1]);
console.log("row 1, col 3 is ", board3[0][1]);

console.log("row 2, col 2 is ", board3[1][1]);

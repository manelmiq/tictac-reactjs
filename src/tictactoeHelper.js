const checkWinner = (turn , positions )=>{
  const winnerPositions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4 ,7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  let win = [];
  winnerPositions.forEach(winnerPosition => {
    let checkPosition = true;
    winnerPosition.forEach(position =>{
      if(positions[position - 1] !== turn){
        checkPosition = false;
      }
    });
    if(checkPosition === true){
      win = winnerPosition;
    }
  });
  return win;
}
export default checkWinner;
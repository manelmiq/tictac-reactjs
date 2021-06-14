import React, {useEffect, useState} from "react";
import Board from "./Board";
import checkWinner from '../tictactoeHelper'

const Game = () =>{
  const [positions, setPositions] = useState([])
  const [turn, setTurn] = useState('x')
  const [winner, setWinner] = useState(null);

  useEffect(() =>{
    let increasingPositions = [];
    for (let positionKeys = 1; positionKeys <= 9; positionKeys++ ){
      increasingPositions.push(positionKeys);
    }
    setPositions(increasingPositions);
  }, [])

  const changePositionById = (id) =>{
    let positionCopy = positions;
    positionCopy[id] = turn;
    setPositions(positionCopy);
    let getWinnerPositions = checkWinner(turn, positionCopy);
    if(getWinnerPositions.length === 3){
      setWinner(turn);
      console.log(getWinnerPositions);
    }
    setTurn((turn === 'x') ? 'o' : 'x');
  }

  return(
    <div>
      {turn} to Play!
      <Board positions={positions} setPositions={changePositionById} />
      {winner}
    </div>
  );

}

export default Game;
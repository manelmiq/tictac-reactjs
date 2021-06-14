import React, {useEffect, useState} from "react";
import Board from "./Board";
import checkWinner from '../tictactoeHelper'

const Game = () =>{
  const [positions, setPositions] = useState([])
  const [turn, setTurn] = useState('x')
  const [winner, setWinner] = useState(null);
  const [winnerSquares, setWinnerSquares] = useState([]);

  useEffect(() =>{
    let increasingPositions = [];
    for (let positionKeys = 1; positionKeys <= 9; positionKeys++ ){
      increasingPositions.push(positionKeys);
    }
    setPositions(increasingPositions);
  }, [])

  const changePositionById = (id) =>{
    let positionCopy = positions;
    if(positionCopy[id] ==='x' || positionCopy[id] === 'o'){
      return;
    }
    positionCopy[id] = turn;

    if(winner){
      return;
    }
    let getWinnerPositions = checkWinner(turn, positionCopy);
    if(getWinnerPositions.length === 3){
      setWinner(turn);
      setWinnerSquares(getWinnerPositions);
    }

    setPositions(positionCopy);
    setTurn((turn === 'x') ? 'o' : 'x');
  }



  return(
    <div>
      {!winner && <div>
        {turn} to Play!
      </div>
      }
      <Board positions={positions} setPositions={changePositionById} winnerSquares={winnerSquares} />
      {winner &&   <div>
        Player {winner} is winner
      </div>
      }

    </div>
  );

}

export default Game;
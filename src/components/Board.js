import React, {useEffect, useState} from "react";
import Square from "./Square";


const Board = props =>{
  const {positions, setPositions, winnerSquares} = props;

  useEffect(() =>{
    console.log(props.winnerSquares)
  }, [props.positions, props.setPosition, props.winnerSquares]);

  return(
     <div className="Board">
       { props.positions.map((element, key) =>{
            let isWinnerSquare = props.winnerSquares.includes(key + 1);
            return <Square key={key}
                           id={key}
                           element={element}
                           winnerSquare={isWinnerSquare}
                           changePosition={props.setPositions} />
          })
       }
    </div>
  );
}


export default Board;
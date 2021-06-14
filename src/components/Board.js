import React, {useEffect, useState} from "react";
import Square from "./Square";


const Board = props =>{
  const {positions, setPositions} = props;

  useEffect(() =>{
    console.log(props.setPosition);
  }, [props.positions, props.setPosition]);

  return(
     <div className="Board">
       { props.positions.map((element, key) =>{
            return <Square key={key}
                           id={key}
                           element={element}
                           changePosition={props.setPositions} />
          })
       }
    </div>
  );
}


export default Board;
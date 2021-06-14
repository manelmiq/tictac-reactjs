import React, {useEffect} from "react";

const Square = props =>{

  useEffect( () => {
    console.log(props)
  }, [props.element]);

  return(
    <button className={`squareClass ${props.element === 'x' ? "xSquare" : "oSquare"} ${props.winnerSquare ? 'winnerSquare' : ''} `}
            onClick={(e) => props.changePosition(props.id)}>
      {(props.element === 'x' || props.element === 'o') ? props.element : ' ' }
    </button>
  );
}


export default Square;
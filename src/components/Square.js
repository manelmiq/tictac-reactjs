import React, {useEffect} from "react";

const Square = props =>{

  useEffect( () => {
    console.log(props);
  }, []);

  return(
    <button className="squareClass" onClick={(e) => props.changePosition(props.id)}>
      {(props.element === 'x' || props.element === 'o') ? props.element : ' ' }
    </button>
  );
}


export default Square;
import React from "react";

function Card({number}) {
    return(
        <div className="card" style={{width:"18rem"}}>
  
  <div className="card-body flex-grow-1 bg-dark text-white">
    <h1 className="card-title fs-1">{number}</h1>
  </div>
</div>
    )
}


export default Card;
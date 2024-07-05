import React from "react";
import Card from "./card";

function SecondCounter({number, number2, number3, number4, number5, number6}) {

    return(
        <div className="container-fluid d-flex justify-content-between gap-3 bg-black p-4">
            <Card number="🕗"/>
            <Card number={number6}/>
            <Card number={number5}/>
            <Card number={number4}/>
            <Card number={number3}/>
            <Card number={number2}/>
            <Card number={number}/>
    
        </div>
    )
}

export default SecondCounter;
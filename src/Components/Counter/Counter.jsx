import React, { useState } from "react";

export default function Counter(){
    const [counterData, setCounterData] = useState({
        counter: 0,
    })

    return(
        <div className = 'Counter'>
            <h1>Counter Practice</h1>
            <div>{counterData.counter}</div>
            <hr />
            <button onClick={()=>setCounterData({counter: counterData.counter -1})}>-</button>
            <button onClick={()=>setCounterData({counter: counterData.counter +1})}>+</button>
        </div>
    )
}


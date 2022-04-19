import React, { useState } from "react";

export default function Counter(){
    const [counterData, setCounterData] = useState([])

    return(
        <div className = 'Counter'>
            <div></div>
            <hr />
            <button>-</button>
            <button>+</button>
        </div>
    )
}


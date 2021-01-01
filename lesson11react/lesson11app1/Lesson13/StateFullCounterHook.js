import React,{useState} from 'react';

function StateFullCounterHook(props) {
    const [counter, changeCount ]=useState(0);
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>changeCount(counter+1)}> + </button> 
            <button onClick={()=>changeCount(counter-1)}> - </button> 
        </div>
    );
}

export default StateFullCounterHook;
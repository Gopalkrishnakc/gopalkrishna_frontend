import React, { useReducer } from "react";

const initialValue={ count:0}
const Reducer =(state,action)=> {

switch (action.type) {
    case "Increment":{
            return{count:state.count+1}
       
    }
    case "Dcrement":{
        return{count:state.count-1}
   
}
case "Reset":{
    return{count:0}

}
    default:
        return state;
}
};

const ReducerComp=()=>{
    const [state,dispatcher]=useReducer(Reducer,initialValue);
    return (<div>
       <h1>{state.count}</h1>
       <button onClick={()=>dispatcher({type:"Increment"})}> Increment</button>
       <button onClick={()=>dispatcher({type:"Dcrement"})} >Dcrement</button>
       <button onClick={()=>dispatcher({type:"Reset"})} >Reset</button>
    </div>
    )
}

export default ReducerComp
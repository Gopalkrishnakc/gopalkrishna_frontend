import React, { useContext } from "react";
import { DataContext } from "./Parent";

const GrandSon=()=>{
const[data,setData]=useContext(DataContext);
return(
    <div>
        <h1>{data}</h1>
    <button onClick={()=>setData(data+2)}>Increment</button>
    </div>
)

}
export default GrandSon
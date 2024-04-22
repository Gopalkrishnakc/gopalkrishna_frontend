import React,{ useState} from "react";


const Counter=()=>{
const [count,setCount]=useState(10)

return(
    <div>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count+10)}>Increment10</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
<button onClick={()=>setCount(count-10)}>Decrement-10</button>
<button onClick={()=>setCount(0)}>Reset</button>
    </div>
)
}
export default Counter
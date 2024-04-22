import React,{useState} from "react";
 const Toggle=()=>{
    const[toggle,setToggle]=useState(true)
    const Handler=()=>{
        setToggle(!toggle);
    }
    return(
        <div>
            <button onClick={Handler}>{toggle?('hide content'):('show content')}</button>
            {toggle&&<p>dynamicrendering</p>}
        </div>
    )
}
export default Toggle;
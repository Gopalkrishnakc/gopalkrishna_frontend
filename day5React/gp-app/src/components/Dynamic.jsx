import React from 'react'
 const Dynamic=({isLogged})=>{
return(
   <div>{isLogged?(<p>Welcome</p>):(<p>please do login</p>)}</div>
)
}
export default Dynamic

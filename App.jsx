// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import { useState } from 'react'

function Count(){
     const[count,setCount] = useState(0);
     return(
        <div style={{height:"500px", width:"300px", border: "6px solid white",boxShadow: "0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0"}}> 
        <h1> Counter <p style={{color:"yellow"}}> ( {count} ) </p> </h1>
        <div style={{gap:"20px"}}>
         <button style={{height:"50px",width:"100px",fontSize:"22px",border:"4px solid red",padding:"3px"}} onClick={() => setCount(count + 1)}> + </button> <br /> <br />
         <button style={{height:"50px",width:"100px",fontSize:"22px",border:"4px solid green", padding:"3px"}} onClick={() => setCount(count - 1)}> - </button> <br /> <br />
        <button style={{height:"50px",width:"100px",fontSize:"18px",border:"4px solid yellow", padding:"3px"}} onClick={() => setCount(0)}> Reset </button>
        </div>
       </div>
     )
}

        
        

import { useState } from "react";
import App from "./App.jsx";

function BgSwitch(){
    const [colorMode,setColorMode]=useState("white");
    const toggleColorMode=()=>{
        setColorMode(colorMode==="white"?"black":"white");
    }
    return(
        <>
        <div style={{
            backgroundColor:colorMode,
            color:colorMode==="white"?"black":"white",
            height:"100vh",
            width:"100vh",
            transition:" background-color 0.5s ease , color 0.5s ease",
            textAlign:"center",

         } }>
            
            <h1 style={{
                marginTop:"10px",
                marginBottom:"10px",
                padding:"10px"
            }}> {colorMode==="white"?"This is light mode":"Dark Mode" }</h1>
            <App/>
            <button onClick={toggleColorMode} style={{
                backgroundColor:colorMode==="white"?"black":"white",
                color:colorMode==="white"?"white":"black",
                border:"1px solid blue",
                borderRadius:"20px",
            }}>Toggle Mode</button>
        
        </div>
        </>
    )

}
export default BgSwitch;
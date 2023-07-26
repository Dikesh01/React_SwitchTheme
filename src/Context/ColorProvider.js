import { useState } from "react";
import ColorContext from "./ColorContext";

 let defaultStyle = {
    color:"black",
    backgroundColor:"white",
    textAlign:"left",
    border:"2px solid red"
}

const ColorProvider =(props) =>{

    let [style,setStyle] = useState(defaultStyle);
    

    return(
        <ColorContext.Provider value={
            {style: style,
             whiteMode:()=>setStyle(defaultStyle),
             darkMode:()=>setStyle({...style,
                color:"white",
                backgroundColor:"black",
                textAlign:"center",
                border:"2px solid yellow"
            }),
            blueMode:()=>setStyle({...style,
                color:"green",
                backgroundColor:"lightblue",
                textAlign:"right",
                border:"2px solid green"
            })
        }}
            >

            {props.children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;
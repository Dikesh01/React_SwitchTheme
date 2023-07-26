import React, { useContext } from "react";
import ColorContext from "../Context/ColorContext";

const Hello = () =>{
    let {style,darkMode,blueMode,whiteMode} = useContext(ColorContext);

    return(
        <div>
            <div style={{ 
                color:style.color,
                backgroundColor:style.backgroundColor,
                textAlign: style.textAlign,
                border:style.border
            }}>
                <h1>Hello Kabir</h1>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                
            </div>
            <button onClick={whiteMode}>white Mode</button>
            <button onClick={darkMode}>Dark Mode</button>
            <button onClick={blueMode}>Blue Mode</button>
        </div>
    )
}

export default Hello;
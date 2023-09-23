import React from "react";
export const Scroll = (props) =>{
    return(
        <div style={{
            overflowY:'visible',
            border:'1px solid black',
            height:'500px'


        }}>
            {props.children}
        </div>
    )
}

import React from "react";
export const Header = (props) => {
    return (
        <>
            <div style={{position: '-webkit-sticky', top: 0, padding: '40px'}}>

            </div>
            <div>
                {props.children}

            </div>
        </>
    )

}

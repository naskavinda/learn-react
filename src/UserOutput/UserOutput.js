import React from "react";

const userOutput = props => {
    return (
        <div>
            <p>What's your name?</p>
            <p>I am {props.name}</p>
        </div>
    )
}

export default userOutput;

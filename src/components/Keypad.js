import React from "react";

// Code Keypad Component Here



function handleOnChange(event) {
    console.log('Entering password...');
}



function Keypad() {
    return (
        <input
            type="password"
            name="enter somth"
            placeholder="aha here"
            onChange={handleOnChange}
        />)
}

export default Keypad;
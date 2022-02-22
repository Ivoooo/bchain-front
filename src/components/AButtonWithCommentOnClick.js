import React, {useState} from "react";
import {AButton} from "./AButton";
import {ATextArea} from "./ATextArea";

export const AButtonWithCommentOnClick = ({ txt="Placeholder AButtonWithCommentOnClick" , handleClick=null}) => {
    const [show, toggleShow] = useState(false);

    function change(e) {
        console.log("Clicked on: " + e.target.value);
        toggleShow(!show);
        handleClick(e.target.value);
    }

    return (
        <>
            <AButton txt={txt} onClick={change} isClicked={show} />
            {show && ATextArea()}
        </>
    );
};
import React, {useEffect, useState} from "react";
import {AButton} from "./AButton";
import {ATextArea} from "./ATextArea";

export const AButtonWithCommentOnClick = ({ txt="Placeholder AButtonWithCommentOnClick" , handleClick=null}) => {
    const [answer, setAnswer] = useState("");
    const [notes, setNotes] = useState("");
    const [show, toggleShow] = useState(false);

    useEffect( () => {
        if(answer !== "") handleClick(answer, show, notes)
    }, [answer, handleClick, notes, show])

    function change(e) {
        console.log("Clicked on: " + e.target.value);
        toggleShow(!show);
        setAnswer(e.target.value)
    }

    return (
        <>
            <AButton txt={txt} onClick={(e) => change(e)}  isClicked={show}/>
            {show && <ATextArea txt={"Bitte geben Sie hier Ihren Geschäftsfall an."} saveAnswer={setNotes}/>}
        </>
    );
};
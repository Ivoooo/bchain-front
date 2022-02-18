import {BButton} from "../components/BButton";
import React from "react";
import {ATextArea} from "../components/ATextArea";

export const NotePage = (question, option, handleClick) => {
    question = question.split("\n");
    let q = question[0];
    question.shift();

    return (
        <>
            <h2 className="text-center">{q}</h2>
            {question.map(q =>
                <h4 className="text-center">{q}</h4>
            )}
            {ATextArea("Bitte geben Sie hier Ihren Geschäftsfall an.")}
            <div style={{float: "right", padding: "12px"}}>
                {BButton(option, handleClick, true)}
            </div>
        </>
    )
}
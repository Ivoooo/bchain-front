import {ATextArea} from "../components/ATextArea";
import React from "react";
import {AButton} from "../components/AButton";

export const SingleChoiceQuestion = ({question, option, handleClick}) => {
    //todo decide on if comment is needed. Also update Text area if still needed
    //todo clean up code below

    //convert answer 'option' into an iterable list to be able to apply .map
    let o = [];
    for (let i in option)
        o.push(option[i]);

    let q = question.split("\n");
    return (
        <>
            {q[1] === null ? <h2 className="text-center">{q[0]}</h2>
                : <>
                    <h2 className="text-center">{q[0]}</h2>
                    <h2 className="text-center">{q[1]}</h2>
                </>
            }
            <div className="d-grid gap-2">
                {o.map(x =>
                    <AButton txt={x} onClick={handleClick} />
                )}
            </div>
            <div style={{maxWidth: 800, margin:"auto", padding:10}}>
                {ATextArea("Falls Sie wollen können Sie hier ihre Antwort erläutern.")}
            </div>
        </>
    )
}
import {BButton} from "../components/BButton";
import React from "react";

export const FrontPage = ({question, option, handleClick}) => {
    let q = question.split("\n");
    return (
        <>
            {q.map(qs =>
                <h2 className="text-center">{qs}</h2>
            )}
            <div style={{float: "right"}}>
                {BButton(option, handleClick, true)}
            </div>
        </>
    )
}
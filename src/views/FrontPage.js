import {AButton} from "../components/AButton";
import React from "react";

export const FrontPage = ({question, option, handleClick}) => {
    let q = question.split("\n");
    return (
        <>
            {q.map(qs =>
                <h2 className="text-center">{qs}</h2>
            )}
            <div style={{float: "right"}}>
                <AButton txt={option} onClick={handleClick}/>
            </div>
        </>
    )
}
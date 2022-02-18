import {AButton} from "../components/AButton";
import {BButton} from "../components/BButton";
import React from "react";

export const FrontPage = (question, option, handleClick) => {
    return (
        <>
            <h2 className="text-center">{question}</h2>

            <div style={{float: "right"}}>
                {BButton(option, handleClick, true)}
            </div>
        </>
    )
}
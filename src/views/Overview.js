import React from "react";
import {AButton} from "../components/AButton";

export const Overview = ({question, position, titles, option, handleClick}) => {
    return (
        <>
            <h1 className="text-center">Fortschritt</h1>
            <h2 className="text-center" key={question}>{question}</h2>
            <div style={{maxWidth: 800, margin:"auto", padding:10}}>
                {titles.map((ch, index) => {
                    return <h2 key={index}>{
                        index < position[0] ?
                            "✓ " + titles[index] :
                            "✘ " + titles[index]
                    }</h2>
                })}
            </div>
            <div style={{float: "right"}}>
                <AButton txt={option} onClick={handleClick}/>
            </div>
        </>
    )
}
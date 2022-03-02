import React from "react";
import {AButton} from "../components/AButton";

export const Overview = ({question, position, titles, option, handleClick}) => {
    let q, p = []; //todo delete
    if (question.includes("\r")) {
        let qq = question.split("\r");
        q = qq[0].split("\n");
        p = qq[1].split("\n");
    }
    else {
        q = question.split("\n");
    }

    return (
        <>
            <h1 className="text-center">Fortschritt</h1>
            {q.map(qs =>
                <h2 className="text-center" key={qs}>{qs}</h2>
            )}
            {p.map(qs =>
                <h3 className="text-center" key={qs}>{qs}</h3>
            )}
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
import React from "react";
import {AButton} from "../components/AButton";

export const NaviPage = ({furthestPosition, titles, language, goTo, toggleNavi}) => {
    function onPress(c) {
        let x = titles.indexOf(c)
        goTo([x,1]);
    }

    return (
        <>
            <h3 className="text-center">Bitte wählen Sie aus, wo sie weitermachen wollen.</h3>
            <div className="d-grid gap-2">
                <div className="two-option-grid-container">
                    <AButton txt={language === "de" ? "Zurück zur jetzigen Frage" : "Back to the current question"}
                             onClick={() => toggleNavi(false)}/>
                    <AButton txt={language === "de" ? "Weit entfernteste beantwortete Frage" : "Furthest answered question"}
                             onClick={() => goTo(furthestPosition)}/>
                </div>

                <h3 className="text-center">Zum Kapitel:</h3>
                {titles.map((ch, index) => {
                    if(index <= /*furthestPosition[0] todo tmp */ 10) {
                        return <AButton txt={ch}
                                        onClick={(e) => onPress(e.target.value)}
                                        value={ch}
                                        key={ch}
                        />
                    }
                    return null
                })}
            </div>
        </>
    )
}
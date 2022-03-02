import React from "react";
import {AButton} from "../components/AButton";

export const NaviPage = ({maxProgress, titles, language, goToChapter, toggleNavi}) => {
    function onPress(c) { //todo
        let x = titles.indexOf(c)
        goToChapter(x);
        toggleNavi(false);
    }

    return (
        <>
            <h3 className="text-center">Bitte wählen Sie aus, wo sie weitermachen wollen.</h3>
            <div className="d-grid gap-2">
                <div className="two-option-grid-container">
                    <AButton txt={language === "de" ? "Zurück zur jetzigen Frage" : "Back to the current question"}
                             onClick={() => toggleNavi(false)}/>
                    <AButton txt={language === "de" ? "Weit entfernteste beantwortete Frage" : "Furthest answered question"}
                             onClick={() => goToChapter(maxProgress)}/>
                </div>

                <h3 className="text-center">Zum Kapitel:</h3>
                {titles.map(ch => { //todo only appear if already passed maxProgress
                    return <AButton txt={ch}
                                    onClick={(e) => onPress(e.target.value)}
                                    value={ch}
                                    key={ch}
                    />
                })}
            </div>
        </>
    )
}
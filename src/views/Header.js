import React from "react";
import {ProgressBar, Stack} from "react-bootstrap";
import {HeaderButton} from "../components/HeaderButton";

//requires Progress Bar percentage to be given as "now" props
export const Header = ({goToChapter, goBack, now, max, language, changeLanguage}) => {
    let curr = Math.round(100 * now / max)

    return (
        <Stack className="Stack" direction="horizontal" gap={3}>
            <HeaderButton txt={"Navi"} onClick={() => goToChapter("navi")} />
            <HeaderButton txt={language === "de" ? "Zurück" : "Back"} onClick={goBack} />
            <ProgressBar className="ProgressBar" now={curr}
                         label={`${curr}%`} style={{ width: "70rem" }}/>
            <HeaderButton txt={language.toUpperCase()} onClick={changeLanguage} />
        </Stack>
    )
}
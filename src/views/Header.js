import React from "react";
import {ProgressBar, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../components/UZH_logo.gif"
import {LanguageButton} from "../components/LanguageButton";

//requires Progress Bar percentage to be given as "now" props
export const Header = ({goTo, now, max}) => {
    return (
        <Stack className="Stack" direction="horizontal" gap={3}>
            <Button variant="outline-secondary" onClick={() => goTo(now-1)}>Zurück</Button>
            <Button variant="outline-secondary" onClick={() => goTo("Navi")}>Navi</Button>
            <ProgressBar className="ProgressBar" now={Math.round(100 * now / max)}
                         label={`${Math.round(100 * now / max)}%`} style={{ width: "70rem" }}/>
            <LanguageButton/>
        </Stack>
    )
}
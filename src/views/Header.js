import React from "react";
import {Image, ProgressBar, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Header.css"
import "../components/UZH_logo.gif"

//requires Progress Bar percentage to be given as "now" props
export class Header extends React.Component{
    render() {
        return <Stack className="Stack" direction="horizontal" gap={3}>
            <Button variant="outline-secondary">Navi</Button>
            <ProgressBar className="ProgressBar" now={this.props.now} label={`${this.props.now}%`} style={{ width: "70rem" }}/>
            <Button variant="outline-secondary">DE</Button>
        </Stack>;
    }
}
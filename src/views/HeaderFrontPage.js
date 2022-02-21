import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./Views.css"
import "../components/UZH_logo.gif"
import Container from "react-bootstrap/Container";
import {LanguageButton} from "../components/LanguageButton";

export class HeaderFrontPage extends React.Component {
    render() {
        return <Navbar>
            <Container>
                <Navbar.Brand href="/">Blockchainguide</Navbar.Brand>
                <Nav>
                    <LanguageButton/>
                </Nav>
            </Container>
        </Navbar>
    }
}
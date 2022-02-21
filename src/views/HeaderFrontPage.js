import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./Views.css"
import "../components/UZH_logo.gif"
import Container from "react-bootstrap/Container";
import {HeaderButton} from "../components/HeaderButton";

export const HeaderFrontPage = ({language, changeLanguage}) => {
    return <Navbar>
            <Container>
                <Navbar.Brand href="/">Blockchainguide</Navbar.Brand>
                <Nav>
                    <HeaderButton txt={language} onClick={changeLanguage} />
                </Nav>
            </Container>
        </Navbar>
}
import React from "react";
import {Col, Image, Nav, Navbar} from "react-bootstrap";
import "./Views.css"
import "../components/UZH_logo.gif"
import Container from "react-bootstrap/Container";
import {LanguageButton} from "../components/LanguageButton";

//requires Progress Bar percentage to be given as "now" props
//todo download https://www.cd.uzh.ch/de/vorlagen/uzh-logo/logo_normal.html
export class HeaderFrontPage extends React.Component {
    render() {
        return <Navbar>
            <Container>

                <Navbar.Brand href="#home">Blockchainguide</Navbar.Brand>
                <Nav>
                    <img
                        src='https://www.cd.uzh.ch/dam/jcr:79ffe4ce-bbe9-498e-94a8-d7d5b66400b2/UZH_logo_pos_d_e.gif'
                        className='img-fluid hover-shadow'
                        alt=''
                        style={{maxWidth: '24rem', float: "left"}}
                    />
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Nav>
                    <LanguageButton/>
                </Nav>
            </Container>
        </Navbar>
    }
}
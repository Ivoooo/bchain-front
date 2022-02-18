import React from "react";
import {Col, Image, Nav, Navbar, ProgressBar, Row, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Header.css"
import "../components/UZH_logo.gif"
import {BButton} from "../components/BButton";
import Container from "react-bootstrap/Container";

//requires Progress Bar percentage to be given as "now" props
//todo download https://www.cd.uzh.ch/de/vorlagen/uzh-logo/logo_normal.html
export class HeaderFrontPage extends React.Component{
    render() {
        return <Navbar>
            <Container>

                <Navbar.Brand href="#home">Blockchainguide</Navbar.Brand>
                <Nav>
                    <img
                        src='https://www.cd.uzh.ch/dam/jcr:79ffe4ce-bbe9-498e-94a8-d7d5b66400b2/UZH_logo_pos_d_e.gif'
                        className='img-fluid hover-shadow'
                        alt=''
                        style={{ maxWidth: '24rem', float: "left"}}
                    />
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav>
                    <Button variant="outline-secondary">DE</Button>
                </Nav>
            </Container>
        </Navbar>
    }
}

<Navbar>
    <Nav>
        <img
            src='https://www.cd.uzh.ch/dam/jcr:79ffe4ce-bbe9-498e-94a8-d7d5b66400b2/UZH_logo_pos_d_e.gif'
            className='img-fluid hover-shadow'
            alt=''
            style={{ maxWidth: '24rem', float: "left"}}
        />
    </Nav>
    <Nav>
        <div style={{float: "right"}}>
            <Button variant="outline-secondary">DE</Button>
        </div>
    </Nav>
</Navbar>
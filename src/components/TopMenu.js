import React, { useState } from 'react'
import logo from '../resource/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import '../styles/style.css'

function TopMenu(props) {



    const LogoClickHandler = (e) => {
        //logo click event
        alert("z");
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Row>
                    <Col xs lg="3">
                        <Navbar.Brand onClick={LogoClickHandler} style={{ cursor: "pointer" }} >
                            <img src={logo}
                                width="145" height="45" alt="Cubic Logo" />
                        </Navbar.Brand>
                    </Col>
                    <Col xs lg={{span:4, offset:5 }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto menu-item" style={{ fontSize: "1.3em"}}>
                        <Nav.Link href="#home">SOLUTIONS</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#service">SERVICE</Nav.Link>
                        <Nav.Link href="#ecobrio">ECOBRIO</Nav.Link>
                        <Nav.Link href="#features">FEATURES</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Col>
                </Row>
            </Container>
        </Navbar>
    )
}
export default TopMenu
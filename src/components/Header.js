import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { Navbar, Nav, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export const Header = ({logout}) => (
    <header className="header">
        <div className="container">
            <div className="row">
                <Col className="p-0">
                    <Navbar expand="lg" className="justify-content-center" variant="dark">
                        <Col xs={12} lg={2} className="header__logo-wrapper">
                            <Navbar.Brand href="/home">
                                <Image src="images/contacts_logo.png" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Col>
                        <Col xs={12} lg={10} className="header__nav-wrapper">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/profile">Profile</Nav.Link>
                                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                                    <button onClick={logout} className="nav-link">Logout</button>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Navbar>
                </Col>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(Header);
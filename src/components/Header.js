import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export const Header = ({logout}) => (
    <header className="header">
        <div className="container">
            <Navbar expand="lg">
                <Navbar.Brand href="/home">
                    <Image src="images/connect.png" thumbnail />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <button onClick={logout} className="nav-link">Logout</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(Header);
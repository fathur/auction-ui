import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Link from 'next/link'

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="border-bottom">
                <Link href="/">
                    <Navbar.Brand href="/">Scopic/Auction</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    

                    <Nav className="ml-auto">
                        <Link href="/login">
                            <a className="btn btn-sm btn-outline-primary">Login</a>
                        </Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
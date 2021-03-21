import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Link from 'next/link'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { isLoggedIn, isLoggedOut } from '@/helper'
import { callGetProfile } from '@/services/users'
import { callDeleteLogout } from '@/services/auth'
import { getProfile, getProfilePending, getProfileError } from '@/reducers/users'

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        const { callGetProfile } = this.props

        if (isLoggedIn()) {
            callGetProfile();
        }
    }

    handleLogout(e) {
        e.preventDefault();
        
        const { callDeleteLogout } = this.props
        callDeleteLogout();

    }

    render() {

        return (
            <Navbar bg="light" expand="sm" className="border-bottom">
                <Link href="/">
                    <Navbar.Brand href="/">Scopic/Auction</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    

                    <Nav className="ml-auto mt-2 mt-sm-0">
                        { isLoggedOut() ?
                            <Link href="/login">
                                <a className="btn btn-sm btn-outline-primary rounded-pill">Login</a>
                            </Link>
                        : 
                            <NavDropdown title={this.props.data.full_name} id="basic-nav-dropdown" alignRight>
                                
                                <Link href="/profile/preferences">
                                    <a className="dropdown-item">Preferences</a>
                                </Link>

                                <NavDropdown.Divider />

                                <a href="#" className="dropdown-item" onClick={this.handleLogout}>Logout</a>
                                {/* <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item> */}
                            </NavDropdown>
                        }
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    data: getProfile(state),
    error: getProfileError(state),
    pending: getProfilePending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    callGetProfile, callDeleteLogout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
import React, {Component} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

export default class Navigation extends Component {

    buildLink(link, key, title, fa) {
        return (
            <LinkContainer exact to={link}>
                <NavItem eventKey={key}>{fa && <i className={fa} /> } {title}</NavItem>
            </LinkContainer>
        )
    }

    buildUserMenu(auth) {
        if (!auth.authenticated) {

            return <NavItem
                eventKey={4}
                onClick={() => { this.props.requestToken() } }
                >Login</NavItem>
        }

        return (
            <NavDropdown eventKey={4} title={auth.user.name} id="basic-nav-dropdown">
                <MenuItem divider />
                <MenuItem eventKey={4.1} onClick={() => { this.props.logout() }}>Logout</MenuItem>
            </NavDropdown>
        )
    }

    buildNavigationMenu(auth) {
        if (!auth.authenticated) {
            return null
        }

        return (
            <Nav>
                { this.buildLink('/', 1, 'Home') }
                { this.buildLink('/wallets', 2, 'Wallets') }
            </Nav>
        )
    }

    render() {

        const  { auth, dispatch } = this.props;

        return (
            <Navbar collapseOnSelect fluid staticTop>
                <Navbar.Header>
                    <Navbar.Brand>Vault</Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    { this.buildNavigationMenu(auth) }
                    <Nav pullRight>
                        { this.buildUserMenu(auth, dispatch) }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
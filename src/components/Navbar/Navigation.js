
import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

export default class Navigation extends React.Component {

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
                onClick={() => { this.props.dispatch({type:'DO_LOGIN', payload : {user: {name:'alga'}}}) } }
                >Login</NavItem>
        }

        return (
            <NavDropdown eventKey={4} title={auth.user.name} id="basic-nav-dropdown">
                <MenuItem divider />
                <MenuItem eventKey={4.1} onClick={() => { this.props.dispatch({type: 'DO_LOGOUT'}) }}>Logout</MenuItem>
            </NavDropdown>
        )
    }


    render() {

        const  { auth } = this.props;

        return (
            <Navbar collapseOnSelect fluid staticTop>
                <Navbar.Header>
                    <Navbar.Brand>Vault</Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    { auth.authenticated && <Nav>
                        { this.buildLink('/', 1, 'Home') }
                        { this.buildLink('/wallets', 2, 'Wallets') }
                    </Nav> }
                    <Nav pullRight>
                        { this.buildUserMenu(auth) }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
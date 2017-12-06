
import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

export default class Navigation extends React.Component {

    buildLink(link, key, title, fa) {
        return (
            <LinkContainer exact to={link}>
                <NavItem eventKey={key}>{fa && <i className={fa} /> } {title}</NavItem>
            </LinkContainer>
        )
    }

    buildUserMenu() {
        const  { auth } = this.props;

        if (!this.props.auth.authenticated) {
            const login = () => {
                console.log('doing login');
                this.props.dispatch({type: 'DO_LOGIN', payload: {user: { name : 'alga'}}})
            }

            return <Button onClick={login}>Login</Button>
        }

        return (
            <NavDropdown eventKey={4} title={auth.user.name} id="basic-nav-dropdown">
                <MenuItem divider />
                <MenuItem eventKey={4.1} >Logout</MenuItem>
            </NavDropdown>
        )
    }


    render() {

        return (
            <Navbar collapseOnSelect fluid staticTop>
                <Navbar.Header>
                    <Navbar.Brand>Vault</Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        { this.buildLink('/', 1, 'Home') }
                        { this.buildLink('/wallets', 2, 'Wallets') }
                    </Nav>
                    <Nav pullRight>
                        { this.buildUserMenu() }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
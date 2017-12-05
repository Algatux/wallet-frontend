
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

export default class Navigation extends React.Component {

    buildLink(link, key, title, fa) {


        return (
            <LinkContainer exact to={link}>
                <NavItem eventKey={key} >{fa && <i className={fa} /> } {title}</NavItem>
            </LinkContainer>
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
                        { this.buildLink('/login', 3, 'Login') }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
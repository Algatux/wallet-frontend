
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {

    buildLink(link, key, title) {
        return (
            <LinkContainer to={link}>
                <NavItem eventKey={key} >{title}</NavItem>
            </LinkContainer>
        )
    }


    render() {

        return (
            <Navbar collapseOnSelect fluid staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Vault</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        { this.buildLink('/wallets', 1, 'Wallets') }
                    </Nav>
                    <Nav pullRight>
                        { this.buildLink('/login', 3, 'Login') }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
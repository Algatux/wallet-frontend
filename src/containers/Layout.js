import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import Home from './Home'
import Login from './Login'
import Wallets from './Wallets'

import Navigation from '../components/Navbar/Navigation'

export default class Layout extends React.Component {

  render() {

    return (
        <Router>
            <div>
                <Navigation />

                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Route exact path="/" component={Home}/>
                            <Route path="/wallets" component={Wallets}/>
                            <Route path="/login" component={Login}/>
                        </Col>
                    </Row>
                </Grid>

            </div>
        </Router>
    );
  }

}

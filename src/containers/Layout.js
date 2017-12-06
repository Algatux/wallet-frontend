import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import HomeContainer from '../containers/Home'
import Login from '../components/Pages/Login'
import Wallets from '../components/Pages/Wallets'

import Navigation from '../containers/Navigation'

export default class Layout extends React.Component {

  render() {

    return (
        <Router>
            <div>
                <Navigation />

                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Route exact path="/" component={HomeContainer}/>
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


import React from 'react'
import { Col, ControlLabel, Checkbox, FormControl, Button, Form, FormGroup } from 'react-bootstrap'

export default class LoginForm extends React.Component {

    render() {
        const { handleChange, handleSubmit } = this.props

        return(
            <Form onSubmit={handleSubmit}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Username" onChange={handleChange} name="username"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" onChange={handleChange} name="password"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox onChange={handleChange} name="remember">Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" onClick={handleSubmit}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

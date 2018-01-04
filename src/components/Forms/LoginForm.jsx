
import React from 'react'
import { Col, ControlLabel, Checkbox, FormControl, Button, Form, FormGroup } from 'react-bootstrap'

export default class LoginForm extends React.Component {

    render() {
        const { handleChange } = this.props

        return(
            <Form horizontal>
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
                        <FormControl type="password" placeholder="Password" name="password"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

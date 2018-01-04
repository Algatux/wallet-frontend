
import React from 'react'
import { Panel } from 'react-bootstrap'
import LoginForm from '../Forms/LoginForm'

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: null,
            password: null
        }

        this.handleChange= this.handleChange.bind(this)
    }

    handleChange(event) {

        switch(event.target.attributes.name) {
            case 'username':
                this.setState({username: event.target.value })
                break
            case 'password':
                this.setState({password: event.target.value })
                break
            default:
                return;
        }

    }

    render() {

        return (
            <div>
                <h1>Login page</h1>
                <Panel>
                    <LoginForm handleChange={this.handleChange} />
                </Panel>
            </div>
        )
    }
}

import React from "react"
import { Panel } from "react-bootstrap"
import LoginForm from "../Forms/LoginForm"

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: null,
            password: null,
            remember: false
        }

        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event) {

        console.log(event.target.getAttribute('name'))

        switch(event.target.getAttribute('name')) {
            case "username":
                this.setState({username: event.target.value })
                break
            case "password":
                this.setState({password: event.target.value })
                break
            case "remember":
                this.setState({remember: !this.state.remember })
                break
            default:
                return;
        }

    }

    handleSubmit(event) {

        event.preventDefault()

        let postData = this.state;
        alert(JSON.stringify(postData))

        this.props.doLogin();
    }

    render() {

        return (
            <div>
                <h1>Login page</h1>
                <Panel>
                    <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </Panel>
            </div>
        )
    }
}
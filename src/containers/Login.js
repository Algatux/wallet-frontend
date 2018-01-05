import { connect } from "react-redux"
import Login from "../components/Pages/Login"
import { doLogin, doRequestRefreshToken } from '../actions/authentication'

const mapStateToProps = (state) => {
    return {
        auth: state.authentication
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doLogin: () => dispatch(doLogin()),
        requestRefreshToken: () => dispatch(doRequestRefreshToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import {connect} from "react-redux"
import Navigation from "../components/Navigation"
import {doLogin, doLogout} from '../actions/authentication'

const mapStateToProps = (state) => {
    return {
        auth: state.authentication
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login : () => dispatch(doLogin()),
        logout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
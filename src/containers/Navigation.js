import {connect} from "react-redux"
import Navigation from "../components/Navigation"
import {doLogout, requestToken } from '../actions/authentication'

const mapStateToProps = (state) => {
    return {
        auth: state.authentication
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(doLogout()),
        requestToken: () => dispatch(requestToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
import {connect} from "react-redux"
import Navigation from "../components/Navbar/Navigation"

const mapStateToProps = (state) => {
    return {
        auth: state.authentication
    }
};

export default connect(mapStateToProps)(Navigation);
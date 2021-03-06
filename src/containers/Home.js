import {connect} from "react-redux"

import Home from '../components/Pages/Home'

const mapStateToProps = (state) => {
    return {
        auth: state.authentication
    }
};

export default connect(mapStateToProps)(Home);
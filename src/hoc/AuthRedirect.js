import {Navigate} from "react-router-dom";
import {connect} from 'react-redux';


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuthenticated
})

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
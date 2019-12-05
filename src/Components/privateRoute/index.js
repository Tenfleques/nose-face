import React from 'react';
import { Route, Redirect } from 'react-router-dom';

 const PrivateRoute = ({ component: Component, ...rest }) =>{
    return (
        <Route {...rest} render={props => (
            sessionStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/nose-face/login', state: { from: props.location } }} />
        )} />   
    )
}
export default PrivateRoute
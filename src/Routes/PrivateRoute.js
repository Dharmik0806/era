import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loginData } from '../utility/Uitility';

function PrivateRoute({component : Component , restricted = false , ...rest}) {
    console.log(loginData());
    return (
       <Route 
            {...rest}
            render = {(props) => {
                return(
                    loginData() ? <Component {...props}/> : <Redirect to="/auth" />
                )
            }}
       />
    );
}

export default PrivateRoute;
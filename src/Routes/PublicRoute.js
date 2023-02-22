import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkData } from '../utility/Utility';

function PublicRoute({component : Component , restricted = false , ...rest}) {

    return (
        console.log(checkData() ,restricted ),
        <Route
            {...rest}
            render={(props) => {
                return(
                    checkData() && restricted ? <Redirect to="/" /> : <Component {...props}/>
                )
            }}
       />
    );
}

export default PublicRoute;


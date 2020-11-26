import  React from "react";
import { Route, Redirect } from 'react-router-dom';
import Cookie from "js-cookie";

function PrivateRoute({ component: Component, ...rest }) {
    const user = Cookie.get("access")
    console.log(user, 'From PRIVATEW')
    return <Route {...rest} render={(props) => (
        user !== undefined ? <Component {...props} user={user}/> : <Redirect to={{pathname: '/login'}} />
        )} 
    />
}

export default PrivateRoute
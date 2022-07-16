// src/components/PrivateRoute.js

import React from "react";
import {Redirect, Route} from "react-router-dom";

import {useAuth} from "../contexts/Auth";
import {routes} from "../constants";

export function PrivateRoute({component: Component, ...rest}) {
    const {user} = useAuth();


    if (!user()) {
        return <Redirect to={routes.login.path}/>
    }

    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />
            }}
        />
    );
}

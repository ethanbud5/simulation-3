import React from "react";
import {Route,Switch} from "react-router";
import LandingPage from "./Components/Auth/Auth";

export default(
    <Switch>
        <Route to="/" component={LandingPage}/>
    </Switch>
)
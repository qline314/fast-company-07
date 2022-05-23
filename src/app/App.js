import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import UsersPage from "./layouts/users-page";
// import User from "./components/user";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={UsersPage} />
            </Switch>
        </div>
    );
};

export default App;

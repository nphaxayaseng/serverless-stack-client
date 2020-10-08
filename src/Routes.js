import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <UnauthenticatedRoute path="/login">
                <Login />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute path="/signup">
                <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute path="/settings">
                <Settings />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/notes/new">
                <NewNote />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/notes/:id">
                <Notes />
            </AuthenticatedRoute>
            <Route path="/settings">
                <Settings />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
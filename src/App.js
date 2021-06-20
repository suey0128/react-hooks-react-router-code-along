import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Message from "./Message";
import Signup from "./Signup";
import About from "./About";
import Login from "./Login";
import Home from "./Home";

function App () {
    return (
        <>
        <Navbar />
        <Switch>
            <Route path="/about" >
                <About />
            </Route>,

            <Route path="/login">
                <Login />
            </Route>,

            <Route path="/signup">
                <Signup />
            </Route>,

            <Route path="/message">
                <Message />
            </Route>,

            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        </>
    )
}

export default App;
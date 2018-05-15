import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom'

const Nav = () => (
    <BrowserRouter>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </BrowserRouter>
);

const Home = () => (
    <h1>Home</h1>
);

const About = () => (
    <h1>About</h1>
);

ReactDOM.render(
    <Nav/>, document.getElementById("root")
);
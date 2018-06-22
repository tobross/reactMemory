import React from 'react';

const Nav = (props) => (
    <nav className="navbar sticky-top navbar-light bg-warning p-4">
    <p className="navbar-brand navbrand">Clicky Game!</p>
    <p className="nav-item">{props.message}</p>
    <p className="nav-item">Score: {props.score} | High Score: {props.highscore}</p>
    </nav>
)

export default Nav;
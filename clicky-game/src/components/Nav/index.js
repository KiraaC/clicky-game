import React from "react";
import "./style.css";
import NavMessage from "../NavMessage";

function Nav(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul>
                <li className="brand">
                    <a href="/">Andy Warhol Clicky Game</a>
                </li>
                <li>
                    <NavMessage score={props.score} topScore={props.topScore} />
                </li>
                <li>
                    Score:{props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>

    );
}
export default Nav;
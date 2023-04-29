//General UI component for navigation
import React from "react";

import classes from "./Navbar.module.css";

export default function Navbar(props) {
    return (
        <div className={classes["nav-container"]}>
            <div className={classes["nav-align"]}>
                <div onClick={() => props.onChangePage("home")} className={classes["nav-home"]}>
                    HOME
                </div>

                <ul className={classes["nav-list"]}>
                    <li onClick={() => props.onChangePage("game")} className={classes["nav-item"]}>
                        Game
                    </li>
                    <li onClick={() => props.onChangePage("listGames")} className={classes["nav-item"]}>
                        List saved games
                    </li>
                </ul>
            </div>
        </div>
    );
}

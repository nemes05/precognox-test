//General UI component for navigation
import React from "react";

import classes from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={classes["nav-container"]}>
            <div className={classes["nav-align"]}>
                <div className={classes["nav-home"]}>HOME</div>

                <ul className={classes["nav-list"]}>
                    <li className={classes["nav-item"]}>Game</li>
                </ul>
            </div>
        </div>
    );
}

//General UI component for displaying data
import React from "react";

import classes from "./Card.module.css";

export default function Card(props) {
    return (
        <div className={classes["card-container"]}>
            <div className={props.type === "dark" ? classes["card-dark"] : classes["card-light"]}>{props.children}</div>
        </div>
    );
}

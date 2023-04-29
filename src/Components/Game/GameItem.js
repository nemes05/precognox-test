//Component that shows a game
import React from "react";

import classes from "./GameItem.module.css";
import Card from "../UI/Card";

export default function GameItem(props) {
    return (
        <Card type="dark">
            <div value={props.state} id={props.id} onClick={props.onGameSelect} className={classes.game}>
                {props.name}
            </div>
        </Card>
    );
}

//Individual cells that displays the game
import React from "react";

import classes from "./BoardCell.module.css";

export default function BoardCell(props) {
    return <button className={classes["board-cell"]}>X</button>;
}

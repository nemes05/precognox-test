//Individual cells that displays the game
import React from "react";

import classes from "./BoardCell.module.css";

export default function BoardCell(props) {
    //Handels the moves of the players
    const currentMove = (event) => {
        if (event.target.innerHTML !== "") {
            alert("Not a valid move!");
            return;
        }
        const changeCell = +event.target.value;
        props.onClick(changeCell);
    };

    return (
        <button value={props.value} onClick={(event) => currentMove(event)} className={classes["board-cell"]}>
            {props.children}
        </button>
    );
}

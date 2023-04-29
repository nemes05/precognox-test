//Component to display the game
import React from "react";

import classes from "./Board.module.css";
import BoardCell from "./BoardCell";

export default function Board() {
    return (
        <div className={classes["board-container"]}>
            <div className={classes.board}>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
                <BoardCell>X</BoardCell>
            </div>
        </div>
    );
}

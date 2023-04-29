//Component to display the game
import React, { useContext, useState } from "react";

import classes from "./Board.module.css";
import BoardCell from "./BoardCell";
import BoardContext from "../Context/board-ctx";

export default function Board(props) {
    const boardCtx = useContext(BoardContext);
    const [player1IsNext, setPlayer1IsNext] = useState(true);

    //Handels the changes on the board
    const moveHandler = (index) => {
        if (player1IsNext === true) {
            boardCtx.updateBoard(index, 1);
        } else {
            boardCtx.updateBoard(index, 2);
        }
        setPlayer1IsNext((prev) => !prev);
    };

    //Handels button actions
    const handleSave = () => {
        props.onSave("save");
    };

    const handleNewGame = () => {
        boardCtx.loadNewBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    };

    //Creates the correct board
    const board = props.board.map((item, index) => (
        <BoardCell value={index} onClick={(index) => moveHandler(index)} key={index}>
            {item === 1 ? "X" : item === 2 ? "O" : ""}
        </BoardCell>
    ));

    return (
        <>
            <div className={classes["board-container"]}>
                <div className={classes.board}>{board}</div>
            </div>
            {props.showSave && (
                <div className={classes["btn-container"]}>
                    <button onClick={handleSave} className={classes["general-btn"]}>
                        Save game
                    </button>
                    <button onClick={handleNewGame} className={classes["general-btn"]}>
                        New game
                    </button>
                </div>
            )}
        </>
    );
}

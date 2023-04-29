import React, { useContext } from "react";
import { deleteGame } from "../Context/api-handler";

import Board from "./Board";
import classes from "./ManageGame.module.css";
import BoardContext from "../Context/board-ctx";

export default function ManageGame(props) {
    const boardCtx = useContext(BoardContext);
    let gameState = props.state.split("");
    gameState = gameState.map((item) => +item);

    const deleteGameHandler = () => {
        deleteGame(props.gameID)
            .then(() => {
                props.onCancel();
                alert("Delete succesfull");
            })
            .catch((error) => alert(error.message));
    };

    const loadGameHandler = () => {
        boardCtx.loadNewBoard(gameState);
        boardCtx.setSaved(props.gameID);
        props.onLoad();
    };

    return (
        <>
            <Board showSave={false} board={gameState} />
            <div className={classes["btn-container"]}>
                <button onClick={loadGameHandler} className={classes["general-btn"]}>
                    Load game
                </button>
                <button onClick={deleteGameHandler} className={classes["general-btn"]}>
                    Delete game
                </button>
                <button onClick={props.onCancel} className={classes["general-btn"]}>
                    Cancel
                </button>
            </div>
        </>
    );
}

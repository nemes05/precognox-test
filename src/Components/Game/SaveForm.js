//A component where we can save our progress
import React, { useContext, useRef } from "react";

import classes from "./SaveForm.module.css";
import BoardContext from "../Context/board-ctx";

export default function SaveForm(props) {
    const boardCtx = useContext(BoardContext);
    const nameInputRef = useRef();

    const handleBoardSubmit = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        boardCtx.saveBoard(name);
        nameInputRef.current.value = "";
        props.onSave("game");
    };

    //Function call for overwrite
    // const overWriteSave = () => {
    //     boardCtx.overWriteSave();
    //     props.onSave("game");
    // };

    return (
        <form onSubmit={handleBoardSubmit} className={classes["save-form"]}>
            <input ref={nameInputRef} type="text" placeholder="Name the board" className={classes["name-input"]} />
            <button type="sumbit" className={classes["save-btn"]}>
                Save game
            </button>
        </form>
    );
}

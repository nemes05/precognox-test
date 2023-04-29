import React, { useContext, useState } from "react";

import classes from "./Page.module.css";

import Card from "./Card";
import Navbar from "./Navbar";
import Board from "../Game/Board";
import BoardContext from "../Context/board-ctx";
import SaveForm from "../Game/SaveForm";

export default function Page() {
    const boardCtx = useContext(BoardContext);
    const [page, setPage] = useState("home");

    const changePageHandler = (page) => {
        setPage(page);
    };

    const saveHandler = () => {
        setPage("save");
    };

    return (
        <React.Fragment>
            <Navbar onChangePage={(page) => changePageHandler(page)} />
            <Card>
                {page === "home" && <p className={classes["welcome-text"]}>Welcome to the tic-tac-toe game</p>}
                {page === "game" && <Board onSave={saveHandler} board={boardCtx.currentBoard} />}
                {page === "save" && <SaveForm onSave={changePageHandler} />}
            </Card>
        </React.Fragment>
    );
}

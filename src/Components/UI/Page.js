//The main page that renders the components
import React, { useContext, useState } from "react";

import classes from "./Page.module.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Board from "../Game/Board";
import SaveForm from "../Game/SaveForm";
import GamesList from "../Game/GamesList";
import BoardContext from "../Context/board-ctx";

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
                {page === "game" && <Board showSave={true} onSave={saveHandler} board={boardCtx.currentBoard} />}
                {page === "save" && <SaveForm onSave={(page) => changePageHandler(page)} />}
                {page === "listGames" && <GamesList onLoad={(page) => changePageHandler(page)} />}
            </Card>
        </React.Fragment>
    );
}

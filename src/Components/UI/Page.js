import React, { useContext } from "react";

import Card from "./Card";
import Navbar from "./Navbar";
import Board from "../Game/Board";
import BoardContext from "../Context/board-ctx";

export default function Page() {
    const boardCtx = useContext(BoardContext);

    return (
        <React.Fragment>
            <Navbar />
            <Card>
                <Board board={boardCtx.currentBoard} />
            </Card>
        </React.Fragment>
    );
}

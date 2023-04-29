import React, { useState } from "react";

import BoardContext from "./board-ctx";

const DUMMY_BOARD = [0, 0, 0, 1, 2, 2, 0, 0, 1];

export default function BoardProvider(props) {
    const [board, setBoard] = useState(DUMMY_BOARD);

    const updateBoardHandler = (index, player) => {
        let newBoard = board;
        newBoard[index] = player;
        setBoard(newBoard);
    };

    const boardCtx = {
        currentBoard: board,
        updateBoard: updateBoardHandler,
    };

    return <BoardContext.Provider value={boardCtx}>{props.children}</BoardContext.Provider>;
}

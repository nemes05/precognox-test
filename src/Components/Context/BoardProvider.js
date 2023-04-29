import React, { useState } from "react";

import BoardContext from "./board-ctx";

export default function BoardProvider(props) {
    const [board, setBoard] = useState([]);

    const updateBoardHandler = (index) => {};

    const boardCtx = {
        currentBoard: board,
        updateBoard: updateBoardHandler,
    };

    return <BoardContext.Provider>{props.children}</BoardContext.Provider>;
}

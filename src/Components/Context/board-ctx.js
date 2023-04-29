import React from "react";

const BoardContext = React.createContext({
    currentBoard: [],
    updateBoard: (index) => {},
});

export default BoardContext;

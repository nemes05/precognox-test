import React from "react";

const BoardContext = React.createContext({
    currentBoard: [],
    winner: "",
    saveBoard: (name) => {},
    updateBoard: (index) => {},
});

export default BoardContext;

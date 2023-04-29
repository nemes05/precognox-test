//A context that provides the data for the components
import React from "react";

const BoardContext = React.createContext({
    currentBoard: [],
    winner: "",
    saveBoard: (name) => {},
    updateBoard: (index) => {},
    loadNewBoard: (array) => {},
    setSaved: (id) => {},
    getSaved: false,
    overWriteSave: () => {},
});

export default BoardContext;

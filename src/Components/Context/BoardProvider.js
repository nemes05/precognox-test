//A component to provide the context
import React, { useEffect, useState } from "react";

import BoardContext from "./board-ctx";
import { saveBoardCall } from "./api-handler";

export default function BoardProvider(props) {
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [alreadySaved, setAlreadySaved] = useState({ saved: false, id: null });
    const [winner, setWinner] = useState(0);

    const updateBoardHandler = (index, player) => {
        const newBoard = [...board];
        newBoard[index] = player;
        const setNewBoard = newBoard;
        setBoard(setNewBoard);
    };

    const allEqual = (array) => {
        return array.every((value) => value === array[0]);
    };

    useEffect(() => {
        if (winner === 1 || winner === 2) {
            alert(winner + ". player won");
            setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
    }, [winner]);

    useEffect(() => {
        const line1 = board.slice(0, 3);
        const line2 = board.slice(3, 6);
        const line3 = board.slice(6, 9);

        const row1 = [board[0], board[3], board[6]];
        const row2 = [board[1], board[4], board[7]];
        const row3 = [board[2], board[5], board[8]];

        const diag1 = [board[0], board[4], board[8]];
        const diag2 = [board[2], board[4], board[6]];

        if (allEqual(line1) && line1[0] !== 0) {
            setWinner(line1[0]);
        } else if (allEqual(line2) && line2[0] !== 0) {
            setWinner(line2[0]);
        } else if (allEqual(line3) && line3[0] !== 0) {
            setWinner(line3[0]);
        } else if (allEqual(row1) && row1[0] !== 0) {
            setWinner(row1[0]);
        } else if (allEqual(row2) && row2[0] !== 0) {
            setWinner(row2[0]);
        } else if (allEqual(row3) && row3[0] !== 0) {
            setWinner(row3[0]);
        } else if (allEqual(diag1) && diag1[0] !== 0) {
            setWinner(diag1[0]);
        } else if (allEqual(diag2) && diag2[0] !== 0) {
            setWinner(diag2[0]);
        }
    }, [board]);

    const saveBoardHandler = (name) => {
        if (!allEqual(board)) {
            saveBoardCall({ board: board.join(""), name: name })
                .then(() => alert("Save succesfull"))
                .catch((error) => alert(error.message));
        } else {
            alert("The board is empty");
        }
    };

    const loadBoardHandler = (array) => {
        setBoard(array);
    };

    const alreadySavedHandler = (id) => {
        setAlreadySaved({ saved: true, id: id });
    };

    //The function that makes the API call
    const overWriteHandler = () => {
        //     overWriteBoard(alreadySaved.id, board)
        //         .then(() => alert("Overwrite succesfull"))
        //         .catch((error) => alert(error.message));
    };

    const boardCtx = {
        currentBoard: board,
        winner: winner,
        saveBoard: saveBoardHandler,
        updateBoard: updateBoardHandler,
        loadNewBoard: loadBoardHandler,
        setSaved: alreadySavedHandler,
        getSaved: alreadySaved.saved,
        overWriteSave: overWriteHandler,
    };

    return <BoardContext.Provider value={boardCtx}>{props.children}</BoardContext.Provider>;
}

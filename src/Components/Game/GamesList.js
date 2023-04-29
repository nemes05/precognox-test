//Component that renders game items
import React, { useEffect, useState } from "react";
import { getAllBoards } from "../Context/api-handler";

import GameItem from "./GameItem";
import ManageGame from "./ManageGame";

export default function GamesList(props) {
    const [boards, setBoards] = useState([]);
    const [gameHandler, setGameHandler] = useState({ show: false, state: "", id: "" });

    //Loads the data from the database
    useEffect(() => {
        getAllBoards()
            .then((data) => setBoards(data))
            .catch((error) => alert(error.message));
    }, [gameHandler]);

    let boardList = boards.map((item) => ({ ...item, checked: false }));

    //Handels the selection and button actions
    const gameSelectHandler = (event) => {
        const gameID = +event.target.id;
        const gameValue = event.target.getAttribute("value");
        const handler = { show: true, state: gameValue, id: gameID };
        setGameHandler(handler);
    };

    const manageCancelHandler = () => {
        const handler = { show: false, state: "", id: "" };
        setGameHandler(handler);
    };

    const loadGameHandler = () => {
        props.onLoad("game");
    };

    boardList = boardList.map((item) => (
        <GameItem onGameSelect={gameSelectHandler} key={item.id} id={item.id} name={item.name} state={item.board} />
    ));

    return (
        <>
            {!gameHandler.show && boardList}
            {gameHandler.show && (
                <ManageGame
                    gameID={gameHandler.id}
                    state={gameHandler.state}
                    onLoad={loadGameHandler}
                    onCancel={manageCancelHandler}
                />
            )}
        </>
    );
}

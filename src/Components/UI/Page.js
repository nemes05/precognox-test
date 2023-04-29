import React from "react";

import Card from "./Card";
import Navbar from "./Navbar";
import Board from "../Game/Board";

export default function Page() {
    return (
        <React.Fragment>
            <Navbar />
            <Card>
                <Board />
            </Card>
        </React.Fragment>
    );
}

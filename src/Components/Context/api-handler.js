//The file that contains the communication with the API

export const saveBoardCall = async (req) => {
    const reqBody = JSON.stringify(req);
    const response = await fetch("http://localhost:5000/boards", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: reqBody,
    });

    if (!response.ok) {
        throw new Error("Something went wrong");
    }
};

export const getAllBoards = async () => {
    const response = await fetch("http://localhost:5000/boards");

    if (!response.ok) {
        throw new Error("Something went wrong during loading");
    }
    const resData = response.json();
    return resData;
};

export const deleteGame = async (id) => {
    const response = await fetch(`http://localhost:5000/boards/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Something went wrong");
    }
};

//The function that would handle the ovewrwrite API call
// export const overWriteBoard = async (id, board) => {
//     console.log(JSON.stringify({ board: board.join(""), name: "Test1" }));
//     getAllBoards()
//         .then((resData) => saveRes(resData))
//         .catch(() => alert("Something went wrong during overwriting"));
//     const saveRes = async (resData) => {
//         const game = resData.filter((item) => item.id === id);
//         const gameName = game[0].name;
//         console.log(gameName);
//         const response = await fetch(`http://localhost:5000/boards/${id}`, {
//             method: "PATCH",
//             headers: {
//                 Accept: "application/json",
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify({ board: board.join(""), name: gameName }),
//         });
//         if (!response.ok) {
//             throw new Error("Something went wrong during overwriting");
//         }
//     };
// };

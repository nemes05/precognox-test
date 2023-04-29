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

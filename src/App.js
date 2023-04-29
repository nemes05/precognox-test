import "./App.css";

import Page from "./Components/UI/Page";
import BoardProvider from "./Components/Context/BoardProvider";

function App() {
    return (
        <BoardProvider>
            <Page></Page>
        </BoardProvider>
    );
}

export default App;

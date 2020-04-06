import React, { useState, useEffect } from "react";
import ThreadList from "./ThreadList";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThreadPage from "./ThreadPage";

function App() {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        axios.get("/api/threads").then(resp => {
            const { data } = resp;
            setThreads(data);
        });
    }, []);

    return (
        <div className="container">
            <Switch>
                <Route exact path="/threads">
                    <ThreadList threads={threads} />
                </Route>
                <Route path="/threads/:id">
                    <ThreadPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById("app")
    );
}

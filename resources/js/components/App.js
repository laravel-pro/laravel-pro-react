import React, { useState, useEffect } from "react";
import ThreadList from "./ThreadList";
import ReactDOM from "react-dom";

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
            <ThreadList threads={threads} />
        </div>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Thread from "./Thread";

function ThreadPage() {
    const { id } = useParams();
    const [thread, setThread] = useState(null);

    useEffect(() => {
        axios.get(`/api/threads/${id}`).then(resp => {
            const { data } = resp;
            setThread(data);
        });
    }, [id]);

    return thread && <Thread thread={thread} />;
}

export default ThreadPage;

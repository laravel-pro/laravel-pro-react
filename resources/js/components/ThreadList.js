import React from "react";
import dayjs from "dayjs";

function ThreadList({ threads }) {
    return (
        <ul className="list-unstyled">
            {threads.map(({ id, title, author, created_at }) => (
                <li key={id} className="py-2 media border-bottom">
                    <div className="media-body">
                        <h5>
                            <a href={`/threads/${id}`}>{title}</a>
                        </h5>
                        <span className="small">{author.name}</span>
                        <span className="text-muted small"> post at </span>
                        <span className="text-muted small">
                            {dayjs(created_at).format("YYYY-MM-DD HH:mm:ss")}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ThreadList;

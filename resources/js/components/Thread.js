import React, { useEffect, useMemo } from "react";
import dayjs from "dayjs";
import showdown from "showdown";
import prism from 'prismjs';

const converter = new showdown.Converter();

function Thread({ thread }) {
    const html = useMemo(() => converter.makeHtml(thread.body), [thread.body]);

    useEffect(() => {
        prism.highlightAll();
    }, [html]);

    return (
        <div className="media">
            <div className="media-body">
                <h1>{thread.title}</h1>
                <span className="small">{thread.author.name}</span>
                <span className="text-muted small"> post at </span>
                <span className="text-muted small">
                    {dayjs(thread.created_at).format("YYYY-MM-DD HH:mm:ss")}
                </span>
                <div className="mt-2 pt-2 border-top" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
    );
}

export default Thread;

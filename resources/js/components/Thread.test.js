import React from "react";
import { render } from "@testing-library/react";
import Thread from "./Thread";

describe("帖子详情", function() {
    it("应该包含帖子标题、作者、创建时间", function() {
        const thread = {
            id: 1,
            title: "a thread title",
            body: "## thread body\n",
            author: { id: 1, name: "Mr. Strange" },
            created_at: "2020-03-25T08:00:00.000000Z"
        };
        const { getByText } = render(<Thread thread={thread} />);

        expect(
            getByText("a thread title", {
                selector: "h1"
            })
        ).toBeInTheDocument();
        expect(getByText("Mr. Strange")).toBeInTheDocument();
        expect(getByText("2020-03-25 16:00:00")).toBeInTheDocument();
    });

    it("应该能把markdown格式渲染成html标签", function() {
        const thread = {
            id: 1,
            title: "a thread title",
            body: "## thread body\n",
            author: { id: 1, name: "Mr. Strange" },
            created_at: "2020-03-25T08:00:00.000000Z"
        };
        const { getByText } = render(<Thread thread={thread} />);

        expect(
            getByText("thread body", {
                selector: "h2"
            })
        ).toBeInTheDocument();
    });
});

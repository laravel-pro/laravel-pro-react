import React from "react";
import { render } from "@testing-library/react";
import ThreadList from "./ThreadList";

describe("帖子列表", function() {
    const threads = [
        {
            id: 1,
            title: "a thread title",
            author: { id: 1, name: "a-author" },
            created_at: "2020-03-25T08:00:00.000000Z"
        },
        {
            id: 2,
            title: "b thread title",
            author: { id: 2, name: "b-author" },
            created_at: "2020-03-25T10:00:00.000000Z"
        }
    ];
    let getByText;

    beforeEach(function() {
        getByText = render(<ThreadList threads={threads} />).getByText;
    });

    it("应该包括标题、作者、创建时间", function() {
        expect(getByText("a thread title")).toBeInTheDocument();
        expect(getByText("a-author")).toBeInTheDocument();
        expect(getByText("2020-03-25 18:00:00")).toBeInTheDocument();
        expect(getByText("b thread title")).toBeInTheDocument();
    });

    it("点击帖子标题应该能导航到帖子详情", function() {
        expect(getByText("a thread title")).toHaveAttribute(
            "href",
            "/threads/1"
        );
    });
});

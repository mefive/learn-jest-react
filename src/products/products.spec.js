/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import React from "react";
import server from "../../mocks/server";
import Products from "./index";

test("加载后发起请求", async () => {
    server.use(
        rest.get("/api/greeting", (req, res, ctx) => {
            return res(ctx.json({ greeting: "mefive" }));
        })
    );
    render(<Products />);
    await screen.findByText("mefive");
});

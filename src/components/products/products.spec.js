/**
 * @jest-environment jsdom
 */
import Products from "@components/products";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import React from "react";
import server from "../../../mocks/server";

test("加载后发起请求", async () => {
    server.use(
        rest.get("/api/products", (req, res, ctx) => {
            return res(
                ctx.json([
                    {
                        name: "iPhone SE 3",
                        weight: 143,
                        price: 3499,
                    },
                ])
            );
        })
    );
    render(<Products />);
    await screen.findByText("143");
});

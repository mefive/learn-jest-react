/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./index";
import style from "./app.module.css";

test("点击按钮，增加计数", async () => {
    const { container } = render(<App />);
    await userEvent.click(container.querySelector("button"));
    expect(container.querySelector("p")).toHaveTextContent("2");
    expect(container.querySelector("#container")).toHaveClass(style.app);
});

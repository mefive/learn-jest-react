import { Button } from "antd";
import "antd/dist/antd.css";
import classNames from "classnames";
import React, { useState } from "react";
import style from "./app.module.css";
import "./app.css";

function App() {
    const [counter, setCounter] = useState(1);
    return (
        <div
            id="container"
            className={classNames(
                { [style.app]: counter > 1 },
                "w-3/4 mx-auto my-10 border-gray-800 border-2 rounded-md"
            )}
        >
            <div className="flex justify-center gap-1 p-4">
                <Button
                    type="primary"
                    onClick={() => {
                        setCounter(counter + 1);
                    }}
                >
                    Add
                </Button>
                <p>{counter}</p>
            </div>
        </div>
    );
}

export default App;

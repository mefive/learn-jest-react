import Products from "@components/products";
import ProductsStore from "@components/products/ProductStore";
import { Button } from "antd";
import "antd/dist/antd.css";
import classNames from "classnames";
import { MobXProviderContext } from "mobx-react";
import React, { useState } from "react";
import "./app.css";
import style from "./app.module.css";

function App() {
    const [counter, setCounter] = useState(1);
    const [showProducts, setShowProducts] = useState(false);

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
                    danger
                    onClick={() => {
                        setCounter(counter + 1);
                    }}
                >
                    Add
                </Button>

                <Button onClick={() => setShowProducts(!showProducts)}>
                    Toggle
                </Button>
            </div>

            <p>{counter}</p>

            {showProducts && (
                <MobXProviderContext.Provider
                    value={{ productStore: new ProductsStore() }}
                >
                    <Products />
                </MobXProviderContext.Provider>
            )}
        </div>
    );
}

export default App;

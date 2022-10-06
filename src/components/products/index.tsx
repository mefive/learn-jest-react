import { useRequest } from "ahooks";
import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useMemo } from "react";
import ProductsStore from "./ProductStore";

function Products() {
    const productStore = useMemo(() => ProductsStore.getInstance(), []);

    const { loading } = useRequest(productStore.fetchProducts);

    return (
        <div
            className={classNames(
                { "flex justify-center": loading },
                "mt-3 bg-black text-white p-3"
            )}
        >
            {loading ? (
                "loading..."
            ) : (
                <div data-testid="products-container">
                    {productStore.products.map((product) => (
                        <div key={product.name} data-testid="product">
                            <p>{product.name}</p>
                            <p>{product.weight}</p>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default observer(Products);

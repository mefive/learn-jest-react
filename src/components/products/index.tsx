import ProductsStore from "@components/products/ProductStore";
import { useRequest } from "ahooks";
import { Button } from "antd";
import classNames from "classnames";
import { MobXProviderContext, observer } from "mobx-react";
import React, { useContext } from "react";

function Products() {
    const { productStore } = useContext(MobXProviderContext) as {
        productStore: ProductsStore;
    };

    const { loading, run } = useRequest(productStore.fetchProducts);

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

            <div className="mt-3 flex justify-center">
                <Button type="link" onClick={run}>
                    刷新
                </Button>
            </div>
        </div>
    );
}

export default observer(Products);

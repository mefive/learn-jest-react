/**
 * @jest-environment jsdom
 */
import Products from "@components/products";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { makeObservable, observable, runInAction } from "mobx";
import { MobXProviderContext } from "mobx-react";
import React from "react";

class MockProductStore {
    products = [];

    constructor() {
        makeObservable(this, {
            products: observable,
        });
    }

    fetchProducts = jest.fn().mockImplementation(async () => {
        runInAction(() => {
            this.products = [
                {
                    name: "iPhone 14 Plus",
                    price: 6999,
                    weight: 202,
                },
            ];
        });
        return null;
    });
}

const productStore = new MockProductStore();

beforeEach(async () => {
    await act(async () =>
      render(
        <MobXProviderContext.Provider value={{ productStore }}>
            <Products />
        </MobXProviderContext.Provider>
      )
    );
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("商品页主流程", () => {
    it("加载页面后主动发起获取商品列表的请求", async () => {
        expect(productStore.fetchProducts).toHaveBeenCalled();
    });
    test("点击按钮刷新列表", async () => {
        jest.clearAllMocks();
        await act(async () => {
            fireEvent.click(await screen.findByText("刷新"));
        });
        expect(productStore.fetchProducts).toHaveBeenCalled();
    });
});

import { Product } from '@components/products/types';
import { makeObservable, observable, runInAction } from "mobx";

export default class ProductStore {
    products: Product[] = [];

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

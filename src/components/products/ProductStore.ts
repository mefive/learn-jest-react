import { action, makeObservable, observable, runInAction } from "mobx";
import type { Product } from "./types";

export default class ProductsStore {
    products: Product[] = [];
    greeting = "";

    constructor() {
        makeObservable(this, {
            products: observable,
            greeting: observable,
            fetchProducts: action.bound,
        });
    }

    static instance: ProductsStore;

    static getInstance() {
        if (this.instance == null) {
            this.instance = new ProductsStore();
        }

        return this.instance;
    }

    async fetchProducts() {
        const projects = (await fetch("/api/products").then((res) =>
            res.json()
        )) as Product[];
        runInAction(() => {
            this.products = projects;
        });
    }

    async fetchGreeting() {
        const res = await fetch("/api/greeting");
        const data = await res.json();
        runInAction(() => {
            this.greeting = data.greeting;
        });
    }
}

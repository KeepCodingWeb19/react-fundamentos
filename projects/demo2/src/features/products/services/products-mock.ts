import PRODUCTS from "../data/products.json";
import type { Product } from "../types/product";

export const getData = (): Product[] => {
    return PRODUCTS;
};

export const getDataById = (id: string): Product | undefined => {
    return PRODUCTS.find((item) => (item.id = id));
};

export const getDataAsync = (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTS);
        }, 1_000);
    });
};


export const getDataByIdAsync = (id: string): Promise<Product | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTS.find((item) => (item.id === id)));
        }, 1_000);
    });
};

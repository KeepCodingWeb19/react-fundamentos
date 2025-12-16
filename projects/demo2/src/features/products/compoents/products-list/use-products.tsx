import repo from "@features/products/services/products-fetch";
import type { Product, ProductDTO } from "@features/products/types/product";
import { useEffect, useState } from "react";

type UseProductsType = {
    products: Product[];
    error: Error | null;
    addProduct: (product: Product) => void;
    updateProduct: (product: Product) => void;
    deleteProduct: (product: Product) => void;
};

export const useProducts = (): UseProductsType => {
    const initialProducts: Product[] = [];
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [error, setError] = useState<Error | null>(null);

    /// Funciones responsables del CRUD
    const deleteProduct = async (product: Product): Promise<void> => {
        // Estrategia optimista
        // Síncrona --> estado
        // Asíncrona --> API

        // Estrategia no optimista
        try {
            // Asíncrona --> API
            await repo.deleteProduct(product.id);
            // Síncrona --> estado
            setError(null);
            setProducts(products.filter((item) => item.id != product.id));
        } catch (error) {
            setError(error as Error);
        }
    };

    const updateProduct = async (product: Product): Promise<void> => {
        const { id, ...productDTO } = product;

        try {
            const product = await repo.updateProduct(id, productDTO);
            setError(null);
            setProducts(
                products.map((item) =>
                    item.id === product.id ? product : item
                )
            );
        } catch (error) {
            setError(error as Error);
        }
    };

    const addProduct = async (productData: ProductDTO): Promise<void> => {
        try {
            const product = await repo.createProduct(productData);
            setError(null);
            setProducts([product, ...products]);
        } catch (error) {
            setError(error as Error);
        }
    };

    useEffect(() => {
        // getDataAsync().then((data) => setProducts(data));

        const load = async (): Promise<void> => {
            try {
                const data = await repo.getProducts();
                setError(null);
                setProducts(data);
            } catch (error) {
                setError(error as Error);
            }
        };

        load();
    }, []);

    return {
        products,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
    };
};

import { useState, useEffect } from "react";
import type { Product } from "@features/products/types/product";
import { getProductsById } from "@features/products/services/products-fetch";

type UseDetailType = {
    product: Product | null;
};
export const useDetails = (id: Product["id"]): UseDetailType => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const item = await getProductsById(id);
                setProduct(item);
                console.log(item);
            } catch (error) {
                console.log((error as Error).message)
            }
        };

        load();
    }, [id]);

    return { product };
};

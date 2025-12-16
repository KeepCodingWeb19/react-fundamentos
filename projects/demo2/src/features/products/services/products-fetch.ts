import type { Product, ProductDTO } from "../types/product";

const productsUrl = import.meta.env.VITE_API_URL + "/vehicles";
// "http://localhost:8000/api/vehicles";

const getAuthHeader = (): {
    Authorization: string;
} => {
    const token = localStorage.getItem("sparest-token");
    if (!token) {
        throw new Error("Not Authorized");
    }
    return { Authorization: "Bearer " + token };
};

export const getProducts = async (): Promise<Product[]> => {
    const response: Response = await fetch(productsUrl, {
        headers: getAuthHeader(),
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

export const getProductsById = async (id: string): Promise<Product> => {
    const response: Response = await fetch(productsUrl + "/" + id, {
        headers: getAuthHeader(),
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

export const createProduct = async (
    productData: ProductDTO
): Promise<Product> => {
    const response: Response = await fetch(productsUrl, {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
            ...getAuthHeader(),
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

export const updateProduct = async (
    id: Product["id"],
    productData: Partial<ProductDTO>
): Promise<Product> => {
    const response: Response = await fetch(productsUrl + "/" + id, {
        method: "PATCH",
        body: JSON.stringify(productData),
        headers: {
            ...getAuthHeader(),
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

export const deleteProduct = async (id: Product["id"]): Promise<Product> => {
    const response: Response = await fetch(productsUrl + "/" + id, {
        method: "DELETE",
        headers: getAuthHeader(),
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

export default {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
};

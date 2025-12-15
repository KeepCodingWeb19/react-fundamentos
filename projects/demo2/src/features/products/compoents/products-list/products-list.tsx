import { useEffect, useState } from "react";
import { ProductForm } from "../product-form/product-form";
import { ProductItem } from "../product-item/product-item";
import type { Product } from "@features/products/types/product";
import { getDataAsync } from "@features/products/services/products-mock";
import "./products-list.css";

export const ProductsList: React.FC = () => {
    const initialProducts: Product[] = [];
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);

    const handleEditForm = (product: Product): void => {
        setActiveProduct(product);
        setShowForm(true);
    };

    const handleAddForm = (): void => {
        if (activeProduct) {
            setActiveProduct(null);
        }
        setShowForm(true);
    };

    const handleCloseForm = (product: Product | null, isEditing?: boolean): void => {
        setShowForm(false);
        setActiveProduct(null);
        console.log(product);
        if (product) {
            if (isEditing) {
                handleUpdateProduct(product);
            } else {
                handleAddProduct(product);
            }
        }
    };

    /// Funciones responsables del CRUD
    const handleDeleteProduct = (product: Product): void => {
        setProducts(products.filter((item) => item.id != product.id));
    };

    const handleUpdateProduct = (product: Product): void => {
        setProducts(
            products.map((item) => (item.id === product.id ? product : item))
        );
    };

    const handleAddProduct = (product: Product): void => {
        product.id = crypto.randomUUID().slice(0,4)
        setProducts([product, ...products]);
    };

    useEffect(() => {
        // getDataAsync().then((data) => setProducts(data));

        const load = async (): Promise<void> => {
            const data = await getDataAsync();
            setProducts(data);
        };

        load();
    }, []);

    return (
        <div className="products-wrapper">
            {showForm ? (
                <ProductForm item={activeProduct} onClose={handleCloseForm} />
            ) : (
                <>
                    <button onClick={handleAddForm}> Añadir producto</button>
                    <ul>
                        {products.map((item) => (
                            <li key={item.id}>
                                <ProductItem
                                    product={item}
                                    onEdit={handleEditForm}
                                    onDelete={handleDeleteProduct}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

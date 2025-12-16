import { useState } from "react";
import { ProductForm } from "../product-form/product-form";
import { ProductItem } from "../product-item/product-item";
import type { Product } from "@features/products/types/product";
import "./products-list.css";
import { useProducts } from "./use-products";
import { Card } from "@core/components/card/card";

export const ProductsList: React.FC = () => {


    const {products, error, addProduct, updateProduct, deleteProduct} = useProducts();

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
                updateProduct(product);
            } else {
                addProduct(product);
            }
        }
    };

    if (error) {
        return <div className="products-wrapper">
            <Card title="Error">
                <p>{error.message}</p>
            </Card>
        </div>

    }

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
                                    onDelete={deleteProduct}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

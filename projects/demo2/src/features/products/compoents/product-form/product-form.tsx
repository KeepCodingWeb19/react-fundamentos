import { Card } from "@core/components/card/card";
import type { Product } from "@features/products/types/product";
import { useState } from "react";

type Props = {
    item: Product | null;
    onClose: (product: Product | null, isEditing?: boolean) => void;
};

const newProduct: Product = {
    name: "",
} as Product;

export const ProductForm: React.FC<Props> = ({ item, onClose }) => {
    const isEditing = Boolean(item);
    const [product, setProduct] = useState<Product>(item || newProduct);

    const handleSave: React.FormEventHandler<HTMLFormElement> = (event): void => {
        event.preventDefault()
        // Salvar
        onClose(product, isEditing);
    };
    const handleReset = (): void => {
        onClose(null);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;
        console.log("Change form", name, value);
        setProduct({
            ...product,
            [name]: value,
        });
    };

    return (
        <Card title={product?.name}>
            <form
                className="product-form"
                onSubmit={handleSave}
                onReset={handleReset}
            >
                {isEditing && product.id && (
                    <div className="control-group">
                        <label htmlFor="id">
                            <span>ID:</span>
                            <input
                                type="text"
                                id="id"
                                value={product.id}
                                readOnly
                            />
                        </label>
                    </div>
                )}

                {/* Controles del formulario */}
                <div className="control-group">
                    <label htmlFor="name">
                        <span>Nombre:</span>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="buttons-group">
                    <button type="submit">
                        {isEditing ? "Guardar" : "Añadir"}
                    </button>
                    <button type="reset">Cancelar</button>
                </div>
            </form>
        </Card>
    );
};

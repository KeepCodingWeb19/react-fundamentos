import { Card } from "@core/components/card/card";
import type { Product } from "@features/products/types/product";
import { useNavigate } from "react-router";

type Props = {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
};

export const ProductItem: React.FC<Props> = ({ product, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (): void => {
        console.log("Edit", product.id);
        onEdit(product);
    };

    const handleDelete = (): void => {
        console.log("Delete", product.id);
        onDelete(product);
    };

    const handleGoTo = (): void => {
        navigate("/products/" + product.id);
    };

    return (
        <Card>
            <p>
                {product.id} - {product.name}
            </p>
            <div>
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Borrar</button>
                <button onClick={handleGoTo}>Detalles</button>
            </div>
            ;
        </Card>
    );
};

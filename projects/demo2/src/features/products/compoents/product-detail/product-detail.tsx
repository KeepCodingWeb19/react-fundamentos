import { getDataByIdAsync } from "@features/products/services/products-mock";
import type { Product } from "@features/products/types/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type Props = {
    id: Product["id"];
};

export const ProductDetail: React.FC<Props> = ({ id }) => {
    const [product, setProduct] = useState<Product | null>(null);

    const navigate = useNavigate()


    const handleGoBack = (): void => {
        navigate('/products')
    }

    useEffect(() => {
        const load = async (): Promise<void> => {
            const item = await getDataByIdAsync(id);
            if (item) {
                setProduct(item);
            }
        };

        load();
    }, [id]);

    return (
        <div>
            <p>ProductDetail del producto {id}</p>
            <p>Name: {product?.name}</p>
            <button onClick={handleGoBack}>Volver</button>
        </div>
    );
};

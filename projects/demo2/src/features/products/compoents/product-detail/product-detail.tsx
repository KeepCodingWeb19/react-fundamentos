import type { Product } from "@features/products/types/product";
import { useNavigate } from "react-router";
import { useDetails } from "./use-details";

type Props = {
    id: Product["id"];
};

export const ProductDetail: React.FC<Props> = ({ id }) => {
    
    const {product} = useDetails(id)
    const navigate = useNavigate()

    const handleGoBack = (): void => {
        navigate('/products')
    }

    return (
        <div>
            <p>ProductDetail del producto {id}</p>
            <p>Name: {product?.name}</p>
            <button onClick={handleGoBack}>Volver</button>
            <div style={{width: '10rem', fontSize: '0.8rem'}}>
                {JSON.stringify(product)}
            </div>
        </div>
    );
};

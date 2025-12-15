import { useParams } from "react-router";
import { ProductDetail } from "./compoents/product-detail/product-detail";
import { ProductsList } from "./compoents/products-list/products-list";

export const ProductsPage: React.FC = () => {
    const { id } = useParams();

    return (
        <section>
            <h2>Productos</h2>

            {id ? <ProductDetail id={id} /> : <ProductsList />}
        </section>
    );
};

export default ProductsPage;

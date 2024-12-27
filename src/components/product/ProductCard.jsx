import ProductCardBody from "./ProductCardBody";
import ProductCardHeader from "./ProductCardHeader";

export default function ProductCard({ title, price, description, image }) {
  return (
    <div className="product-card-container">
      <ProductCardHeader image={image} />
      <ProductCardBody title={title} price={price} />
    </div>
  );
}

import "./product.css";
import ProductDescriptionContent from "./ProductDescriptionContent";
import ProductDescriptionImg from "./ProductDescriptionImg";

export default function ProductDescription(props) {
  return (
    <div className="flex">
      <ProductDescriptionImg img={props.product.image} />
      <ProductDescriptionContent product={props.product} />
    </div>
  );
}

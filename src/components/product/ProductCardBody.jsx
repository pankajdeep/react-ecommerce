import "./product.css";

export default function ProductCardBody({ title, price }) {
  return (
    <div className="product-body">
      <div>{title}</div>
      <div>{"$" + price}</div>
    </div>
  );
}

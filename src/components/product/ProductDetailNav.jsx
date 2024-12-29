import "./product.css";

export default function ({ title }) {
  return (
    <div className="product-detail-nav-links">
      <div>HOME &gt; SHOP &gt; {title}</div>
    </div>
  );
}

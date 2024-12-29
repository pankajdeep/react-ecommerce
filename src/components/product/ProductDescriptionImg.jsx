import "./product.css";

export default function ProductDescriptionImg({ img }) {
  const imgs = [];

  for (let i = 0; i < 4; i++) {
    imgs.push(
      <div key={i}>
        <img src={img} />
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="side-product-img">{imgs}</div>
      <div className="product-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

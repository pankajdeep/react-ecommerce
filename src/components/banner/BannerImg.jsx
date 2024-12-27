import "./banner.css";

export default function BannerImg({ img }) {
  return (
    <div className="banner-img">
      <img src={img} alt="Banner Image" />
    </div>
  );
}

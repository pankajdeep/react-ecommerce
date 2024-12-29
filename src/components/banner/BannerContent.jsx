import "./banner.css";

export default function BannerContent({ title, subtitle, btnText }) {
  return (
    <div className="banner-content">
      <div className="banner-title">{title}</div>
      <div className="banner-subtitle">{subtitle}</div>
      <div>
        <button>{btnText}</button>
      </div>
    </div>
  );
}

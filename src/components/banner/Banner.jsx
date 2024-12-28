import "./banner.css";
import BannerContent from "./BannerContent";
import BannerImg from "./BannerImg";

export default function Banner(props) {
  return (
    <div className="flex-banner container">
      <BannerContent
        title={props.banner.title}
        subtitle={props.banner.subtitle}
        btnText={props.banner.btnText}
      />
      <BannerImg img={props.banner.img} />
    </div>
  );
}

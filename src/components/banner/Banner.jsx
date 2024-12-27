import "./banner.css";
import BannerContent from "./BannerContent";
import BannerImg from "./BannerImg";

var banner = {
  title: "Exclusive Offers For You",
  subtitle: "Only on best sellers products",
  img: "https://static.vecteezy.com/system/resources/previews/046/934/608/non_2x/shopping-girl-standing-on-transparent-background-free-png.png",
};

export default function Banner() {
  return (
    <div className="flex-banner container">
      <BannerContent title={banner.title} subtitle={banner.subtitle} />
      <BannerImg img={banner.img} />
    </div>
  );
}

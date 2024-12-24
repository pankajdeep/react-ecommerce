import FooterLinks from "./FooterLinks";
import Logo from "./Logo";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <div>
      <div className="footer-header">Get Exclusive Offers On Your Email</div>
      <div>Subscribe to our newsletter and stay updated.</div>
      <div>
        <Subscribe />
        <Logo />
        <FooterLinks />
      </div>
    </div>
  );
}

export default Footer;

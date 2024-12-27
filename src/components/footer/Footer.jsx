import FooterLinks from "./FooterLinks";
import Logo from "../logo/Logo";
import Subscribe from "./Subscribe";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Get Exclusive Offers On Your Email</div>
      <div>Subscribe to our newsletter and stay updated.</div>
      <div className={styles.footerBody}>
        <Subscribe />
        <Logo />
        <FooterLinks />
      </div>
    </div>
  );
}

export default Footer;

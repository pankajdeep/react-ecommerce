import Logo from "../logo/Logo";
import "./header.css";
import HeaderLinks from "./HeaderLinks";
import HeaderBtns from "./HeaderBtns";

function Header() {
  return (
    <div className="flex-header">
      <Logo />
      <HeaderLinks />
      <HeaderBtns />
    </div>
  );
}

export default Header;

import LoginBtn from "./LoginBtn";
import CartBtn from "./CartBtn";

export default function HeaderBtns() {
  return (
    <div className="flex">
      <LoginBtn />
      <CartBtn />
    </div>
  );
}

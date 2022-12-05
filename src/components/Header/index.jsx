import logo from "../../assets/logo.svg";
import Menu from "../Menu/index";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo de l'application" />
      <Menu />
    </div>
  );
}

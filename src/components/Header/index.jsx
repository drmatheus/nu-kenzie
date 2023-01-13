import "./style.css";
import Logo from "../../assets/img/Nu_KenzieBlack.svg";
import { Button } from "../Buttons";

export function Header({ page }) {
  return (
    <header>
      <div className="divHeader container">
        <img src={Logo} alt="" />
        <Button onClick={() => page(true)} text="Inicio" />
      </div>
    </header>
  );
}

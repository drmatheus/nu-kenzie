import Logo from "../../assets/img/Nu_Kenzie.svg";
import "./style.css";

export function LandingPage({ page }) {
  return (
    <div className="background">
      <div className="landingPageDiv">
        <img src={Logo} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <small>de forma rápida e segura</small>
        <button className="button buttonMain" onClick={() => page(false)}>
          Iniciar
        </button>
      </div>
    </div>
  );
}

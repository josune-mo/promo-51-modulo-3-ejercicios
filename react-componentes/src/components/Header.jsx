import "../styles/Header.scss";
import logo from "../images/logo.png";
import Link from "./Link.jsx";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav-2">
        <ul>
          <Link nombre="Productos" openInNewTab={true}></Link>
          <Link nombre="Colecciones"></Link>
          <Link nombre="Catalogo"></Link>
        </ul>
      </nav>
      <section className="header__section-1">
        <img src={logo} alt="Open Spaces" />
      </section>
      <section className="header__section-2">
        <h1>Disfruta creando espacios</h1>
        <button className="header__button-1">Comprar Ahora</button>
      </section>
    </header>
  );
}

export default Header;

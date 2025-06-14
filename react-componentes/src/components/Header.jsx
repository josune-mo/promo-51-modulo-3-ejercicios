import "../styles/Header.scss"
import iconMenu from '../images/icon-menu.svg'
import logo from '../images/logo.png'

function Header() {
  return (
    <header className="header">
      <nav className="header__nav-1">
        <a href="https://adalab.es/" target="_blank">
          <img
            src={iconMenu}
            alt="icono de menú"
            className="header__nav-image"
          />
        </a>
      </nav>
      <nav className="header__nav-2">
        <a href="https://adalab.es/" target="_blank">
          Productos
        </a>
        <a href="https://adalab.es/" target="_blank">
          Colecciones
        </a>
        <a href="https://adalab.es/" target="_blank">
          Tienda
        </a>
        <a href="https://adalab.es/" target="_blank">
          Inicio
        </a>
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
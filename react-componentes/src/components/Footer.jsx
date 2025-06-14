import "../styles/Footer.scss";
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import arrow from '../images/arrow.svg'

function Footer() {
  return (
    <footer className="footer">
      <section class="footer__section">
        <article class="footer__article">
          <p>Tienda</p>
          <ul className="footer__list-links">
            <li>
              <a href="https://adalab.es/" target="_blank">
                Productos
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Cajoneras
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Para toda la casa
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Habitaciones
              </a>
            </li>
          </ul>
        </article>
        <article className="footer__article">
          <p>Nosotros</p>
          <ul className="footer__list-links">
            <li>
              <a href="https://adalab.es/" target="_blank">
                Nuestra guía
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Nuestro diseño
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Nuestra historia
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Ayuda
              </a>
            </li>
          </ul>
        </article>
        <article className="footer__article">
          <p>Contacto</p>
          <ul className="footer__list-links">
            <li>
              <a href="mailto:ayuda@openspaces.com">ayuda@openspaces.com</a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Socios
              </a>
            </li>
          </ul>
          <a href="https://adalab.es/" target="_blank">
            <img
              src={linkedin}
              alt="Icono de LinkedIn"
              className="footer__redes-sociales"
            />
          </a>
          <a href="https://adalab.es/" target="_blank">
            <img
              src={instagram}
              alt="Icono de Instagram"
              className="footer__redes-sociales"
            />
          </a>
          <a href="https://adalab.es/" target="_blank">
            <img
              src={twitter}
              alt="Icono de Twitter"
              className="footer__redes-sociales"
            />
          </a>
        </article>
      </section>
      <div className="footer__arrow">
        <a href="#">
          <img src={arrow} alt="Icono de flecha" />
        </a>
      </div>
    </footer>
  )
}

export default Footer

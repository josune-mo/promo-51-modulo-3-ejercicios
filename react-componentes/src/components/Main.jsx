import "../styles/Main.scss";
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'
import creandoEspacios from '../images/creando-espacios.jpg'

function Main() {
  return (
    <main className="main">
      <section className="main__section-1">
        <h2>Volverse organizado se siente mejor con OPEN SPACES</h2>
      </section>
      <section className="main__section-2">
        <article className="main__article-1">
          <img src={icon1} alt="Icono de una mesa" />
          <h3>Lo que necesitas</h3>
          <p>Una linea de productos diseñados para todos tus espacios</p>
        </article>
        <article className="main__article-1">
          <img
            src={icon2}
            alt="Icono de una bolsa biodegradable"
          />
          <h3>Materias primas sustentables</h3>
          <p>Todos los productos con materias primas sustentables</p>
        </article>
        <article className="main__article-1">
          <img
            src={icon3}
            alt="Icono de un parque"
            className="main__icon"
          />
          <h3>Guía</h3>
          <p>Soporte y asesoramiento para ayudarte con tu objetivo</p>
        </article>
      </section>
      <section className="main__section-3">
        <article className="main__article-2">
          <img src={icon4} alt="Icono de una furgoneta" />
          <h3>Envío gratis garantizado</h3>
          <p>Envío gratis en compras desde 100</p>
          <a href="#" class="main__article-link">
            Comprar ahora
          </a>
        </article>
      </section>
      <section className="main__section-4">
        <article className="main__article-3">
          <h3>Disfruta creando espacios</h3>
          <p>Una línea de productos diseñados para todos tus espacios</p>
          <button className="main__button-1">Comprar Ahora</button>
        </article>
        <div className="main__image-container">
          <img
            src={creandoEspacios}
            alt="Imagen de cajas organizadas"
            className="main__image"
          />
        </div>
      </section>
    </main>
  );
}

export default Main

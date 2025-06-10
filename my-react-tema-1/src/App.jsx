import reactLogo from "./assets/react.svg";
import Atena from "./assets/Atena.jpeg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <main className="page__main">
        <section className="main__section-1">
          <h2>Una historia puede cambiar tu vida ... o la de alguien más 💫</h2>
          <p>
            ¿Hay un libro que te marcó? ¿Una historia que recomendarías mil
            veces? En “Mi Libro Favorito”, puedes crear una hermosa reseña
            visual para compartirla con otros lectores, hacer nuevas conexiones
            y descubrir joyas literarias que aún no conoces.
          </p>
          <img src={Atena} alt="Atena" className="main__section-1__img" />
        </section>
      </main>
    </>
  );
}

export default App;

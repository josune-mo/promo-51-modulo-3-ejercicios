function Galeria({ fotos }) {
  return (
    <ul>
      {fotos.map((foto) => (
        <li>
          <h1>{foto.title}</h1>
          <img src={foto.url} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default Galeria

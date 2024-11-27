const Menu = ({ view, setView }) => {
  return (
    <nav>
      <button onClick={() => setView("web")}>Ver Web</button>

      <button onClick={() => setView("pdf")}>Ver PDF</button>

      <button>Descargar</button>
    </nav>
  );
};
export default Menu;

import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./PDF";
const Menu = ({ view, setView, poem }) => {
  return (
    <nav>
      <button onClick={() => setView("web")}>Ver Web</button>

      <button onClick={() => setView("pdf")}>Ver PDF</button>

      <PDFDownloadLink document={<PDF poem={poem} />} fileName="el test.pdf">
        <button>Descargar</button>
      </PDFDownloadLink>
    </nav>
  );
};
export default Menu;

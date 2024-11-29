import { PDFDownloadLink, BlobProvider, pdf } from "@react-pdf/renderer";
import PDF from "./PDF";
import axios from "axios";
const Menu = ({ view, setView, poem }) => {
  const handleSendPdf = async () => {
    const blob = await pdf(<PDF poem={poem} />).toBlob();
    // console.log(blob);

    // Send the Blob to the server
    const formData = new FormData();
    formData.append("pdfFile", blob, "my-pdf.pdf");
    console.log(Object.fromEntries(formData));

    // ... (Send the FormData to the server)
  };
  return (
    <nav>
      <button onClick={() => setView("web")}>Ver Web</button>
      <button onClick={() => setView("pdf")}>Ver PDF</button>
      <PDFDownloadLink document={<PDF poem={poem} />} fileName="el test.pdf">
        <button>Descargar</button>
      </PDFDownloadLink>

      <button onClick={handleSendPdf}>make blob</button>
    </nav>
  );
};
export default Menu;

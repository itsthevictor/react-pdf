import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} fileName="TEST PDF">
        {({ loading }) =>
          loading ? (
            <button>loading document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      <PDFFile />
    </div>
  );
}

export default App;

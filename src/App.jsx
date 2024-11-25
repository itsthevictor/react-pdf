import { useEffect, useState } from "react";
import PDFFile from "./components/PDFFile";
// import { PDFDownloadLink } from "@react-pdf/renderer";

import ReactPDF, {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

function App() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className="App">
      {/* <PDFDownloadLink document={<PDFFile />} fileName="TEST PDF">
        {({ loading }) =>
          loading ? (
            <button>loading document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink> */}
      <PDFFile />
    </div>
  );
}

export default App;

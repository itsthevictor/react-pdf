import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./components/Menu";
import WebView from "./components/WebView";
import PDF from "./components/PDF";
import { PDFViewer } from "@react-pdf/renderer";

const content = {
  title: "Lo! in the orient when the gracious light",
  author: "Will Shakes",
  text: `Lo! in the orient when the gracious light\n
Lifts up his burning head, each under eye\n
Doth homage to his new-appearing sight,\n
Serving with looks his sacred majesty;\n
And having climb’d the steep-up heavenly hill,\n
Resembling strong youth in his middle age,\n
yet mortal looks adore his beauty still,\n
Attending on his golden pilgrimage;\n
But when from highmost pitch, with weary car,\n
Like feeble age, he reeleth from the day,\n
The eyes, ‘fore duteous, now converted are\n
From his low tract and look another way:\n
So thou, thyself out-going in thy noon,\n
Unlook’d on diest, unless thou get a son.`,
};

function App() {
  const [poem, setPoem] = useState(null);
  const [view, setView] = useState("web");

  useEffect(() => {
    setPoem(content);
    console.log(poem);
  }, []);

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <Menu view={view} setView={setView} poem={poem} />
      {view === "web" && <WebView poem={poem} />}
      {view === "pdf" && (
        <PDFViewer
          showToolbar={false}
          style={{ width: "100%", height: "90vh" }}
        >
          <PDF poem={poem} />
        </PDFViewer>
      )}
    </div>
  );
}

export default App;

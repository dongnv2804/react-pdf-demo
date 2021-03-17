import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./pdf";

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<Pdf />} fileName="test.pdf">
        {({ blob, url, loading, error }) => (loading ? "load" : "down")}
      </PDFDownloadLink>
    </div>
  );
}

export default App;

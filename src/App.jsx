import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GoogleCTF from "./pages/GoogleCTF";
import NahamconCTF from "./pages/NahamconCTF";
import WaniCTF from "./pages/WaniCTF";
import Footer from "./components/Footer";
import Show from "./pages/Show";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/googlectf" element={<GoogleCTF />} />;
          <Route path="/nahamconctf" element={<NahamconCTF />} />;
          <Route path="/wanictf" element={<WaniCTF />} />;
          <Route path="/solution/:chall" element={<Show />} />;
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

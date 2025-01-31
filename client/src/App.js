import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

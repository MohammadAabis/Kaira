import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

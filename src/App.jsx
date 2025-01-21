import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KotaSemarang from "./pages/kotasemarang";
import KabPemalang from "./pages/kabpemalang";

const App = () => (
  <Router>
    <Routes>
      <Route path="/kotasemarang" element={<KotaSemarang />} />
      <Route path="/kabpemalang" element={<KabPemalang />} />
    </Routes>
  </Router>
);

export default App;

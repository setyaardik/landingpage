import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KotaSemarang from "./pages/kotasemarang";

const App = () => (
  <Router>
    <Routes>
      <Route path="/kotasemarang" element={<KotaSemarang />} />
    </Routes>
  </Router>
);

export default App;

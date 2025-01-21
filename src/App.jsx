import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KotaSemarang from "./pages/kotasemarang";
import KabPemalang from "./pages/kabpemalang";
import KabPurbalingga from "./pages/kabpurbalingga";
import KabSragen from "./pages/kabsragen"
import KabTegal from "./pages/kabtegal"
import KabWonosobo from "./pages/kabwonosobo"
import KabKendal from "./pages/kabkendal"
import KotaPekalongan from "./pages/kotapekalongan"

const App = () => (
  <Router>
    <Routes>
      <Route path="/kotasemarang" element={<KotaSemarang />} />
      <Route path="/kabpemalang" element={<KabPemalang />} />
      <Route path="/kabpurbalingga" element={<KabPurbalingga />} />
      <Route path="/kabsragen" element={<KabSragen />} />
      <Route path="/kabtegal" element={<KabTegal />} />
      <Route path="/kabwonosobo" element={<KabWonosobo />} />
      <Route path="/kabkendal" element={<KabKendal />} />
      <Route path="/kotapekalongan" element={<KotaPekalongan />} />
    </Routes>
  </Router>
);

export default App;

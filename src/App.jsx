import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KotaSemarang from "./pages/kotasemarang";
import KabPemalang from "./pages/kabpemalang";
import KabPurbalingga from "./pages/kabpurbalingga";
import KabSragen from "./pages/kabsragen";
import KabTegal from "./pages/kabtegal";
import KabWonosobo from "./pages/kabwonosobo";
import KabKendal from "./pages/kabkendal";
import KotaPekalongan from "./pages/kotapekalongan";
import KabBanjarnegara from "./pages/kabbanjarnegara";
import KabBanyumas from "./pages/kabbanyumas";
import KabBrebes from "./pages/kabbrebes";
import KabPekalongan from "./pages/kabpekalongan";
import KabBatang from "./pages/kabbatang";
import KabBlora from "./pages/kabblora";
import KabBoyolali from "./pages/kabboyolali";

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

      <Route path="/kabbanjarnegara" element={<KabBanjarnegara />} />
      <Route path="/kabbanyumas" element={<KabBanyumas />} />
      <Route path="/kabbrebes" element={<KabBrebes />} />
      <Route path="/kabpekalongan" element={<KabPekalongan />} />
      <Route path="/kabbatang" element={<KabBatang />} />
      <Route path="/kabblora" element={<KabBlora />} />
      <Route path="/kabboyolali" element={<KabBoyolali />} />
    </Routes>
  </Router>
);

export default App;

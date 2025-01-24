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
import KotaSurakarta from "./pages/kotasurakarta"; 
import KabDemak from "./pages/kabdemak";
import KabCilacap from "./pages/kabcilacap";
import KabKlaten from "./pages/kabklaten";
import KotaSalatiga from "./pages/kotasalatiga";
import KabKaranganyar from "./pages/kabkaranganyar";
import KabKebumen from "./pages/kabkebumen";
import KabKudus from "./pages/kabkudus";
import KabMagelang from "./pages/kabmagelang";

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
      <Route path="/kotasurakarta" element={<KotaSurakarta />} />
      <Route path="/kabdemak" element={<KabDemak />} />
      <Route path="/kabcilacap" element={<KabCilacap />} />
      <Route path="/kabklaten" element={<KabKlaten />} />
      <Route path="/kotasalatiga" element={<KotaSalatiga />} />
      <Route path="/kabkaranganyar" element={<KabKaranganyar />} />
      <Route path="/kabkebumen" element={<KabKebumen />} />
      <Route path="/kabkudus" element={<KabKudus />} />
      <Route path="/kabmagelang" element={<KabMagelang />} />
    </Routes>
  </Router>
);

export default App;

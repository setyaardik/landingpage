import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"; // ✅ Import komponen
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
import KabPati from "./pages/kabpati";
import KabPurworejo from "./pages/kabpurworejo";
import KotaTegal from "./pages/kotategal";
import KabRembang from "./pages/kabrembang";
import KabJepara from "./pages/kabjepara";
import KabWonogiri from "./pages/kabwonogiri";
import KotaSurakarta from "./pages/kotasurakarta";
import KabDemak from "./pages/kabdemak";
import KabCilacap from "./pages/kabcilacap";
import KabKlaten from "./pages/kabklaten";
import KotaSalatiga from "./pages/kotasalatiga";
import KabKaranganyar from "./pages/kabkaranganyar";
import KabKebumen from "./pages/kabkebumen";
import KabKudus from "./pages/kabkudus";
import KabMagelang from "./pages/kabmagelang";
import KabSukaharjo from "./pages/kabsukoharjo";
import KabGrobogan from "./pages/kabgrobogan";
import KabSemarang from "./pages/kabsemarang";
import KotaMagelang from "./pages/kotamagelang";
import Home from "./pages/home";

const App = () => (
  <Router>
    <ScrollToTop /> {/* ✅ Tambahkan komponen ini di dalam Router */}
    <Routes>
      <Route path="/kabsemarang" element={<KabSemarang />} />
      <Route path="/kotasemarang" element={<KotaSemarang />} />
      <Route path="/kabpemalang" element={<KabPemalang />} />
      <Route path="/kabpurbalingga" element={<KabPurbalingga />} />
      <Route path="/kabsragen" element={<KabSragen />} />
      <Route path="/kabtegal" element={<KabTegal />} />
      <Route path="/kabwonosobo" element={<KabWonosobo />} />
      <Route path="/kabkendal" element={<KabKendal />} />
      <Route path="/kotapekalongan" element={<KotaPekalongan />} />
      <Route path="/kabpati" element={<KabPati />} />
      <Route path="/kabbanjarnegara" element={<KabBanjarnegara />} />
      <Route path="/kabbanyumas" element={<KabBanyumas />} />
      <Route path="/kabbrebes" element={<KabBrebes />} />
      <Route path="/kabpekalongan" element={<KabPekalongan />} />
      <Route path="/kabbatang" element={<KabBatang />} />
      <Route path="/kabblora" element={<KabBlora />} />
      <Route path="/kabboyolali" element={<KabBoyolali />} />
      <Route path="/kabpurworejo" element={<KabPurworejo />} />
      <Route path="/kotategal" element={<KotaTegal />} />
      <Route path="/kabrembang" element={<KabRembang />} />
      <Route path="/kabjepara" element={<KabJepara />} />
      <Route path="/kabwonogiri" element={<KabWonogiri />} />
      <Route path="/kotasurakarta" element={<KotaSurakarta />} />
      <Route path="/kabdemak" element={<KabDemak />} />
      <Route path="/kabcilacap" element={<KabCilacap />} />
      <Route path="/kabklaten" element={<KabKlaten />} />
      <Route path="/kotasalatiga" element={<KotaSalatiga />} />
      <Route path="/kabkaranganyar" element={<KabKaranganyar />} />
      <Route path="/kabkebumen" element={<KabKebumen />} />
      <Route path="/kabkudus" element={<KabKudus />} />
      <Route path="/kabmagelang" element={<KabMagelang />} />
      <Route path="/kotamagelang" element={<KotaMagelang />} />
      <Route path="/kabsukoharjo" element={<KabSukaharjo />} />
      <Route path="/kabgrobogan" element={<KabGrobogan />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;

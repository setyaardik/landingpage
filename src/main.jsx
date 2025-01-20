import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Logo from "./images/logo-prpp.png";
import BatikBackground from "./images/batik-background.png";
import AnjunganImage from "./images/anjungan-semarang.png";
import TahuGimbal from "./images/tahu-gimbal.png";
import Dugderan from "./images/dugderan.png";
import Wisata from "./images/wisata.png";
import InstagramIcon from "./images/instagram-icon.png";
import FacebookIcon from "./images/facebook-icon.png";

const Header = () => (
  <header
    className="text-white py-4 shadow-md rounded-b-xl"
    style={{
      backgroundImage: `url(${BatikBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backdropFilter: "blur(5px)",
    }}
  >
    <div className="container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="Logo PTPP Jawa Tengah"
          className="rounded-full w-12 h-12 object-cover"
        />
        <h1 className="text-lg font-semibold">PRPP Jawa Tengah</h1>
      </div>
    </div>
  </header>
);

const CitySection = () => (
  <div className="bg-gradient-to-r from-orange-100 via-red-100 to-orange-200 text-white text-center py-16">
    <h1 className="text-4xl font-bold text-red-700 mb-6 drop-shadow-lg">KOTA SEMARANG</h1>
    <div className="mx-auto max-w-3xl px-6">
      <div className="relative group">
        <img
          src={AnjunganImage}
          alt="Anjungan Kota Semarang"
          className="rounded-2xl shadow-2xl mb-6 w-full aspect-video object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
      </div>
      <p className="text-lg leading-relaxed bg-white bg-opacity-80 text-gray-800 rounded-lg p-4">
        Anjungan Kota Semarang adalah salah satu Anjungan Daerah di Taman Mini Jawa Tengah, yaitu Grand Maerakaca. Anjungan ini menampilkan beberapa arsitektur rumah adat di Jawa Tengah.
      </p>
    </div>
  </div>
);

const Section = ({ title, description, image }) => (
  <div className="bg-gradient-to-r from-orange-100 via-red-100 to-orange-200 text-center py-12">
    <div className="container mx-auto max-w-3xl px-6">
      <h2 className="text-3xl font-bold text-red-700 mb-6 drop-shadow-lg">{title}</h2>
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-xl mb-6 w-full aspect-video object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
      </div>
      <p className="text-gray-700 text-lg leading-relaxed bg-white bg-opacity-80 rounded-lg p-4">
        {description}
      </p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-8 rounded-t-xl">
    <div className="container mx-auto text-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Sosial Media</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/grandmaerakaca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://web.facebook.com/GrandMaerakaca/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Kontak Kami</h3>
          <ul className="text-gray-300">
            <li>Telepon: 024-7617433</li>
            <li>Email: info@ptpp-jateng.com</li>
            <li>Website: <a href="https://www.ptpp-jateng.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.ptpp-jateng.com</a></li>
          </ul>
        </div>
      </div>
      <p className="text-lg font-light mt-6">&copy; 2025 PT Rekreasi dan Promosi Pembangunan Jawa Tengah. All Rights Reserved.</p>
    </div>
  </footer>
);


const Home = () => (
  <div className="bg-gradient-to-b from-yellow-50 via-red-50 to-yellow-100 min-h-screen flex flex-col">
    <Header />
    <CitySection />
    <Section
      title="Makanan Khas Semarang"
      description="Tahu gimbal merupakan masakan khas Semarang yang terbuat dari tahu goreng, sayuran, dan bakwan udang."
      image={TahuGimbal}
    />
    <Section
      title="Tradisi Semarang"
      description="Tradisi Dugderan merupakan acara menyambut Ramadan dengan iringan bedug dan meriam."
      image={Dugderan}
    />
    <Section
      title="Wisata Kota Semarang"
      description="Jelajahi wisata ikonik seperti Lawang Sewu, Kota Lama, dan Pantai Marina."
      image={Wisata}
    />
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Route,Routes, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

import Logo from "../images/logo.png";
import InstagramIcon from "../images/instagram-icon.png";
import TiktokIcon from "../images/tiktok-icon.png";
import BatikBackground from "../images/batik-background.png";

import AnjunganImage from "../images/kabbanjarnegara/anjungan-kabbanjarnegara.png";
import Krandegan from "../images/kabbanjarnegara/krandegan.png";
import Suran from "../images/kabbanjarnegara/suran.png";
import Wisata from "../images/kabbanjarnegara/wisata.png";

AOS.init({ duration: 1000, once: false });

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="fixed bottom-4 left-4 bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-all"
    >
      ←
    </button>
  );
};

const Header = () => (
  <header className="relative text-white py-4 shadow-md rounded-b-xl">
    <div
      className="absolute inset-0 rounded-b-xl"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(120, 0, 0, 0.7), rgba(255, 60, 0, 0.7)), url(${BatikBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(1px)",
        zIndex: 0,
      }}
    ></div>
    <div
      className="absolute inset-0 z-0"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.)" }}
    ></div>

    <div className="relative z-10 container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="Logo prpp Jawa Tengah"
          className="rounded-full w-12 h-12 object-cover"
        />
        <h1 className="text-2xl font-semibold text-white drop-shadow-black drop-shadow-lg">
          Grand Maerakaca
        </h1>
      </div>
    </div>
  </header>
);

const CitySection = () => (
  <div
    className="bg-gradient-to-r from-orange-100 via-red-100 to-orange-200 text-white text-center py-16"
    data-aos="fade-up"
  >
    <h1 className="text-4xl font-bold text-red-700 mb-6 drop-shadow-lg">
      KABUPATEN BANJARNEGARA
    </h1>
    <div className="mx-auto max-w-3xl px-6">
      <div className="relative group">
        <img
          src={AnjunganImage}
          alt="Anjungan Kota Semarang"
          className="rounded-2xl shadow-2xl mb-6 w-full aspect-video object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
      </div>
      <p className="text-lg leading-relaxed bg-white bg-opacity-80 text-gray-800 rounded-lg p-4">
        Kabupaten Banjarnegara berdiri pada 26 Februari 1571, ketika Raden Joko
        Kaiman membagi wilayah Wirasaba menjadi empat bagian setelah menerima
        kekuasaan dari Sultan Hadiwijaya. Salah satu wilayah hasil pembagian
        tersebut adalah Banjar Pertambakan, yang kemudian berkembang menjadi
        cikal bakal Kabupaten Banjarnegara. Pembagian ini menandai awal
        berdirinya Banjarnegara sebagai sebuah wilayah administratif.
      </p>
    </div>
  </div>
);

const Section = ({ title, description, image }) => (
  <div
    className="bg-gradient-to-r from-orange-100 via-red-100 to-orange-200 text-center py-12"
    data-aos="fade-up"
  >
    <div className="container mx-auto max-w-3xl px-6">
      <h2 className="text-3xl font-bold text-red-700 mb-6 drop-shadow-lg">
        {title}
      </h2>
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
  <footer
    className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-8 rounded-t-xl"
    data-aos="fade-up"
  >
    <div className="container mx-auto text-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2 text-center">Sosial Media</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/grandmaerakaca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.tiktok.com/@grandmaerakaca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={TiktokIcon} alt="Tiktok" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold">Kontak Kami</h3>
        </div>
        <div className="mr-7">
          <ul className="text-gray-300">
            <li>Telepon: 024-7617433</li>
            <li>Whatsapp: +6281329000157</li>
            <li>Email: info@prppjawatengah.com</li>
            <li>
              Website:{" "}
              <a
                href="https://prppjawatengah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                prppjawatengah.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-lg font-light mt-6 text-center">
        &copy; 2025 PT Rekreasi dan Promosi Pembangunan Jawa Tengah. All Rights
        Reserved.
      </p>
    </div>
  </footer>
);

const Home = () => (
  <div className="bg-gradient-to-b from-yellow-50 via-red-50 to-yellow-100 min-h-screen flex flex-col">
    <Header />
    <CitySection />
    <Section
      title="Makanan Khas"
      description="Soto krandegan adalah salah satu kuliner khas Kota Banjarnegara kombinasi antara kuah kuning dengan santan yang dicampur dan direbus dengan tulang-tulang dan daging sapi menambah cita rasa gurih soto krandegan."
      image={Krandegan}
    />
    <Section
      title="Tradisi"
      description="Tradisi Suran adalah upacara adat tahunan yang diadakan sebagai bentuk rasa syukur kepada Tuhan Yang Maha Esa atas hasil panen yang melimpah."
      image={Suran}
    />
    <Section
      title="Wisata"
      description="Kawah Sileri Dieng, terletak di Desa Kepakisan, Kabupaten Banjarnegara, Jawa Tengah, adalah kawah aktif yang memukau."
      image={Wisata}
    />
    <Footer />
    <BackButton />
  </div>
);

export default Home;

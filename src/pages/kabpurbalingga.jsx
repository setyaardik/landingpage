import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

import Logo from "../images/logo.png";
import InstagramIcon from "../images/instagram-icon.png";
import FacebookIcon from "../images/facebook-icon.png";
import BatikBackground from "../images/batik-background.png";

import Anjungan from "../images/kabpurbalingga/anjungan.png";
import Makanan from "../images/kabpurbalingga/makanan.png";
import Kesenian from "../images/kabpurbalingga/kesenian.png";
import Wisata from "../images/kabpurbalingga/owabong.png";

AOS.init({ duration: 1000, once: false });

const Header = () => (
  <header className="relative text-white py-4 shadow-md rounded-b-xl">
    <div
      className="absolute inset-0 rounded-b-xl"
      style={{
        backgroundImage: `url(${BatikBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(1px)",
        zIndex: 0,
      }}
    ></div>
    <div
      className="absolute inset-0 z-0"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
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

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/home")}
      className="fixed bottom-4 left-4 bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-all"
    >
      ←
    </button>
  );
};

const CitySection = () => (
  <div
    className="bg-gradient-to-r from-orange-100 via-red-100 to-orange-200 text-white text-center py-16"
    data-aos="fade-up"
  >
    <h1 className="text-4xl font-bold text-red-700 mb-6 drop-shadow-lg">
      KABUPATEN PURBALINGGA
    </h1>
    <div className="mx-auto max-w-3xl px-6">
      <div className="relative group">
        <img
          src={Anjungan}
          alt="Anjungan Kabupaten Purbalingga"
          className="rounded-2xl shadow-2xl mb-6 w-full aspect-video object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
      </div>
      <p className="text-lg leading-relaxed bg-white bg-opacity-80 text-gray-800 rounded-lg p-4">
        Kyai Arsantaka, tokoh penting Purbalingga, berjasa dalam Perang Jenar
        mendukung Paku Buwono II. Putranya, Kyai Arsayuda, menjadi Tumenggung
        Karangwelas dan memindahkan pusat pemerintahan ke Purbalingga. Hari jadi
        Purbalingga ditetapkan pada 18 Desember 1830.
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
          <h3 className="text-lg font-bold mb-2">Sosial Media</h3>
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
              href="https://web.facebook.com/GrandMaerakaca/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Kontak Kami</h3>
          <ul className="text-gray-300">
            <li>Telepon: 024-7617433</li>
            <li>Whatsapp: +6281329000157</li>
            <li>Email: info@prppjawatengah.com</li>
            <li>
              Website:{" "}
              <a
                href="prppjawatengah.com"
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
      <p className="text-lg font-light mt-6">
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
      description="Salah satu makanan khas purbalingga yaitu Sate Plater. Selain madura yang dikenal dengan satenya, Purbalingga juga punya versinya sendiri. Jenis satenya bahkan bisa dikatakan berlawanan walau masih menggunakan bahan yang sama, daging sate. Yang jadi pembeda adalah bumbu dan cara pengolahan. Daging di sate ini sudah direndam dan direbus plus bumbu. Kemudian dibakar untuk rasa yang lebih meresap dan enak."
      image={Makanan}
    />
    <Section
      title="Kesenian"
      description="Ebeg adalah tari tradisional khas Purbalingga dengan properti utama kuda kepang, menggambarkan kegagalan prajurit berkuda. Dilengkapi atraksi barongan, penthol, dan cepet, tarian ini diiringi gamelan."
      image={Kesenian}
    />
    <Section
      title="Wisata"
      description="Salah satu objek wisata di Kabupaten Purbalingga yaitu Owabong, Merupakan objek wisata air yang terletak di jl. Raya Owabong No. 1, Dusun 2, Bojongsari, Kec. Bojongsari, Kab. Purbalingga, Jawa Tengah"
      image={Wisata}
    />
    <Footer />
    <BackButton />
  </div>
);

export default Home;

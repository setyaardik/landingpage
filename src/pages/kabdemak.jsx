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
import TiktokIcon from "../images/tiktok-icon.png";
import BatikBackground from "../images/batik-background.png";

import AnjunganImage from "../images/kabdemak/anjungan-kabdemak.png";
import Tradisi from "../images/kabdemak/tradisi.png";
import Kerajinan from "../images/kabdemak/pintu.png";
import Wisata from "../images/kabdemak/wisata.png";

AOS.init({ duration: 1000, once: false });

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

const CitySection = () => (
  <div
    className="bg-gradient-to-r from-orange-100 via-red-100 to-orange-200 text-white text-center py-16"
    data-aos="fade-up"
  >
    <h1 className="text-4xl font-bold text-red-700 mb-6 drop-shadow-lg">
      KABUPATEN DEMAK
    </h1>
    <div className="mx-auto max-w-3xl px-6">
      <div className="relative group">
        <img
          src={AnjunganImage}
          alt="Anjungan Kabupaten Demak"
          className="rounded-2xl shadow-2xl mb-6 w-full aspect-video object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
      </div>
      <p className="text-lg leading-relaxed bg-white bg-opacity-80 text-gray-800 rounded-lg p-4">
        Kabupaten Demak dulunya merupakan pusat Kesultanan Demak, kerajaan Islam
        pertama di Jawa yang didirikan oleh Raden Patah pada abad ke-15.
        Kesultanan ini menjadi pusat dakwah Islam dan perniagaan di Nusantara.
        Masjid Agung Demak, yang dibangun oleh Walisongo, menjadi ikon
        bersejarah sekaligus simbol penyebaran Islam di Jawa. Hingga kini,
        Masjid Agung Demak menjadi salah satu situs penting yang
        merepresentasikan kejayaan Islam pada masa itu.
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
      title="Tradisi"
      description="Tradisi Apitan adalah upacara adat tahunan di Kabupaten Demak yang diadakan sebagai bentuk syukur kepada Tuhan atas hasil panen dan rezeki yang diberikan. Tradisi ini biasanya digelar di bulan Dzulqa’dah dengan membawa gunungan hasil bumi untuk dikirab dan didoakan bersama. Setelah prosesi doa, gunungan dibagikan kepada masyarakat sebagai simbol keberkahan. Tradisi ini juga dikenal sebagai bagian dari Sedekah Bumi."
      image={Tradisi}
    />
    <Section
      title="Kerajinan"
      description="Ukiran Pintu Bledeg adalah salah satu peninggalan bersejarah yang terdapat di Masjid Agung Demak. Pintu ini memiliki ukiran rumit dengan simbol-simbol yang mencerminkan filosofi Islam dan budaya Jawa. Nama Bledeg (petir) merujuk pada pola ukirannya yang menyerupai kilatan petir, yang melambangkan kekuatan dan kebesaran Allah."
      image={Kerajinan}
    />
    <Section
      title="Wisata"
      description="Masjid Agung Demak adalah masjid bersejarah yang didirikan oleh Walisongo pada abad ke-15, pada masa Kesultanan Demak yang dipimpin oleh Raden Patah. Masjid ini menjadi simbol awal penyebaran Islam di Jawa. Arsitekturnya khas Jawa, dengan atap berbentuk limas bertingkat tiga yang melambangkan iman, Islam, dan ihsan. Salah satu bagian ikoniknya adalah Soko Guru, tiang penyangga masjid yang dibuat dari susunan kayu oleh Sunan Kalijaga."
      image={Wisata}
    />
    <Footer />
    <BackButton />
  </div>
);

export default Home;

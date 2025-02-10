import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

import Logo from "../images/logo.png";
import InstagramIcon from "../images/instagram-icon.png";
import FacebookIcon from "../images/facebook-icon.png";
import BatikBackground from "../images/batik-background.png";

import Anjungan from "../images/kabtegal/anjungan.png";
import Makanan from "../images/kabtegal/makanan.png";
import Tradisi from "../images/kabtegal/tradisi.png";
import Wisata from "../images/kabtegal/wisata.png";

AOS.init({ duration: 1000, once: false });

const Header = () => (
  <header className="relative text-white py-4 shadow-md rounded-b-xl">
    <div
      className="absolute inset-0 rounded-b-xl"
      style={{
        backgroundImage: `url(${BatikBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(1.5px)",
        zIndex: 0,
      }}
    ></div>
    <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>
    <div className="relative z-10 container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="Logo PTPP Jawa Tengah"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="bg-black bg-opacity-45 py-0.1 px-1 rounded-lg">
        <h1 className="text-2xl font-semibold drop-shadow-lg">
          Grand Maerakaca
        </h1>
        </div>
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
      KABUPATEN TEGAL
    </h1>
    <div className="mx-auto max-w-3xl px-6">
      <div className="relative group">
        <img
          src={Anjungan}
          alt="Anjungan Kabupaten Sragen"
          className="rounded-2xl shadow-2xl mb-6 w-full aspect-video object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
      </div>
      <p className="text-lg leading-relaxed bg-white bg-opacity-80 text-gray-800 rounded-lg p-4">
      Nama Tegal berasal dari kata Tetegal yang berarti tanah subur. Kabupaten Tegal didirikan pada 18 Mei 1601 oleh Ki Gede Sebayu, seorang keturunan Majapahit. Setelah membantu merebut kembali Keraton Pajang, ia bergerak ke Tegal, mengembangkan pertanian, dan memperluas lahan. Atas jasanya, Ki Gede Sebayu diangkat menjadi Juru Demung oleh Panembahan Senopati, menandai berdirinya Kabupaten Tegal.
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
      title="Tradisi"
      description="Salah satu tradisi yang ada di Kabupaten Tegal yaitu Wayang Golek Cepak Tegalan, seni tradisional Tegal, dibuat dari kayu kedondong jaran yang tahan lama dan dihias cat semprot. Seni ini dipopulerkan oleh dalang Ki Enthus Susmono, yang menciptakan tokoh Lupit dan Slenteng sebagai maskot daerah Tegal."
      image={Tradisi}
    />
    <Section
      title="Makanan Khas"
      description="Tahu aci adalah kuliner khas Tegal berbahan dasar tahu, aci, dan bumbu. Tahu digoreng kering hingga tekstur luarnya crispy, sedangkan bagian dalamnya lembut dan kenyal. Selain untuk ngemil, tahu aci biasanya juga untuk oleh-oleh."
      image={Makanan}
    />
    <Section
      title="Wisata"
      description="Salah satu wisata yang ada di Kabupaten Tegal yaitu Waduk Cacaban. Waduk tak hanya digunakan untuk menyimpan air, tapi juga sebagai tempat wisata. Keindahan Waduk Cacaban tak dapat dimungkiri lagi, apalagi saat matahari terbit. Semakin menambah daya tarik, ada hutan yang mengelilingi area waduk. Tak hanya itu, tempat ini dilengkapi warung apung, kapal wisata, hingga area pemancingan."
      image={Wisata}
    />
    <Footer />
  </div>
);

export default Home;

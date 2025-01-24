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

import AnjunganImage from "../images/kotasurakarta/anjungan-kotasurakarta.jpg";
import Pakaian from "../images/kotasurakarta/beskap.png";
import Tradisi from "../images/kotasurakarta/tradisi.png";
import Kerajinan from "../images/kotasurakarta/blangkon.png";

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
    <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>
    <div className="relative z-10 container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="Logo prpp Jawa Tengah"
          className="rounded-full w-12 h-12 object-cover"
        />
        <h1 className="text-2xl font-semibold drop-shadow-lg">
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
      KOTA SURAKARTA
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
        Kota Surakarta, yang juga dikenal sebagai Solo, didirikan pada tahun
        1745 oleh Raja Pakubuwono II sebagai pusat pemerintahan Kesunanan
        Surakarta. Kota ini dibangun setelah perpindahan ibu kota dari Kartasura
        akibat pemberontakan. Surakarta berkembang menjadi pusat kebudayaan Jawa
        yang kaya, dengan tradisi seni seperti batik, gamelan, tari, dan wayang.
        Selain itu, Surakarta juga memiliki peran penting dalam sejarah
        perjuangan nasional Indonesia, termasuk sebagai tempat berdirinya
        organisasi Boedi Oetomo.
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
            <li>Email: info@prpp-jateng.com</li>
            <li>
              Website:{" "}
              <a
                href="https://www.prpp-jateng.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.prpp-jateng.com
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
      title="Pakaian"
      description="Beskap Surakarta adalah pakaian adat pria khas Jawa yang digunakan dalam acara resmi atau upacara adat. Beskap memiliki potongan kaku tanpa kerah, dengan bagian depan biasanya dilengkapi kancing miring. Pakaian ini dipadukan dengan kain batik, blangkon (penutup kepala khas Jawa), dan aksesori seperti keris yang diselipkan di belakang pinggang. Beskap mencerminkan keanggunan dan tata krama dalam budaya Jawa, khususnya tradisi Kesunanan Surakarta."
      image={Pakaian}
    />
    <Section
      title="Tradisi"
      description="Grebeg Sudiro adalah tradisi budaya yang digelar setiap tahun di Kota Surakarta menjelang perayaan Tahun Baru Imlek. Tradisi ini mencerminkan akulturasi budaya Jawa dan Tionghoa, yang ditandai dengan kirab budaya, barongsai, dan puncaknya pembagian kue keranjang (kue khas Imlek) dalam bentuk gunungan. Acara ini berlangsung di kawasan Pasar Gede, pusat aktivitas komunitas Tionghoa di Solo."
      image={Tradisi}
    />
    <Section
      title="Kerajinan"
      description="Blangkon Serengan adalah salah satu jenis blangkon khas Surakarta (Solo) yang memiliki ciri khas berupa pola batik sederhana dengan warna dominan cokelat tua. Nama Serengan berasal dari wilayah di Solo yang menjadi pusat produksi blangkon ini. Blangkon ini biasanya dipakai oleh masyarakat umum untuk acara adat maupun keseharian, dan desainnya melambangkan kesederhanaan serta kedekatan dengan budaya lokal."
      image={Kerajinan}
    />
    <Footer />
  </div>
);

export default Home;

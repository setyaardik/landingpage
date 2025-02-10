import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import Logo from "../images/logo.png";
import InstagramIcon from "../images/instagram-icon.png";
import FacebookIcon from "../images/facebook-icon.png";
import BatikBackground from "../images/batik-background.png";
import beranda1 from "../images/beranda1.jpg";
import beranda2 from "../images/beranda2.jpg";
import beranda3 from "../images/beranda3.jpg";
import peta from "../images/peta.png";
AOS.init({ duration: 1000, once: false });

const kabupatenKotaJateng = [
  "kabblora",
  "kabrembang",
  "kabpati",
  "kabgrobogan",
  "kabsragen",
  "kabkaranganyar",
  "kabwonogiri",
  "kabsukoharjo",
  "kotasurakarta",
  "kabkudus",
  "kabjepara",
  "kabdemak",
  "kotasalatiga",
  "kabboyolali",
  "kabklaten",
  "kabmagelang",
  "kotamagelang",
  "kabsemarang",
  "kotasemarang",
  "kabwonosobo",
  "kabkendal",
  "kabbatang",
  "kabpurworejo",
  "kabkebumen",
  "kabbanjarnegara",
  "kabbanyumas",
  "kabpurbalingga",
  "kabpekalongan",
  "kotapekalongan",
  "kabpemalang",
  "kabtegal",
  "kotategal",
  "kabbrebes",
  "kabcilacap",
];

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

const Main = () => {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    const selected = event.target.value;
    if (selected) {
      navigate(`/${selected}`);
    }
  };

  return (
    <main className="bg-gradient-to-b from-yellow-50 via-red-50 to-yellow-100 pt-[56px] pb-[60px] space-y-4">
      <section
        className="relative h-[200px] overflow-hidden"
        data-aos="fade-up"
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[200px] object-cover"
              src={beranda1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[200px] object-cover"
              src={beranda2}
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[200px] object-cover"
              src={beranda3}
              alt="Slide 3"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
        <h3 className="text-red-700 font-semibold text-2xl mb-4">Tentang</h3>
        <p className="text-md text-gray-800 leading-relaxed">
          Grand Maerakaca, sebelumnya dikenal sebagai Puri Maerokoco, adalah
          taman miniatur Jawa Tengah yang menampilkan anjungan dari 35 kabupaten
          dan kota di provinsi tersebut. Sejak berganti nama pada tahun 2016,
          Grand Maerakaca telah menambahkan fasilitas seperti area hutan bakau
          dengan jalur trekking di atas air yang mengelilingi sisi utara kawasan
          ini. Pada akhir pekan, biasanya terdapat pertunjukan musik live di
          sekitar anjungan Kota Semarang untuk menghibur pengunjung.
        </p>
      </section>

      <section className="p-4" data-aos="fade-up">
        <h3 className="text-lg font-semibold mb-3 text-red-700">
          Peta Jawa Tengah
        </h3>
        <div className="rounded-lg overflow-hidden relative">
          <img src={peta} alt="Map" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="p-4" data-aos="fade-up">
        <h3 className="text-lg font-semibold mb-3 text-red-700">
          Pilih Anjungan
        </h3>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
          onChange={handleNavigate}
        >
          <option value="">Pilih Kabupaten/Kota</option>
          {kabupatenKotaJateng.map((kabupaten, index) => (
            <option key={index} value={kabupaten}>
              {kabupaten
                .replace(/kabbanjarnegara/, "Kabupaten Banjarnegara")
                .replace(/kabbanyumas/, "Kabupaten Banyumas")
                .replace(/kabbatang/, "Kabupaten Batang")
                .replace(/kabblora/, "Kabupaten Blora")
                .replace(/kabboyolali/, "Kabupaten Boyolali")
                .replace(/kabbrebes/, "Kabupaten Brebes")
                .replace(/kabcilacap/, "Kabupaten Cilacap")
                .replace(/kabdemak/, "Kabupaten Demak")
                .replace(/kabgrobogan/, "Kabupaten Grobogan")
                .replace(/kabjepara/, "Kabupaten Jepara")
                .replace(/kabkaranganyar/, "Kabupaten Karanganyar")
                .replace(/kabkebumen/, "Kabupaten Kebumen")
                .replace(/kabkendal/, "Kabupaten Kendal")
                .replace(/kabklaten/, "Kabupaten Klaten")
                .replace(/kabkudus/, "Kabupaten Kudus")
                .replace(/kabmagelang/, "Kabupaten Magelang")
                .replace(/kabpati/, "Kabupaten Pati")
                .replace(/kabpekalongan/, "Kabupaten Pekalongan")
                .replace(/kabpemalang/, "Kabupaten Pemalang")
                .replace(/kabpurbalingga/, "Kabupaten Purbalingga")
                .replace(/kabpurworejo/, "Kabupaten Purworejo")
                .replace(/kabrembang/, "Kabupaten Rembang")
                .replace(/kabsemarang/, "Kabupaten Semarang")
                .replace(/kabsragen/, "Kabupaten Sragen")
                .replace(/kabsukoharjo/, "Kabupaten Sukoharjo")
                .replace(/kabtegal/, "Kabupaten Tegal")
                .replace(/kabwonogiri/, "Kabupaten Wonogiri")
                .replace(/kabwonosobo/, "Kabupaten Wonosobo")
                .replace(/kotamagelang/, "Kota Magelang")
                .replace(/kotapekalongan/, "Kota Pekalongan")
                .replace(/kotasalatiga/, "Kota Salatiga")
                .replace(/kotasemarang/, "Kota Semarang")
                .replace(/kotasurakarta/, "Kota Surakarta")
                .replace(/kotategal/, "Kota Tegal")}
            </option>
          ))}
        </select>
      </section>
    </main>
  );
};

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
          <h3 className="text-lg font-bold mb-2 text-center">Kontak Kami</h3>
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

const App = () => (
  <div className="w-full min-h-screen mx-auto bg-gradient-to-b from-yellow-50 via-red-50 to-yellow-100">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;

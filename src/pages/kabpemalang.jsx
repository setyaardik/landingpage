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

import Anjungan from "../images/kabpemalang/pemalang.png";
import Makanan from "../images/kabpemalang/Makanan.png";
import Budaya from "../images/kabpemalang/budaya.png";
import Wisata from "../images/kabpemalang/wisata.png";

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
      KABUPATEN PEMALANG
    </h1>
    <div className="mx-auto max-w-3xl px-6">
      <div className="relative group">
        <img
          src={Anjungan}
          alt="Anjungan Kabupaten Pemalang"
          className="rounded-2xl shadow-2xl mb-6 w-full aspect-video object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
      </div>
      <p className="text-lg leading-relaxed bg-white bg-opacity-80 text-gray-800 rounded-lg p-4">
      Pada abad ke-16, Pemalang merupakan salah satu dari 14 daerah merdeka di Pulau Jawa yang dipimpin oleh seorang pangeran atau raja. Namun, kemudian wilayah ini ditaklukkan oleh Kesultanan Mataram dan menjadi daerah vasal yang diperintah oleh pangeran atau raja vasal. 
Asal-usul nama "Pemalang" diyakini berasal dari kata "pe" yang dalam bahasa Jawa menunjukkan tempat, dan "malang" yang merujuk pada nama tokoh Raden Joko Malang atau Raden Sambungyudha, sehingga "Pemalang" berarti tempat yang dimiliki atau dikuasai oleh Raden Joko Malang. 
Hari Jadi Kabupaten Pemalang ditetapkan pada tanggal 24 Januari 1575, berdasarkan Peraturan Daerah Kabupaten Dati II Pemalang Nomor 9 Tahun 1996. Penetapan ini didasarkan pada perhitungan surya sengkala "Lunguding Sabdo Wangsiting Gusti" yang memiliki nilai tahun 1575.
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
            <li>Email: info@prppjateng.com</li>
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
      description="Nasi grombyang, kuliner khas Pemalang, terdiri dari nasi, daging sapi, dan kuah gurih yang dominan, membuatnya terlihat bergoyang saat disajikan. Hidangan ini sering dinikmati dengan sate kerbau dan memiliki cita rasa khas dari rempah keluwak."
      image={Makanan}
    />
    <Section
      title="Kebudayaan"
      description="Kuntulan mulai dikenal di Pemalang pada awal abad ke-20, bertepatan dengan masa pergerakan kebangsaan. Awalnya, kuntulan merupakan kegiatan bela diri yang diiringi alunan rebana, pukulan bedug, serta lantunan salawat Nabi, sehingga memiliki unsur kesenian dan keagamaan. Setelah kemerdekaan, kuntulan bertransformasi menjadi sarana hiburan yang hingga kini masih dipentaskan dalam berbagai acara, seperti peringatan hari besar nasional, hajatan, dan penyambutan tamu resmi."
      image={Budaya}
    />
    <Section
      title="Wisata"
      description="Bukit Tangkeban di Pemalang menawarkan beragam wahana seru, mulai dari permainan anak, spot kekinian, hingga yang menantang adrenalin. Dengan pemandangan sejuk dan latar megah Gunung Slamet, tempat ini juga penuh spot foto instagramable.
Lokasi Desa Nyalembang, Kecamatan Pulosari, Kabupaten Pemalang"
      image={Wisata}
    />
    <Footer />
  </div>
);

export default Home;

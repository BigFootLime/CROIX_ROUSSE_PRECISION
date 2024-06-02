import React from "react";
import styles from "../style";
import { logoclair } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for the default marker icon issue in Leaflet with Webpack
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { Link } from "@react-email/components";
import { PhoneCallIcon } from "lucide-react";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const center = [45.86579, 4.9134]; // Replace with your latitude and longitude

const Footer = () => (
  <section
    id="contact"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logoclair}
          alt="crp-logo"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Une nouvelle approche pour garantir la fiabilité et la sécurite en
          mécanique et usinage de précision.
        </p>
      </div>

      <div className=" mr-4 flex-[2] w-full h-[300px] md:h-[300px] z-0">
        <MapContainer
          center={center}
          zoom={15}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              Croix Rousse Précision, 530 Rue de la Dombes, 01700 Miribel
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  onClick={() => window.open(link.link)}
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div>
          <Link
            className="text-[14px] font-poppins text-white"
            href={`mailto:contact@croix-rousse-precision.fr`}
          >
            contact@croix-rousse-precision.fr
          </Link>
        </div>
        <div className="flex items-center">
          <PhoneCallIcon className="mr-2 h-4 w-4 opacity-70 text-white" />
          <h4 className="text-white">
            <a href="tel:+33478390772">04 78 39 07 72</a>
          </h4>
        </div>
        <div className="flex items-center">
          <PhoneCallIcon className="mr-2 h-4 w-4 opacity-70 text-white" />
          <h4 className="text-white">
            <a href="tel:+33472002625">04 72 00 26 25</a>
          </h4>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Croix Rousse Précision. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;

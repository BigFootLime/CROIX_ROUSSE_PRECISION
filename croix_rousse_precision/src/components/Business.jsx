import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] transition-all hover:scale-105 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="metiers"
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-duration="1000"
    className={`${layout.section}`}
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Notre Métier <br className="sm:block hidden" />
        en <span className="text-gradient font-nilland">Ingenierie</span> &{" "}
        <span className="text-gradient font-nilland !sm:font-poppins !sm:text-black">
          Usinage
        </span>
        .
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre entreprise spécialisée en usinage sert principalement
        l'aéronautique et le spatial, avec des machines numériques et des
        logiciels régulièrement mis à jour, et réalise aussi le polissage
        industriel et le microbillage en interne.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

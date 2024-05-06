import React from "react";
import styles from "../style";
import { discount, imgMain } from "../assets";
import GetStarted from "./GetStarted";
import AnimatedText from "./AnimatedText";

const MainSection = () => (
  <section
    id="home"
    data-aos="fade-right" // This triggers the fade-left animation when the element comes into view
    data-aos-offset="200" // Triggers the animation when the element is 200px in view
    data-aos-duration="1000" // Animation runs for 1000 milliseconds
    className={`flex md:flex-row flex-col ${styles.paddingY} `}
  >
    <div
      className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div> */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] animated-text">
          <AnimatedText text="Expertise" /> <br className="sm:block hidden" />{" "}
          <span className="text-gradient font-nilland">Spécialiste</span> {""}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>{" "}
      <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full animated-text">
        en mécanique précise.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre équipe d&apos;experts en mécanique précise prend soin
        méticuleusement de chaque pièce développée, garantissant un qualité
        supérieure et performance exceptionnelle pour chaque projet.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={imgMain}
        alt="robot"
        className="w-[100%] h-[100%] relative z-[5] levitating-image "
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient " />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default MainSection;

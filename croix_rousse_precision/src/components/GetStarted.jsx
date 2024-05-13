import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import CustomDialog from "./CustomDialog";

const GetStarted = () => (
  <CustomDialog
    button={
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <span className="text-gradient">En</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px] ">
            <span className="text-gradient">Savoir +</span>
          </p>
        </div>
      </div>
    }
    titleClassName={`font-poppins overflow-x-auto scrollsm sm:text-[32px] text-[28px] sm:h-40`}
    title="Spécialiste dans la fabrication de pièces complexes, ainsi que l’usinage de petites et moyennes séries."
    className="md:w-[40%] md:h-[50%] sm:h-[50%] sm:w-[85%] bg-black-gradient text-white border-none h-full w-full"
    descriptionClassName={
      "font-poppins sm:text-[16px] text-[15px] leading-[24px] mt-5 text-slate-400"
    }
    description={`La maîtrise technique de l’usinage permet d‘œuvrer notamment pour les domaines aéronautique et spatial, secteurs dans lesquels se situent les principales références. Disposant du matériel conventionnel nécessaire à la réalisation de pièces simples, l’entreprise s’est dotée de plusieurs machines numériques, assistées de logiciels de programmation et conception, régulièrement up-gradés afin de permettre l’usinage de pièces les plus ouvragées. Le polissage industriel, allant de l’empreinte de moules polyglas au polissage industriel est également assuré en interne.`}
  />
);

export default GetStarted;

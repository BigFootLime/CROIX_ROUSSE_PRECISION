import React from "react";
import { piece1 } from "../assets";
import { ImgPiece3Conception } from "../assets";
import styles, { layout } from "../style";
import CustomDialog from "./CustomDialog";
import { PlusCircleIcon } from "lucide-react";

const CardDeals = () => (
  <section
    className={layout.section}
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        De la <span className="text-gradient font-nilland">Conception</span> à{" "}
        <br className="sm:block hidden" /> la{" "}
        <span className="text-gradient font-nilland">Réalisation</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Afin d'aider nos clients, notre entreprise developpe et optimise
        l'usinage à l'aide du logiciel FAO Mastercam et pour la co-conception le
        logiciel CAO SolidWorks.
      </p>
      <CustomDialog
        button={
          <button
            type="button"
            className={` mt-8 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:scale-105 transition-transform duration-300 ease-in-out`}
          >
            {" "}
            <div className="flex flex-row ">
              En savoir
              <PlusCircleIcon className="ml-2" />
            </div>
          </button>
        }
        titleClassName={`font-poppins overflow-x-auto scrollsm sm:text-[32px] text-[28px] sm:h-20`}
        title="Du plan client à la pièce usinée"
        className="md:w-[40%] md:h-[50%] sm:h-[50%] sm:w-[85%] bg-black-gradient text-white border-none h-full w-full"
        descriptionClassName={
          "font-poppins sm:text-[16px] text-[15px] leading-[24px] mt-5 text-slate-400"
        }
        description={`Encrée de cette culture laborieuse, à la croisée des chemins de l’atelier, de l’artisanat et de l’industrie, l’entreprise Croix-Rousse Précision revendique cet ADN. Depuis 1991, l’équipe oeuvre sans cesse, se perfectionne — en veille technologique permanente, elle investit toujours dans des outils performants. Grace aux logiciels et à l'expertise technique des employés, les pièces clients sont étudiées pour être réalisées avec soin suivant le cahier des charges de nos clients via des revues de plan. Les montages issus de ces études sont identifiés et stockés en interne.`}
      />
    </div>
    <div className={layout.sectionImg}>
      <img src={ImgPiece3Conception} alt="card" className="w-[70%] h-auto" />
      <img src={piece1} alt="card" className="w-[50%] h-auto" />
    </div>
  </section>
);

export default CardDeals;

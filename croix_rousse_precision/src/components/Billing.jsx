import CustomDialog from "./CustomDialog";
import { PHelico } from "../assets";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";
import { PlusCircleIcon } from "lucide-react";

const Billing = () => (
  <section
    id="product"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
    className={layout.sectionReverse}
  >
    <div className={layout.sectionImgReverse}>
      <img
        src={PHelico}
        alt="billing"
        className="w-[90%] relative z-[5] levitating-image"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Notre métier en <br className="sm:block hidden" />{" "}
        <span className="text-gradient font-nilland">Assemblage</span> &
        <span className="text-gradient font-nilland"> Controle</span>.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre entreprise et ses employés suivent les normes ISO 9001 et 9100,
        assurant la traçabilité interne et de ses fournisseurs pour la qualité
        de leurs services, de la réception des matériaux au stockage des pièces.
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
        title="Inscrit dans une démarche qualité."
        className="md:w-[40%] md:h-[50%] sm:h-[50%] sm:w-[85%] bg-black-gradient text-white border-none h-full w-full"
        descriptionClassName={
          "font-poppins sm:text-[16px] text-[15px] leading-[24px] mt-5 text-slate-400"
        }
        description={`En cohérence avec nos clients et partenaires, oeuvrant pour des domaines tant spécifiques qu’exigeants, les compagnons et l’entreprise s’inscrivent tout naturellement dans la démarche des certifications ISO 9001 et ISO 9100. De la réception des matériaux, en passant par le contrôle qualité dimentionel, de finition de chaque pièce produite, au stockage clairement identifié de celle-ci pour nos clients. C’est l’intégralité de la chaîne d’interventions qui est tracée via la GPAO Clipper, offrant une sécurité maximum aux prestations proposées et un service d’une qualité garantie.`}
      />
    </div>
  </section>
);

export default Billing;

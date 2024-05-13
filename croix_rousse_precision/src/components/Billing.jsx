import CustomDialog from "./CustomDialog";
import { PHelico } from "../assets";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";

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
      <div className="sm:absolute z-[3] sm:-left-1/2 sm:top-0 sm:w-[50%] sm:h-[50%] sm:rounded-full sm:white__gradient hidden " />
      <div className="sm:absolute z-[0] sm:-left-1/2 sm:bottom-0 sm:w-[50%] sm:h-[50%] sm:rounded-full sm:pink__gradient hidden " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Notre métier en <br className="sm:block hidden" />{" "}
        <span className="text-gradient font-nilland">Assemblage</span> &
        <span className="text-gradient font-nilland"> Controle</span>.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        L'entreprise et ses employés suivent les normes ISO 9100 et 9001,
        assurant la traçabilité totale et la qualité de leurs services, de la
        réception des matériaux au stockage des pièces.
      </p>

      <CustomDialog
        button={<CustomButton styles="mt-10" />}
        title="Inscrit dans une démarche qualité"
        description="En cohérence avec nos clients et partenaires, oeuvrant pour des domaines tant spécifiques qu’exigeants, les compagnons et l’entreprise s’inscrivent tout naturellement dans la démarche des certifications ISO 9100 et ISO 9001. De la réception des matériaux, en passant par le contrôle qualité de chaque pièce produite, au stockage clairement identifié de celle-ci pour nos clients — c’est l’intégralité de la chaîne d’interventions qui est tracée via la GPAO, offrant une sécurité maximum aux prestations proposées et un service d’une qualité garantie."
        footer="."
        className="md:w-[60%] md:h-[30%] sm:h-[50%] sm:w-[70%] bg-primary text-white border-none h-full w-full"
      />
    </div>
  </section>
);

export default Billing;

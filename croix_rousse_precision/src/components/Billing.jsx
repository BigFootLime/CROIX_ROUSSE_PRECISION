import { apple, bill, google, piece2 } from "../assets";
import styles, { layout } from "../style";

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
        src={piece2}
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
        L'entreprise et ses employés suivent les normes ISO 9100 et 9001,
        assurant la traçabilité totale et la qualité de leurs services, de la
        réception des matériaux au stockage des pièces.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;

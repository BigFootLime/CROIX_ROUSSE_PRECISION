import React from "react";
import { ImgCarabine } from "../assets";

import styles, { layout } from "../style";
import CustomButton from "./CustomButton";

const Partenariat = () => (
  <section
    id="partenaires"
    className={layout.section}
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nous sommes en partenariat avec{" "}
        <span className="text-gradient font-nilland">Esprit</span>
        <br className="sm:block hidden" />
        <span className="text-gradient font-nilland">Carabine</span>
      </h2>

      <CustomButton text="Venez découvrir prochainement..." styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={ImgCarabine} alt="card" className="w-auto h-auto" />
    </div>
  </section>
);

export default Partenariat;

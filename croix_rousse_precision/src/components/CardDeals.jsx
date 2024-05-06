import React from "react";
import { piece1 } from "../assets";
import { ImgPiece3Conception } from "../assets";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";

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
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet ultrices
        ac, ametau.
      </p>
      <CustomButton styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={ImgPiece3Conception} alt="card" className="w-[70%] h-auto" />
      <img src={piece1} alt="card" className="w-[50%] h-auto" />
    </div>
  </section>
);

export default CardDeals;

import React from "react";
import styles from "../style";

const Error404 = () => (
  <section
    className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} text-center`}
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className="flex flex-col items-center">
      <img alt="404 Error" className="w-[50%] h-[50%] mb-8 levitating-image" />
      <h1 className="font-poppins font-semibold text-[72px] text-white leading-[100px]">
        Oops!
      </h1>
      <h2 className="font-poppins font-semibold text-[52px] text-white leading-[75px] mt-4">
        Page Non Trouvée
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Désolé, la page que vous recherchez n&apos;existe pas. Il se peut que
        l&apos;URL soit incorrecte ou que la page ait été déplacée.
      </p>
      <a href="/" className="mt-8 text-gradient font-nilland text-[24px]">
        Retour à l'accueil
      </a>
    </div>
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
    <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient " />
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
  </section>
);

export default Error404;

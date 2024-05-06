import styles from "../style";
import CustomButton from "./CustomButton";
import { ImgNouveautes } from "../assets";

const Nouvautes = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Dernière Nouveauté</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={`sm:ml-10 ml-0 sm:my-12 my-6`}>
        <CustomButton text="En savoir plus" />
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:ml-8">
      <img
        className="w-full max-w-[300px] sm:max-w-[800px] rounded-xl"
        src={ImgNouveautes}
        alt="Nouveautes"
      ></img>
    </div>
  </section>
);

export default Nouvautes;

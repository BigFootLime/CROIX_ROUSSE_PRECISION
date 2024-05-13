import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="equipe"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="hidden sm:absolute sm:z-[0] sm:w-[60%] sm:h-[60%] sm:-right-[50%] sm:rounded-full sm:blue__gradient sm:bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Notre <span className="text-gradient font-nilland">équipe</span> chez{" "}
        <br className="sm:block hidden" />{" "}
        <span className="text-gradient font-nilland">
          Croix Rousse Précision
        </span>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} mt-4`}>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

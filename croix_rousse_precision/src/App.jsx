import styles from "./style";
import {
  Navbar,
  MainSection,
  Stats,
  Buisness,
  Billing,
  CardDeals,
  Testomonials,
  Clients,
  Nouvautes,
  Footer,
  Equipe,
  Equipements,
} from "./components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import ShowRoomEqipe from "./components/ShowRoomEquipe";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <div className=" w-full overflow-hidden">
      <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <MainSection />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Buisness />
          <Billing />
          <CardDeals />
          <Testomonials />
        </div>
      </div>

      {/* Place Equipe outside of the styled parent div */}
      <div className={`bg-transparent${styles.flexStart}`}>
        <Equipe />
        <ShowRoomEqipe />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Equipements />
          <Clients />
          <Nouvautes />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

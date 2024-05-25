import styles from "../style";
import CustomButton from "./CustomButton";
import { ImgNouveautes } from "../assets";
import { Diviseur } from "../assets";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { newsEvents } from "@/constants";

const Nouvautes = () => (
  <section
    id="actu"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <div className="hidden sm:absolute sm:z-[0] sm:w-[60%] sm:h-[60%] sm:-left-[55%] sm:rounded-full sm:blue__gradient" />
      <h2 className={styles.heading2}>Dernière Nouveauté</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arrivée en Mai de notre deuxième Diviseur NIKKEN, 4ème axe piloté.
      </p>
      <div className={`sm:ml-10 ml-0 sm:my-12 my-6`}>
        <Drawer>
          <DrawerTrigger>{<CustomButton />}</DrawerTrigger>
          <DrawerContent className="bg-primary text-white font-poppins">
            <DrawerHeader>
              <DrawerTitle className="text-center sm:mt-4">
                {" "}
                Toutes les nouveautés !
              </DrawerTitle>
              <DrawerDescription className="h-96 sm:h-[600px] md:h-full overflow-y-auto overflow-x-auto scrollsm ">
                <div className="flex flex-wrap justify-center sm:flex-nowrap sm:justify-start items-center gap-4 py-4 overflow-y-auto overflow-x-auto scrollsm ">
                  {newsEvents.map((event, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex flex-col items-center w-60">
                        <img
                          src={event.img}
                          alt="News Event"
                          className="w-60 h-60 rounded-lg object-cover object-center border-2 border-white"
                        />
                        <div className="text-center mt-2">
                          <h3 className="text-md font-medium">{event.title}</h3>
                          <p className="text-sm">{event.date}</p>
                        </div>
                      </div>

                      <div className="md:flex md:items-center md:ml-4 md:space-x-2 hidden">
                        {[...Array(8)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className="w-2 h-2 rounded-full bg-blue-500"
                          >
                            <div className="bg-white w-1.5 h-1.5 rounded-full m-auto"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:ml-8">
      <img
        className="w-full max-w-[300px] sm:max-w-[800px] rounded-xl"
        src={Diviseur}
        alt="Nouveautes"
      ></img>
    </div>
  </section>
);

export default Nouvautes;

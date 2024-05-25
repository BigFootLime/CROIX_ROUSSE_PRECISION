import React from "react";
import { Machine1, Machine2, Machine3, Machine4 } from "../assets";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";
import CustomDrawer from "./CustomDrawer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import CustomDialog from "./CustomDialog";
import { PlusCircleIcon } from "lucide-react";

const Equipment = () => (
  <section
    className={layout.section}
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Parc Machine<span className="text-gradient font-nilland"></span>
      </h2>
      <h2 className={styles.heading2}>
        <span className="text-gradient font-nilland">Usinage CNC</span>
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explorez notre gamme variée d'équipements de pointe, conçus pour
        répondre aux exigences les plus strictes de précision et d'efficacité.
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
        title="Equipements de l'Entreprise"
        className="md:w-[40%] md:h-[50%] sm:h-[50%] sm:w-[85%] bg-black-gradient text-white border-none h-full w-full"
        descriptionClassName={
          "font-poppins sm:text-[16px] text-[15px] leading-[24px] mt-5 text-slate-400"
        }
        description={`8 Centres d'usinage numérique 3 axes course axe X=650mm ou X=1000mm -- 2 Diviseurs Nikken 4ème axe positionné -- 2 Tours Numérique -- 1 ensemble complet de matériel conventionnel ( fraiseuse, tour, rectifieuse plane, perceuse , scie automatique pour débits matière, poste à souder ...etc )    
       -- 5 logiciels de programmation FAO simple ou 3D (Mastercam) -- 1 ensemble complet de matériel de contrôle conventionnel --
       1 Microscope de mesure vidéo MM1 (mesure optique et zoom x 120) -- 
       1 rugotest pour mesurer les états de surface
       `}
      />
    </div>
    <div className={layout.sectionImg}>
      <Carousel className="rounded-lg text-white font-poppins">
        <CarouselContent className="rounded-lg">
          <CarouselItem className="font-poppins">
            <div className="block md:hidden">
              <img
                src={Machine1}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="hidden md:block font-poppins">
              <CustomDialog
                button={
                  <img
                    src={Machine1}
                    alt="Precision Machinery"
                    className="w-full h-auto rounded-xl"
                  />
                }
                footer="Matsuura VX-660 & Matsuura VX-1000"
                description={
                  <img
                    src={Machine1}
                    alt="Precision Machinery"
                    className="w-[900px] h-auto rounded-xl !font-poppins"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none !font-poppins "
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block md:hidden">
              <img
                src={Machine2}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="hidden md:block">
              <CustomDialog
                button={
                  <img
                    src={Machine2}
                    alt="Precision Machinery"
                    className="w-full h-auto rounded-xl !font-poppins"
                  />
                }
                footer="TAKUMI VC-1052 avec interface HEIDENHAIN"
                description={
                  <img
                    src={Machine2}
                    alt="Advanced Instrumentation"
                    className="w-[900px] h-auto rounded-xl !font-poppins"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none !font-poppins"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block md:hidden">
              <img
                src={Machine3}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="hidden md:block">
              <CustomDialog
                button={
                  <img
                    src={Machine3}
                    alt="Precision Machinery"
                    className="w-full h-auto rounded-xl"
                  />
                }
                footer="NOMURADS DST 40L avec interface MITSUBISHI"
                description={
                  <img
                    src={Machine3}
                    alt="High-Tech Gear"
                    className="w-[900px] h-auto rounded-xl"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none !font-poppins"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block md:hidden">
              <img
                src={Machine4}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="hidden md:block">
              <CustomDialog
                button={
                  <img
                    src={Machine4}
                    alt="Precision Machinery"
                    className="w-full h-auto rounded-xl"
                  />
                }
                footer="DMG MORI | DMC 63V avec interface HEIDENHAIN "
                description={
                  <img
                    src={Machine4}
                    alt="High-Tech Gear"
                    className="w-[900px] h-auto rounded-xl"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none !font-poppins"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default Equipment;

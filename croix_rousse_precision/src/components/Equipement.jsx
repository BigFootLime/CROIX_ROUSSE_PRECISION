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

const Equipment = () => (
  <section
    className={layout.section}
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className="hidden sm:absolute sm:z-[0] sm:w-[60%] sm:h-[60%] sm:-left-[55%] sm:rounded-full sm:blue__gradient" />
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nos différents{" "}
        <span className="text-gradient font-nilland">Équipements</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explorez notre gamme variée d'équipements de pointe, conçus pour
        répondre aux exigences les plus strictes de précision et d'efficacité.
      </p>
      <Drawer>
        <DrawerTrigger>{<CustomButton styles="mt-10" />}</DrawerTrigger>
        <DrawerContent className="bg-primary text-white font-poppins">
          <DrawerHeader>
            <DrawerTitle>Tous nos equipements sont ici.</DrawerTitle>
            <DrawerDescription>{}</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
    <div className={layout.sectionImg}>
      <Carousel className="rounded-lg text-white">
        <CarouselContent className="rounded-lg">
          <CarouselItem>
            <div className="block md:hidden">
              <img
                src={Machine1}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="hidden md:block">
              <CustomDialog
                button={
                  <img
                    src={Machine1}
                    alt="Precision Machinery"
                    className="w-full h-auto rounded-xl"
                  />
                }
                footer="Voici une des machines de précision que nous utilisons pour la fabrication de nos produits."
                description={
                  <img
                    src={Machine1}
                    alt="Precision Machinery"
                    className="w-[900px] h-auto rounded-xl"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none "
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
                    className="w-full h-auto rounded-xl"
                  />
                }
                footer="Voici une des machines de précision que nous utilisons pour la fabrication de nos produits."
                description={
                  <img
                    src={Machine2}
                    alt="Advanced Instrumentation"
                    className="w-[900px] h-auto rounded-xl"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none"
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
                footer="Voici une des machines de précision que nous utilisons pour la fabrication de nos produits."
                description={
                  <img
                    src={Machine3}
                    alt="High-Tech Gear"
                    className="w-[900px] h-auto rounded-xl"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none"
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
                footer="Voici une des machines de précision que nous utilisons pour la fabrication de nos produits."
                description={
                  <img
                    src={Machine4}
                    alt="High-Tech Gear"
                    className="w-[900px] h-auto rounded-xl"
                  />
                }
                className="w-[900px] h-[800px] bg-black-gradient text-white border-none"
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

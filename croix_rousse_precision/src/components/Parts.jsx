import React from "react";
import {
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
  Carousel7,
  Carousel8,
} from "../assets";
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

const Parts = () => (
  <section
    id="realisations"
    className={layout.sectionReverse}
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className={layout.sectionImgReverse}>
      <Carousel className="rounded-lg text-white">
        <CarouselContent className="rounded-lg">
          <CarouselItem>
            <div className="block">
              <img
                src={Carousel1}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block ">
              <img
                src={Carousel2}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block ">
              <img
                src={Carousel3}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block ">
              <img
                src={Carousel4}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block ">
              <img
                src={Carousel5}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block ">
              <img
                src={Carousel6}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block ">
              <img
                src={Carousel7}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block ">
              <img
                src={Carousel8}
                alt="Precision Machinery"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div className={`${layout.sectionInfo} ml-20`}>
      <h2 className={styles.heading2}>
        Nos différents{" "}
        <span className="text-gradient font-nilland">Pièces Usinées</span>
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
  </section>
);

export default Parts;

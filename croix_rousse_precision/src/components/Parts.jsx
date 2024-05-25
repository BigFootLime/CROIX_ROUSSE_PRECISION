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
import { PlusCircleIcon } from "lucide-react";

const Parts = () => (
  <section
    id="realisations"
    className={layout.sectionReverse}
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className={layout.sectionImgReverse}>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
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
    <div className={`${layout.sectionInfo} sm:ml-20`}>
      <h2 className={styles.heading2}>
        Nos réalisations{" "}
        <span className="text-gradient font-nilland">
          Mécaniques Industrielles
        </span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Exemples de nos differentes usinages.
      </p>
    </div>
  </section>
);

export default Parts;

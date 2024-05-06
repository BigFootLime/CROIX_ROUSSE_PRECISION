import React from "react";
import { Machine1, Machine2, Machine3, Machine4 } from "../assets";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Equipment = () => (
  <section
    className={layout.section}
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nos différents{" "}
        <span className="text-gradient font-nilland">Équipements</span> chez
        <span className="text-gradient font-nilland">
          {" "}
          Croix Rousse Précision
        </span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explorez notre gamme variée d'équipements de pointe, conçus pour
        répondre aux exigences les plus strictes de précision et d'efficacité.
      </p>
      <CustomButton text="En savoir plus" styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Carousel className="rounded-lg text-white">
        <CarouselContent className="rounded-lg">
          <CarouselItem>
            <img
              src={Machine1}
              alt="Precision Machinery"
              className="w-full h-auto rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={Machine2}
              alt="Advanced Instrumentation"
              className="w-full h-auto rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={Machine3}
              alt="High-Tech Gear"
              className="w-full h-auto rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={Machine4}
              alt="Detailed Engineering Tools"
              className="w-full h-auto rounded-xl"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default Equipment;

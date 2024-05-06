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
import CustomDialog from "./CustomDialog";

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
        <span className="text-gradient font-nilland">Équipements</span>
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
              className="w-[900px] h-[800px] bg-primary text-white border-slate-500"
            />
          </CarouselItem>
          <CarouselItem>
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
              className="w-[900px] h-[800px] bg-primary text-white border-slate-500"
            />
          </CarouselItem>
          <CarouselItem>
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
              className="w-[900px] h-[800px] bg-primary text-white border-slate-500"
            />
          </CarouselItem>
          <CarouselItem>
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
              className="w-[900px] h-[800px] bg-primary text-white border-slate-500"
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

import React, { useState, useEffect, useRef } from "react";
import { stats as defaultStats } from "../constants";
import styles from "../style";

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState(
    defaultStats.map((stat) => ({
      ...stat,
      value: "0",
    }))
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate stats here
            const intervals = defaultStats.map((stat) => {
              const maxVal = parseInt(stat.value.replace("+", ""), 10);
              const step = maxVal / 100; // Adjust the step and duration to control the speed of the animation

              const intervalId = setInterval(() => {
                setAnimatedStats((prevStats) =>
                  prevStats.map((prevStat) => {
                    if (prevStat.id === stat.id) {
                      const currentValue = parseInt(
                        prevStat.value.replace("+", ""),
                        10
                      );
                      const nextValue =
                        currentValue + step > maxVal
                          ? maxVal
                          : currentValue + step;
                      const formattedValue = `${nextValue}+`;
                      return { ...prevStat, value: formattedValue };
                    }
                    return prevStat;
                  })
                );
              }, 20);

              return intervalId;
            });

            return () => {
              intervals.forEach(clearInterval);
            };
          }
        });
      },
      {
        threshold: 0.5, // Adjust threshold to control when the animation should start
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Depend on hasAnimated to ensure effect only runs if animation hasn't started yet

  return (
    <section
      ref={sectionRef}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {animatedStats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3 `}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

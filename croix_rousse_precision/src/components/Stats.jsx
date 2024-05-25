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
    const animateValue = (stat, startValue, endValue, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(
          progress * (endValue - startValue) + startValue
        );
        setAnimatedStats((prevStats) =>
          prevStats.map((prevStat) =>
            prevStat.id === stat.id
              ? { ...prevStat, value: `${currentValue}+` }
              : prevStat
          )
        );
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            defaultStats.forEach((stat) => {
              const maxVal = parseInt(stat.value.replace("+", ""), 10);
              animateValue(stat, 0, maxVal, 2000); // 2000ms for 2 seconds
            });
          }
        });
      },
      {
        threshold: 0.5,
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
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {animatedStats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-center items-center flex-row m-3 transition ease-in-out duration-300 hover:scale-110`}
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

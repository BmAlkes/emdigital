import hand from "../../assets/Hand.png";
import vetor from "../../assets/svg/Ellipse 33.svg";

import { useEffect, useState } from "react";

const Hero = () => {
  const [direction, setDirection] = useState(document.body.dir);
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      if (mutationsList.some((mutation) => mutation.attributeName === "dir")) {
        setDirection(document.body.dir);
      }
    });
    observer.observe(document.body, {
      attributes: true,
    });
    return () => observer.disconnect();
  }, []);
  console.log(direction);

  return (
    <section className=" bg-[#030B0F] h-screen">
      <div className="flex flex-col lg:flex-row h-full container w-full mx-auto">
        <div className="w-full h-full flex flex-col justify-center z-20">
          <p className="text-[#6FCFED] lg:text-2xl text-lg">
            אנחנו פה בשביל לעזור לעסק שלך לצמוח
          </p>
          <h2 className="text-white lg:text-[80px] text-[40px]">
            הופכים חלומות ליצירה באינטרנט
          </h2>
          <p className="text-white lg:text-2xl mt-28 text-xl">
            המותג שלך צריך פיתוח בהתאמה אישית ובטכנולוגיות מתקדמות
            כגון:Wordpress, React, Google Analytics
          </p>
          <div className="flex gap-4 mt-5">
            <button className="btn">גלו עלינו עוד</button>
            <button className="btn">אודות</button>
          </div>
        </div>
        <div className="w-full h-full flex  justify-end items-end">
          <img src={hand} alt="" className="object-cover relative z-40 " />
          <div className="hero absolute left-0 z-0 h-full "></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

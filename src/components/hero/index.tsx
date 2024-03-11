import { Link } from "react-router-dom";
import hand from "../../assets/Graphic for header (1).png";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
    <section className=" bg-[#030B0F] md:h-screen h:full  mt-[96px]">
      <div className="flex flex-col lg:flex-row h-full container w-full mx-auto">
        <div className="w-full h-full flex flex-col justify-center z-20 mt-8 md:mt-5  ">
          <p className="text-[#6FCFED] lg:text-2xl text-lg">
            אנחנו פה בשביל לעזור לעסק שלך לצמוח
          </p>

          <h2 className="text-white font-bold lg:text-[80px] text-[40px]">
            <Typewriter
              words={["    הופכים חלומות ליצירה באינטרנט"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          {/* <p className="text-white lg:text-2xl font-normal lg:mt-[10px] mt-5 text-xl">
            המותג שלך צריך פיתוח בהתאמה אישית ובטכנולוגיות מתקדמות
            כגון:Wordpress, React, Google Analytics
          </p> */}
          <div className="flex gap-7 mt-[30px]">
            <Link to="/about">
              <button className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]   ">
                <span className="flex w-full bg-[#030B0F] text-white rounded-xl py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  גלו עלינו עוד
                </span>
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px] ">
                <span className="flex w-full bg-[#030B0F] text-white rounded-xl py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  למסלולים שלנו
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={hand}
            alt=""
            className="lg:h-full lg:object-center object-cover object-left   overflow-visible w-full h-[300px] md:h-[900px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

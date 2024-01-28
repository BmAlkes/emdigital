import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

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

  const { t } = useTranslation();
  return (
    <section className="relative bg-[url(https://res.cloudinary.com/landingpage2/image/upload/v1706453872/campaign-creators-OGOWDVLbMSc-unsplash_sx8gs7.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4  sm:px-6 flex  items-center lg:h-[1000px] lg:items-center lg:px-8 h-[500px]">
        <div className="max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-base font-extrabold sm:text-base text-indigo-500">
            Studio 24
          </h1>
          <h2 className="block font-extrabold lg:my-20 my-4 lg:text-7xl text-2xl  text-gray-800">
            {t("titleHero")}
          </h2>
          <p className="text-indigo-500 lg:text-3xl text-lg">
            <Typewriter
              words={
                direction === "ltr"
                  ? [
                      "A website design and construction studio that makes a difference",
                      "Your brand needs a website with advanced technology",
                      "Your brand needs the highest performance",
                      "Your brand needs customized development and advanced technologies such as: Wordpress, React, Google Analytics",
                      "Your brand needs unique characterization and design",
                      "Read more about us and understand why to choose us",
                    ]
                  : [
                      "סטודיו לעיצוב ובניית אתרים שעושה את ההבדל",
                      "המותג שלך צריך אתר בטכנולוגיה מתקדמת",
                      "המותג שלך צריך את הביצועים הגבוהים ביותר",
                      "המותג שלך צריך פיתוח בהתאמה אישית ובטכנולוגיות מתקדמות כגון:Wordpress, React, Google Analytics",
                      "המותג שלך צריך אפיון ועיצוב ייחודי",
                      "קרא עוד עלינו למה לבחור בנו",
                    ]
              }
              loop={50}
              cursor
              cursorStyle=""
              typeSpeed={30}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#about"
              className="block w-full rounded bg-indigo-500 px-12 py-3 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
            >
              {t("buttonAbout")}
            </a>

            <a
              href=""
              className="block w-full rounded bg-white px-12 py-3 text-base font-medium text-indigo-500 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
            >
              <Link to="/projects">{t("buttonProject")}</Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

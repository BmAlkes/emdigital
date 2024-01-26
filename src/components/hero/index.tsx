import { useTranslation } from "react-i18next";
import bg from "../../assets/hero (2).jpg";
import { useEffect, useState } from "react";
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

  const { t } = useTranslation();
  return (
    <section
      className="relative flex flex-col-reverse py-16  lg:pt-2 lg:flex-col lg:pb-0"
      id="home"
    >
      <div
        className={`inset-y-0 top-0 ${
          direction === "rtl" ? "left-0" : "right-0"
        } z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0`}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <svg
          className={`absolute left-0 hidden h-full text-white transform ${
            direction === "ltr" ? "-translate-x-1/2" : "translate-x-[100%]"
          }  lg:block`}
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>

        <img
          className="object-contain w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={bg}
          alt="bg hero"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block py-px mb-4 text-base font-semibold tracking-wider text-indigo-500 uppercase rounded-full bg-teal-accent-400">
            E.M Digital
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {t("titleHero")}
          </h2>
          <p className="pr-5 mb-5 text-indigo-500 md:text-lg">
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
              cursorStyle="_"
              typeSpeed={30}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-700  focus:shadow-outline focus:outline-none"
            >
              {t("buttonAbout")}
            </a>
            <a
              href="#projects"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-500"
            >
              {t("buttonProject")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

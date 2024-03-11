import { ArrowLeftCircle } from "lucide-react";
import vetor from "../../assets/svg/Vector 18.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="w-full h-full   bg-[#030B0F]  text-[#D1D1D1] flex flex-col justify-center relative ">
      <img src={vetor} alt="" className="absolute left-0 top-[-300px]" />
      <div className="container">
        <h2 className="text-6xl font-bold max-w-[647px] pt-11">
          כמה מהעבודות הטובות ביותר שלנו
        </h2>
        <p className="font-normal text-lg mt-7">צפו בכמה מהפרויקטים שלנו</p>
        <button>
          <ArrowLeftCircle size={200} />
        </button>
        <div className="flex flex-col items-center mt-10 mb-11  ">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 z-50">
            <div>
              <Link
                to="https://new-club-clothes.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <div className="py-3 lg:w-[573px] w-[420px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1708932227/Screenshot_23_deonbw.png"
                    alt="Project we made eccomerce for clother"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Club Clothers</h3>
                  <p className="text-base font-light">אתר סחר</p>
                </div>
              </Link>
              <Link
                to="https://ecommerce-xhdu.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-easing="linear"
              >
                <div className="py-3 lg:w-[573px] w-[420px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1710178141/Image_1_lnemkd.png"
                    alt="Platform web site for car sales"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Web Car</h3>
                  <p className="text-base font-light">
                    פלטפורמה חמכירת מכוניות ופרסום
                  </p>
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="https://webcar-umber.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-easing="linear"
              >
                <div className="py-3 lg:w-[573px] w-[420px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1708932227/Screenshot_27_a6sppc.png"
                    alt="Project we made about eccomerce"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Eccomerce </h3>
                  <p className="text-base font-light">אתר סחר</p>
                </div>
              </Link>
              <Link
                to="https://safe-garden.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="4000"
                data-aos-easing="linear"
              >
                <div className="py-3 lg:w-[573px] w-[420px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1710148822/safe_qmcsgn.png"
                    alt="Plataform web for managment do kindgarden"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Safe Garden</h3>
                  <p className="text-base font-light">
                    פלטפורמה לנהול גן ילדים פרטי
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

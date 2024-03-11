import vetor from "../../assets/svg/Vector 18.svg";
import Project1 from "../../assets/Image.png";
import Project2 from "../../assets/Image (1).png";
import Project3 from "../../assets/clothes-N7QxeYsR.png.png";
import Project4 from "../../assets/safe.png";
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
        <div className="flex flex-col items-center mt-10 mb-11  ">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div>
              <Link to="https://new-club-clothes.vercel.app/" target="_blank">
                <div className="py-3">
                  <img
                    src={Project1}
                    alt="Project we made"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Club Clothers</h3>
                  <p className="text-base font-light">אתר סחר</p>
                </div>
              </Link>
              <Link to="https://ecommerce-xhdu.vercel.app/" target="_blank">
                <div className="py-3">
                  <img
                    src={Project2}
                    alt="Project we made"
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
              <Link to="https://webcar-umber.vercel.app/" target="_blank">
                <div className="py-3">
                  <img
                    src={Project3}
                    alt="Project we made"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Eccomerce </h3>
                  <p className="text-base font-light">אתר סחר</p>
                </div>
              </Link>
              <Link to="https://safe-garden.vercel.app/" target="_blank">
                <div className="py-3">
                  <img
                    src={Project4}
                    alt="Project we made"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Safe Garden</h3>
                  <p className="text-base font-light">
                    פלטפורמה לנהול גן ילדים פרטי{" "}
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

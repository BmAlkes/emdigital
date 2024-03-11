import { ChevronLeft } from "lucide-react";
import logoFooter from "../../assets/svg/Logo3.svg";
import { Link } from "react-router-dom";

const NewFooter = () => {
  return (
    <footer className="bg-[#030B0F]">
      <div className=" text-white px-5 py-32 mx-auto flex  lg:items-start lg:flex-row md:flex-col md:items-center flex-wrap flex-row">
        <div className="w-96 h-full   md:mx-0 mx-auto text-right md:text-left md:mb-10 flex-1">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <img
              src={logoFooter}
              className="md:max-w-[425px] w-[250px] mx-auto"
            />
          </a>
          <div className="flex mt-11 md:items-center justify-center">
            <button className="flex items-center flex-row-reverse text-lg gap-2">
              <ChevronLeft size={18} />
              facebook
            </button>
            <button className="flex items-center flex-row-reverse text-lg gap-2">
              <ChevronLeft size={18} />
              Instagram
            </button>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left ">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-right">
            <h2 className="title-font font-bold  tracking-widest text-lg mb-3">
              מפה אתר
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-3 cursor-pointer">
              <Link to="/about">
                <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                  <a>אודותינו</a>
                </li>
              </Link>
              <Link to="/projects">
                <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                  <a className="">הפרוייקטים שלנו</a>
                </li>
              </Link>
              <Link to="/services">
                <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                  <a className="">שירותים החברה</a>
                </li>
              </Link>
              <Link to="/about">
                <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                  <a className="">המלצות לקוחותינו</a>
                </li>
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-right">
            <h2 className="title-font font-bold  tracking-widest text-lg mb-3">
              שירותי החברה
            </h2>
            <nav className=" list-none mb-10 flex flex-col gap-3 cursor-pointer ">
              <li className=" rounded-lg py-2 px-2   hover:bg-white hover:text-black">
                <Link to="development">פיתוח אתרי אינטרנט</Link>
              </li>
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <Link to="/design">עיצוב גרפי</Link>
              </li>
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <Link to="/digital">שיווק דיגיטלי</Link>
              </li>
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <Link to="/server">אחסון והקצאת שרתים</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-right cursor-pointer">
            <h2 className="title-font font-bold  tracking-widest text-lg mb-3">
              הפרויקטים שלנו
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-3">
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <Link
                  to="https://deliver-coffe.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Deliver Coffee
                </Link>
              </li>
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <Link
                  to="https://safe-garden.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  SafeGarden
                </Link>
              </li>
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <Link
                  to="https://webcar-umber.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Webcar
                </Link>
              </li>
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <Link to="https://skylum.co.il/" target="_blank" rel="noopener">
                  SkyLum
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-right">
            <button className="title-font font-bold  tracking-widest text-lg mb-3  ">
              דברו איתנו
            </button>

            <nav className="list-none mb-10 flex flex-col gap-3 ">
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <a href="mailto:eden@eden-digital.co.il">
                  eden@eden-digital.co.il
                </a>
              </li>
              <li className=" rounded-lg py-2 px-2 hover:bg-white hover:text-black">
                <a href="tel:0545899899">054-589-9899</a>
              </li>
              <li className=" rounded-lg py-2 px-2  hover:bg-white hover:text-black">
                <a>תל אביב</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#030B0F] border-t">
        <div className="container w-full py-4 h-20 flex lg:flex-row flex-col items-center justify-between ">
          <p className="  text-gray-500 text-sm ">
            All rights reserved Differeacting
          </p>
          <p className="text-gray-500 text-sm text-center">
            Differeating Solutions for web applications - ©2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;

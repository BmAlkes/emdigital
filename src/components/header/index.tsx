import logo from "../../assets/svg/Logo3.svg";
// import israel from "../../assets/israel.png";
// import eua from "../../assets/united-states.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useEffect, useState } from "react";
import { PhoneCallIcon } from "lucide-react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// import i18n from "../../i18n";
// import { t } from "i18next";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
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

  // const languageOptions = [
  //   { name: "English", value: "en", flag: eua },
  //   { name: "Hebrew", value: "he", flag: israel },
  // ];
  return (
    <header className="bg-[#030B0F] shadow-lg fixed top-0 w-full z-[60]">
      <nav className=" nav flex lg:flex-row flex-row-reverse items-center justify-between w-[92%] mx-auto h-24">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" className="w-[191px]" />
          </Link>
        </div>
        <div className=" bg-[#030B0F] left-0 lg:w-auto hidden w-full lg:flex items-center ">
          <ul className="lg:flex md:flex-row hidden lg:items-center lg:gap-[4vw] gap-6 text-lg text-white">
            <li className="nav relative">
              <Link to="/">ראשי</Link>
            </li>
            <li className="nav relative">
              <Link to="/about">מי אנחנו</Link>
            </li>

            <li className="nav relative">
              <Link to="/services">מסולים</Link>
            </li>

            <li className="nav relative">
              <Link to="/projects">פרויקטים</Link>
            </li>

            <li className="nav relative">
              <Link to="/contact">צרו קשר</Link>
            </li>
          </ul>
        </div>
        {/* <div className="flex gap-5 cursor-pointer">
          {languageOptions.map((language) => (
            <button
              key={language.value}
              className=""
              onClick={() => {
                i18n.changeLanguage(language.value);
              }}
            >
              <img src={language.flag} alt={language.name} className="w-10" />
            </button>
          ))}
        </div> */}
        <a
          href="tel:0545899899"
          className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded p-[1px] hidden md:block "
        >
          <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
            דברו איתנו
          </span>
        </a>{" "}
        <div className="lg:hidden cursor-pointer">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AiOutlineMenu size={35} color="#fff" />
            </SheetTrigger>
            <SheetContent
              side={"right"}
              className="bg-[#030B0F] text-white border-l border-[#030b0f] p-6 z-[60]"
            >
              <SheetHeader>
                <SheetTitle className="absolute left-5">
                  <Link to="/">
                    <img src={logo} alt="" className="w-[150px]" />
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <nav className="mt-24 ">
                    <ul
                      className={`text-xl text-gray-900 flex flex-col gap-5   "items-end`}
                    >
                      <Link
                        onClick={handleClose}
                        to="/"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>ראשי</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/about"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>מי אנחנו</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/services"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>מסולים</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/projects"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>פרויקטים</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/contact"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>צרו קשר</li>
                      </Link>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
              <SheetFooter className="absolute bottom-12">
                <ul className="flex gap-5">
                  <li>
                    <a href="tel:0545899899">
                      <PhoneCallIcon size={28} color="#fff" />
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=9720545899899&text=I%20want%20to%20talk%20about%20a%20project">
                      <FaWhatsapp size={28} color="#fff" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:eden@eden-digital.co.il">
                      <MdOutlineEmail size={28} color="#fff" />
                    </a>
                  </li>
                </ul>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;

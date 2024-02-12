import logo from "../../assets/reacting.png";
// import israel from "../../assets/israel.png";
// import eua from "../../assets/united-states.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useEffect, useState } from "react";
// import i18n from "../../i18n";
import { t } from "i18next";

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
    <header className="bg-[#030B0F] shadow-lg ">
      <nav className=" flex lg:flex-row flex-row-reverse items-center justify-between w-[92%] mx-auto h-24">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className=" bg-[#030B0F] left-0 lg:w-auto hidden w-full lg:flex items-center px-5">
          <ul className="lg:flex md:flex-row hidden lg:items-center lg:gap-[4vw] gap-6 text-lg text-white">
            <li className="nav relative">
              <Link to="/services">אודות החברה</Link>
            </li>

            <li className="nav relative">
              <Link to="/projects">שירותים</Link>
            </li>

            <li className="nav relative">
              <Link to="/team">פרוייקטים</Link>
            </li>

            <li className="nav relative">
              <Link to="/contact">הכירו אותנו</Link>
            </li>
          </ul>
        </div>
        <div></div>
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
          href="tel:054589-9899"
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
              className="bg-[#030B0F] text-white border-l border-[#030b0f] p-6"
            >
              <SheetHeader>
                <SheetTitle className="absolute left-5">
                  <Link to="/">
                    <img src={logo} alt="" />
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
                        } w-full`}
                      >
                        <li>{t("home")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/services"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("Services")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/projects"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("Projects")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/team"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("Team")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/contact"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("Contact")}</li>
                      </Link>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;

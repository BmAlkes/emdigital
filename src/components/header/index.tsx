import logo from "../../assets/new logo.png";
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
    <header className="bg-white">
      <nav className=" flex items-center justify-between w-[92%] mx-auto h-24">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className=" bg-white left-0 lg:w-auto hidden w-full lg:flex items-center px-5">
          <ul className="lg:flex md:flex-row hidden lg:items-center lg:gap-[4vw] gap-6 text-lg text-gray-900">
            <Link to="/" className="hover:text-gray-500">
              <li>{t("home")}</li>
            </Link>
            <Link to="/services" className="hover:text-gray-500">
              <li>{t("Services")}</li>
            </Link>
            <Link to="/projects" className="hover:text-gray-500">
              <li>{t("Projects")}</li>
            </Link>
            <Link to="/team" className="hover:text-gray-500">
              <li>{t("Team")}</li>
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              <li>{t("Contact")}</li>
            </Link>
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
        <div className="lg:hidden cursor-pointer">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AiOutlineMenu size={35} />
            </SheetTrigger>
            <SheetContent side={direction === "rtl" ? "left" : "right"}>
              <SheetHeader>
                <SheetTitle className="absolute left-2">
                  <img src={logo} alt="" />
                </SheetTitle>
                <SheetDescription>
                  <nav className="mt-14 ">
                    <ul
                      className={`text-xl text-gray-900 flex flex-col gap-5   "items-end`}
                    >
                      <Link
                        onClick={handleClose}
                        to="/"
                        className={`hover:text-gray-500 hover:bg-gray-200 ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("home")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/services"
                        className={`hover:text-gray-500 hover:bg-gray-200 ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("Services")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/projects"
                        className={`hover:text-gray-500 hover:bg-gray-200 ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("Projects")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/team"
                        className={`hover:text-gray-500 hover:bg-gray-200 ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full`}
                      >
                        <li>{t("Team")}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/contact"
                        className={`hover:text-gray-500 hover:bg-gray-200 ${
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

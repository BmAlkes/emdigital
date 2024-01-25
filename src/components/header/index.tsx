import logo from "../../assets/logo.jpg";
import israel from "../../assets/israel.png";
import eua from "../../assets/united-states.png";
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
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white">
      <nav className=" flex items-center justify-between w-[92%] mx-auto h-24">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className=" bg-white left-0 md:w-auto hidden w-full md:flex items-center px-5">
          <ul className="md:flex md:flex-row hidden md:items-center md:gap-[4vw] gap-6 text-lg text-gray-900">
            <Link to="/" className="hover:text-gray-500">
              <li>Home</li>
            </Link>
            <Link to="/services" className="hover:text-gray-500">
              <li>Services</li>
            </Link>
            <Link to="/projects" className="hover:text-gray-500">
              <li>Projects</li>
            </Link>
            <Link to="/team" className="hover:text-gray-500">
              <li>Team</li>
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-5 cursor-pointer">
          <img src={israel} alt="" className="w-11" />
          <img src={eua} alt="" className="w-11" />
        </div>
        <div className="md:hidden cursor-pointer">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AiOutlineMenu size={35} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <img src={logo} alt="" />
                </SheetTitle>
                <SheetDescription>
                  <nav className="mt-9 ">
                    <ul className="text-xl text-gray-900 flex flex-col gap-5 items-start">
                      <Link
                        onClick={handleClose}
                        to="/"
                        className="hover:text-gray-500 hover:bg-gray-200 text-left w-full"
                      >
                        <li>Home</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/services"
                        className="hover:text-gray-500 hover:bg-gray-200 text-left w-full"
                      >
                        <li>Services</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/projects"
                        className="hover:text-gray-500 hover:bg-gray-200 text-left w-full"
                      >
                        <li>Projects</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/team"
                        className="hover:text-gray-500 hover:bg-gray-200 text-left w-full"
                      >
                        <li>Team</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/contact"
                        className="hover:text-gray-500 hover:bg-gray-200 text-left w-full"
                      >
                        <li>Contact</li>
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

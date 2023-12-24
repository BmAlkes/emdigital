import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-white fixed w-full z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo site" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center text-black">
          <a className="mr-5 hover:text-gray-600" href="#home">
            Home
          </a>
          <a className="mr-5 hover:text-gray-600" href="#about">
            About
          </a>
          <a className="mr-5 hover:text-gray-600" href="#services">
            Services
          </a>
          <a className="mr-5 hover:text-gray-600" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

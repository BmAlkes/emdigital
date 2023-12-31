import bg from "../../assets/bg1.jpg";
const Hero = () => {
  return (
    <section
      className="relative flex flex-col-reverse py-16 pt-44 lg:pt-2 lg:flex-col lg:pb-0"
      id="home"
    >
      <div
        className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
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
            Everything you
            <br className="hidden md:block" />
            can imagine{" "}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-700  focus:shadow-outline focus:outline-none"
            >
              About US
            </a>
            <a
              href="#projects"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-500"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

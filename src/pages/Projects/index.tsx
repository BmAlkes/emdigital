import { useLocation } from "react-router-dom";
import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";
import { useEffect } from "react";

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className=" bg-[#030B0F] lg:h-screen h-[600px] mt-[96px] "></section>
      <section className="bg-[#030B0F] h-full">
        <div className="container ">
          <OpenCards />
        </div>
      </section>
      <ScrollUp />
    </>
  );
};

export default Projects;

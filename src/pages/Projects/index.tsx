import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";

const Projects = () => {
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

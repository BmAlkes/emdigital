import { useLocation } from "react-router-dom";
import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";
import { useEffect } from "react";
import { motion } from "framer-motion";
import projects from "../../assets/rockettwo.jpg";

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <section className=" bg-[#030B0F]   mt-[96px] rel relative">
        <img
          src={projects}
          alt=""
          className="w-full lg:h-[1000px] object-cover"
        />
      </section>
      <section className="bg-[#030B0F] h-full pt-8 ">
        <div className="container ">
          <OpenCards />
        </div>
      </section>
      <ScrollUp />
    </motion.div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projectsData } from "./data";
import { projectsNav } from "./data";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState<CardProps[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: any, index: number) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const handleCardClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "800px",
    },
    collapsed: {
      width: "50px",
    },
  };
  return (
    <section className="py-16 pb-[300px]">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="lg:text-6xl md:text-3xl text-xl font-semibold text-center lg:text-right text-white">
          Featured Projects
        </h2>
        <p className="text-base  my-5  text-justify text-white">
          Check out our latest works.
        </p>
      </div>
      <div className="mt-12 flex flex-col justify-center items-center gap-5 text-white">
        <div className="project__filters">
          {projectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active-project" : ""
                } project__item`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        <div className="flex gap-1">
          {projects.map((index) => (
            <motion.div
              key={index.id}
              className={`cursor-pointer card lg:h-[750px] h-[400px] bg-cover bg-center object-cover rounded-[20px] ${
                index.id === expandedIndex ? "expanded" : ""
              } border`}
              variants={cardVariants}
              initial="collapsed"
              animate={index.id === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.8 }}
              onClick={() => handleCardClick(index.id)}
              style={{ backgroundImage: `url(${index.image})` }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center ">
                  <h2 className="text-xl font-semibold text-white text-center"></h2>
                  {index.id === expandedIndex && (
                    <p className="mt-2 text-gray-100 text-center">
                      {index.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenCards;

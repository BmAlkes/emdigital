import { useEffect, useState } from "react";
import { projectsData } from "./data";
import { projectsNav } from "./data";

import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

const OpenCards = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState<CardProps[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    active;
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

  return (
    <section className="py-16 pb-[300px] container">
      <div className=" px-4 flex flex-col items-center">
        <h2 className="lg:text-6xl md:text-3xl text-xl font-semibold text-center lg:text-right text-white">
          Featured Projects
        </h2>
        <p className="text-base  my-5  text-justify text-white">
          Check out our latest works.
        </p>
      </div>
      <div className="mt-12 flex flex-col justify-center  items-center gap-5 text-white container">
        <div className="flex lg:gap-4 gap-[6px] flex-wrap">
          {projectsNav.map((item, index) => {
            return (
              <nav className="nav">
                <ul>
                  <li
                    className="cursor-pointer"
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    key={index}
                  >
                    {item.name}
                  </li>
                </ul>
              </nav>
            );
          })}
        </div>
        <div className=" project__container grid">
          {projects.map((item) => (
            <Link to={item.link} target="_blank">
              <div className="relative grid h-[40rem] w-full lg:max-w-[28rem] md:min-w-[20rem] max-w-[18rem]  flex-col  items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center text-gray-700 ">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <img
                  src={item.image}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <div className="my-4 z-20 p-4">
                  <h2 className="text-white text-2xl font-bold pb-2">
                    {item.title}
                  </h2>
                  <p className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] py-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenCards;

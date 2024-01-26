import projectbg from "../../assets/projects.jpg";
import safe from "../../assets/safe.png";
import deliver from "../../assets/deliver.png";
import bbuy from "../../assets/bbuy.png";
import { seoData } from "./seoData";

interface SeoType {
  img: string;
  name: string;
  type: string;
  about: string;
  site: string;
}

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div>
        <img
          src={projectbg}
          alt=""
          className="h-96 w-full object-cover opacity-60"
        />
      </div>
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="container">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Web Sites and Apps.
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            reiciendis nam ex tempore non nobis recusandae deserunt tempora, id
            voluptate suscipit! Eligendi quibusdam earum excepturi voluptatibus
            ut debitis ad eos.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
              <img
                className="h-40 rounded w-full object-cover object-top mb-6"
                src="https://www.brunomalkes.com/assets/clothes-N7QxeYsR.png"
                alt="project eccomerce"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Club Clothes
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Web Eccomerce
              </h2>
              <p className="leading-relaxed text-base py-2">
                Eccomerce made with react, and firebase conneting with Stripe
                api for payments
              </p>
              <a
                href="https://new-club-clothes.vercel.app/"
                className="cursor-pointer text-indigo-500 text-lg mt-3"
              >
                Check the projet
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
              <img
                className="h-40 rounded w-full object-cover object-top mb-6"
                src="https://www.brunomalkes.com/assets/store-5TE_3_DE.png"
                alt="Red store"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Red Store
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                WebCommerce
              </h2>
              <p className="leading-relaxed text-base py-2">
                Eccomerce made with react, and firebase conneting with Stripe
                api for payments
              </p>
              <a
                href="https://ecommerce-xhdu.vercel.app/"
                className="cursor-pointer text-indigo-500 text-lg mt-3"
              >
                Check the projet
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
              <img
                className="h-40 rounded w-full object-cover object-top mb-6"
                src={safe}
                alt="Red store"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Safe Garden
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Site and Platform
              </h2>
              <p className="leading-relaxed text-base py-2">
                Site and Platform form kindgarden management.
              </p>
              <a
                href="safe-garden.vercel.app"
                className="cursor-pointer text-indigo-500 text-lg mt-3"
              >
                Check the projet
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 ">
            <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
              <img
                className="h-40 rounded w-full object-cover object-top mb-6"
                src="https://raw.githubusercontent.com/BmAlkes/webcar/main/src/assets/Screenshot_16.png"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Web Car
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                platform for selling cars and advertising
              </h2>
              <p className="leading-relaxed text-base py-2">
                Platform for selling and publishing cars.
              </p>
              <a
                href="https://webcar-umber.vercel.app/"
                className="cursor-pointer text-indigo-500 text-lg mt-3"
              >
                Check the projet
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://www.brunomalkes.com/assets/meta-YIggGmVr.png"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Meta Daily
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Web App
              </h2>
              <p className="leading-relaxed text-base py-2">
                Platform for to help to create and manage habits
              </p>
              <a
                href="https://metadaily.vercel.app/"
                className="cursor-pointer text-indigo-500 text-lg mt-3"
              >
                Check the projet
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={deliver}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Deliver Coffee
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Application
              </h2>
              <p className="leading-relaxed text-base py-2">
                Web site for order Coffee.
              </p>
              <a
                href="https://deliver-coffe.vercel.app/"
                className="cursor-pointer text-indigo-500 text-lg mt-3"
              >
                Check the projet
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={bbuy}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                BBUY
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Web/Aplication
              </h2>
              <p className="leading-relaxed text-base py-2">Eccommerce</p>
              <a
                href="https://bbuy-2.vercel.app/"
                className="cursor-pointer text-indigo-500 text-lg mt-3"
              >
                Check the projet
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Seo
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reiciendis nam ex tempore non nobis recusandae deserunt tempora, id
          voluptate suscipit! Eligendi quibusdam earum excepturi voluptatibus ut
          debitis ad eos.
        </p>
      </div>
      <div className="flex flex-wrap m-4">
        {seoData.map((item: SeoType) => {
          return (
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-slate-50 p-6 rounded-lg shadow-xl h-[400px]">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={item.img}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {item.name}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {item.type}
                </h2>
                <p className="leading-relaxed text-base py-2">{item.about}</p>
                <a
                  href={item.site}
                  className="cursor-pointer text-indigo-500 text-lg mt-3"
                >
                  Check the projet
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

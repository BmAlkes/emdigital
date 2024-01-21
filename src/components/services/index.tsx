import web from "../../assets/web1.svg";
import web2 from "../../assets/web2.svg";
import web3 from "../../assets/web3.svg";
import seo1 from "../../assets/seo1.png";
import seo2 from "../../assets/seo2.png";
import seo3 from "../../assets/seo3.png";
import seo4 from "../../assets/seo4.png";
import Pricing from "../pricingList";

const Services = () => {
  return (
    <>
      <section className="text-gray-600 body-font" id="services">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Service we do
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              dicta quam, suscipit inventore ullam nemo, harum soluta voluptatum
              ut consectetur, et officia. Doloribus facilis nam ipsum aliquid
              quam molestias. Ratione.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={web} alt="" className="h-5" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Design of web pages
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={web2} alt="" className="object-cover h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Application
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Harum facilis ad temporibus nesciunt incidunt
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={web3} alt="" className="h-7 object-fill " />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Bunker
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Ramona Falls
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font" id="projects">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                A little bit of your Projects.
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi reiciendis nam ex tempore non nobis recusandae deserunt
                tempora, id voluptate suscipit! Eligendi quibusdam earum
                excepturi voluptatibus ut debitis ad eos.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src="https://www.brunomalkes.com/assets/clothes-N7QxeYsR.png"
                  alt="project eccomerce"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Club Clothes
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Web Eccomerce
                </h2>
                <p className="leading-relaxed text-base">
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
              <div className="bg-slate-50 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src="https://www.brunomalkes.com/assets/store-5TE_3_DE.png"
                  alt="Red store"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Red Store
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  WebCommerce
                </h2>
                <p className="leading-relaxed text-base">
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
              <div className="bg-slate-50 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src="https://raw.githubusercontent.com/BmAlkes/webcar/main/src/assets/Screenshot_16.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Web Car
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  platform for selling cars and advertising
                </h2>
                <p className="leading-relaxed text-base">
                  Platform for selling and publishing cars, where you can add
                  cars, delete cars, speak directly with the seller
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
              <div className="bg-slate-50 p-6 rounded-lg">
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
                <p className="leading-relaxed text-base">
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
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" id="projects">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                About SEO
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi reiciendis nam ex tempore non nobis recusandae deserunt
                tempora, id voluptate suscipit! Eligendi quibusdam earum
                excepturi voluptatibus ut debitis ad eos.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src={seo1}
                  alt="project eccomerce"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  ""
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  ""
                </h2>
                <p className="leading-relaxed text-base">""</p>
                <a
                  href="https://www.dror-tools.co.il/"
                  className="cursor-pointer text-indigo-500 text-lg mt-3"
                >
                  Check Web site
                </a>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src={seo2}
                  alt="Red store"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  ""
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  ""
                </h2>
                <p className="leading-relaxed text-base">""</p>
                <a
                  href="https://gamida.co.il/safety/"
                  className="cursor-pointer text-indigo-500 text-lg mt-3"
                >
                  check Web site
                </a>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src={seo3}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  ""
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  ""
                </h2>
                <p className="leading-relaxed text-base">""</p>
                <a
                  href="https://webcar-umber.vercel.app/"
                  className="cursor-pointer text-indigo-500 text-lg mt-3"
                >
                  Check Web site
                </a>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={seo4}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  ""
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  ""
                </h2>
                <p className="leading-relaxed text-base">""</p>
                <a
                  href="https://www.hollo.co.il/"
                  className="cursor-pointer text-indigo-500 text-lg mt-3"
                >
                  Check Web site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </>
  );
};

export default Services;

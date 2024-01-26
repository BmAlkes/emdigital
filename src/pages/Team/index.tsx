import bruno from "../../assets/bruno.jpeg";
import aviv from "../../assets/aviv.jpg";
import eden from "../../assets/eden.jpeg";

const Team = () => {
  return (
    <section className="text-gray-600 body-font h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={bruno}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium text-center">
                  Bruno Malkes
                </h2>
                <p className="text-gray-500 text-center">
                  Founding partner and Head of Technologies
                </p>
                <p className="text-gray-500 text-sm text-center w-full">
                  FullStack Developer
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={eden}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Eden.Y. Charninski
                </h2>
                <p className="text-gray-500">
                  Founding partner and marketing manager
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={aviv}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Aviv Avidar
                </h2>
                <p className="text-gray-500">UX&UI and Graphic Desinger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

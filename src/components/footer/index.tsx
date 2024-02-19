import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const Reccomend = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || phone === "") {
      alert("Fill all the fields");
      return;
    }
    const templateParams = {
      from_name: name,
      phone: phone,
      message: message,
      email: email,
    };
    console.log(templateParams);
    emailjs
      .send(
        "service_4linpx5",
        "template_ilmbuah",
        templateParams,
        "cWFIwkGX6Ph0Mm988"
      )
      .then((response) => {
        console.log("Email send", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
      });
  };
  return (
    <section className=" h-full lg:h-screen" id="contact">
      <h2 className="text-6xl font-bold mt-60 text-center">
        המלצות מלקוחותינו
      </h2>
      <div className="h-full body-font flex flex-col justify-between">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div className="bg-[#E7E7E7] lg:py-[140px] lg:px-[219px] py-7 px-3">
          <div className="container ">
            <h3 className="text-3xl lg:text-6xl max-w-[641px] font-bold  mb-2 text-gray-900 pb-10">
              מוכנים להתחיל פרויקט ביחד?
            </h3>

            <form
              onSubmit={sendEmail}
              className="flex lg:flex-row flex-col justify-center items-center gap-4"
            >
              <input
                type="text"
                placeholder="שם מלא"
                className=" w-full bg-white rounded-[10px] border border-[#6D6D6D] text-base h-12 p-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email@email.com"
                id="footer-field"
                name="footer-field"
                className=" w-full bg-white rounded-[10px] border border-[#6D6D6D] text-base h-12 p-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="טלפון"
                className=" w-full bg-white rounded-[10px] border border-[#6D6D6D] text-base h-12 p-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-[10px] p-[1px] text-center "
              >
                <span className="flex w-full bg-[white] text-black rounded-[10px] py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] hover:text-white items-center justify-center">
                  שליחת הפרטים
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reccomend;

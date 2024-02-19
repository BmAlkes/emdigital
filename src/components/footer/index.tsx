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
    <section className="text-gray-600 body-font" id="contact">
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center ">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-center md:justify-start">
            <div className="relative  sm:mr-4 mr-2">
              <h3 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                צרו קשר
              </h3>
              <div className="h-1 w-20 mb-4 bg-indigo-500 rounded"></div>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="שם"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="טלפון"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="email@email.com"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  id="footer-field"
                  name="footer-field"
                  placeholder="הודעה אלינו...."
                  className="w-full resize-none mt-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  שלח
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reccomend;

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
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
    <footer className="text-gray-600 body-font" id="contact">
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
          <span className="inline-flex mr-auto lg:mt-0 mt-6 w-full   md:justify-start md:w-auto">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex items-center justify-between h-20 flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 —
            <a
              href="https://www.brunomalkes.com"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bmalkes - Studio 24 Solutions
            </a>
          </p>
          <span className="sm:mr-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            All rights reserved Studio 24 Solutions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

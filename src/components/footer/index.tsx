import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import vetor2 from "../../assets/Frame 1160445221.png";
import safe from "../../assets/logo.jpg";
import ofir from "../../assets/ofir.jpeg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

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
    <section className=" h-full " id="contact">
      <img src={vetor2} alt="background vetor" className="w-full" />
      <h2 className="text-6xl font-bold mt-12 text-center">
        המלצות מלקוחותינו
      </h2>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <Dialog>
                    <DialogTrigger>
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src={ofir}
                      />
                    </DialogTrigger>
                    <DialogContent className=" bg-[#030B0F] text-white">
                      <DialogHeader>
                        <DialogTitle className="py-4">
                          Testimonial video
                        </DialogTitle>
                        <DialogDescription>
                          <iframe
                            src="https://res.cloudinary.com/landingpage2/video/upload/v1709146699/WhatsApp_Video_2024-02-28_at_10.48.22_ehpjc7.mp4"
                            className="w-full h-[300px]"
                          ></iframe>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <p className="leading-relaxed">
                    הכרתי את ברונו בתור סטודנט שלי, כבר מההתחלה עפתי עליו, הוא
                    הביא עיצובים מרשימים במהירות שיא והתפתח מאוד מאז. ראיתי את
                    כל העבודות שלו ואהבתי כל אחת, הוא יושב עם הלקוח להבין מה
                    הלקוח צריך ומשם הוא לוקח את זה למקומות מרשימים. ברונו -
                    חרוץ, מקשיב, מגלה הבנה ואמפתיה - מומלץ בחום
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Ofir Zeitoun
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/300x300"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    ALPER KAMU
                  </h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={safe}
                  />
                  <p className="leading-relaxed">
                    ממליצה בחום על ברונו! באתר של SafeGarden חיפשתי מתכנת פרונט
                    שיבין את החזון של האתר ואת הצרכים של המערכת. ברונו עבד בצורה
                    מדויקת ומהירה, שאל את השאלות הנכונות וידע בדיוק מה הצרכים של
                    המערכת. השיתוף פעולה איתו היה קליל ומקצועי והכי חשוב אנושי!
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Anastacia Tsarfati
                  </h2>
                  <p className="text-gray-500">Safegardenבעלים של </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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

import { motion } from "framer-motion";
import CardPrice from "../../components/priceCard";
import avatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceOne = [
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: true },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: false },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: true },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: true },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: true },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: true },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: false },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: false },
    { textOne: "כאן ייכנס טקסט כאן ייכנס טקסט", icon: false },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <section className=" bg-[#030B0F] lg:h-screen h-[600px] mt-[96px] ">
        <div className="flex flex-col lg:pt-[200px] pt-[90px] items-center gap-[28px] h-full">
          <h2 className="text-[#f4f4f4] font-bold lg:text-[102px] text-[40px] text-center ">
            בחרו את התוכנית{" "}
            <span className="block text-gradient">המתאימה לכם</span>
          </h2>
          <p className="text-[#F4F4F4] lg:text-[39px] text-2xl font-normal ">
            בנינו לכם כמה מסלולים מעניינם
          </p>
        </div>
      </section>
      <section className=" flex flex-col items-center bg-[#F4F4F4] ">
        <div className="flex lg:flex-row flex-wrap container lg:flex-nowrap items-center justify-center  lg:gap-[24px] gap-  lg:mt-[-300px] md:mt-[-200px] mt-[-200px] mb-16">
          <CardPrice
            price="1000"
            textBase="בסיס"
            serviceList={serviceOne}
            background="white"
          />
          <CardPrice
            price="2500"
            textBase="מקצועי"
            serviceList={serviceOne}
            background="white"
          />
          <CardPrice
            price="7500"
            textBase="הכי משתלם"
            serviceList={serviceOne}
            background="blue"
          />
          <CardPrice
            price="12500"
            textBase="הכל כלול"
            serviceList={serviceOne}
            background="white"
          />
        </div>
      </section>
      <section className="lg:h-screen h-full py-16 bg-[#F4F4F4]">
        <div className="container flex items-center gap-5 flex-col">
          <h3 className="font-bold text-6xl">שאלות נפוצות</h3>
          <p className="text-2xl font-normal">
            כל מה שאתה צריך לדעת על המוצר והחיוב
          </p>
          <div className="container">
            <div className="mx-auto lg:w-[1280px] md:w-[660px] w-72 mt-24">
              <div className="divide-y divide-[#E7E7E7]">
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    האם יש ניסיון חינם?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-[#454545] text-base">
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית
                    קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט
                    לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לורם איפסום
                    דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
                    עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    האם אוכל לשנות את התוכנית שלי מאוחר יותר?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 ">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    מהי מדיניות הביטולים שלך?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the third item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    איך עובד החיוב?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    איך אני משנה את כתובת האימייל של החשבון שלי?
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    האם ניתן להוסיף מידע נוסף לחשבונית?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the third item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    מהי מדיניות הביטולים שלך?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the third item's accordion body.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4] h-full py-16">
        <div className="bg-white lg:w-[1280px] h-[300px] container flex-col flex items-center justify-center">
          <img
            src={avatar}
            alt=" avatar of persons"
            className="max-w-[120px] object-cover"
          />
          <p className="text-[#111111] text-2xl font-normal mt-9">
            עדיין יש לכם שאלות?
          </p>
          <p className="text-[#454545] text-lg font-normal mt-2">
            אינך מוצא את התשובה שאתה מחפש? נא לשוחח עם הצוות הידידותי שלנו.
          </p>

          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]  mt-9  ">
              <span className="flex w-full  text-white rounded-xl py-[14px] px-[24px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                צרו איתנו קשר
              </span>
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;

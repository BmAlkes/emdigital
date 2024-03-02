import { motion } from "framer-motion";
import CardPrice from "../../components/priceCard";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollUp from "../../components/scrollup";
import FAQ from "../../components/FAQ";

const Services = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
      <FAQ />

      <ScrollUp />
    </motion.div>
  );
};

export default Services;

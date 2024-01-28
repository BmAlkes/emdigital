import web from "../../assets/web1.svg";
import safe from "../../assets/logo (2) (1).jpg";
import Pricing from "../pricingList";
import { Link } from "react-router-dom";
import graphic from "../../assets/graphic-design-ruler-svgrepo-com.svg";

import seo from "../../assets/seo-training-marketing-presentation-svgrepo-com.svg";
import server from "../../assets/server-and-people-svgrepo-com.svg";

const Services = () => {
  return (
    <>
      <section className="text-gray-600 body-font" id="services">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              השירות שלנו
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-justify">
              ברוכים הבאים למחלקות העיצוב, הפיתוח, השיווק והשרתים שלנו. המקום
              שבו כל הפתרונות הדיגיטליים נמצאים תחת קורת גג אחת! בחרו עיצוב גרפי
              מרהיב, התקדמו לפיתוח אתרי אינטרנט מתקדמים ושווקו את האתר לקבלת
              לידים איכותיים ואל תשכחו לאחסן את האתר במקום בטוח! הכל כאן, במקום
              אחד - התחילו את המסע שלכם אל ההצלחה הדיגיטלית עכשיו!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/2 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={graphic} alt="" className="h-8" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  עיצוב גרפי
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  הביאו לחיים את הרעיונות שלכם עם עיצוב גרפי מקצועי: מלוגואים
                  ייחודיים, עיצוב אתרים מעוררי השראה וחבילות מיתוג עסקי שמבליטות
                  את הזהות והערכים של העסק / המותג.
                </p>
                <Link to="/services">
                  <button className="bg-indigo-500 text-white py-2 px-5 rounded-lg mt-2">
                    לפירוט של שירותי העיצוב לחצו כאן.
                  </button>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={web} alt="" className="object-cover h-8" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  פיתוח אתרי אינטרנט
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית -
                  מעמודי נחיתה דינמיים ואתרי תדמית בוורדפרס, דרך אתרי ריאקט
                  מתקדמים, ועד חנויות מקוונות ופתרונות Saas.
                </p>
                <Link to="/services">
                  <button className="bg-indigo-500 text-white py-2 px-5 rounded-lg mt-2">
                    לפירוט של שירותי הפיתוח לחצו כאן.
                  </button>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={seo} alt="" className="h-8 object-fill " />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  שיווק דיגיטל
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  הגבירו את הנוכחות הדיגיטלית שלכם עם שיווק דיגיטלי יעיל -
                  באמצעות SEO לשיפור מיקום במנועי חיפוש, קמפיינים ממוקדים
                  בפייסבוק ואינסטגרם, ופרסום ממומן ב-Google Ads להגדלת המרות.
                </p>
                <Link to="/services">
                  <button className="bg-indigo-500 text-white py-2 px-5 rounded-lg mt-2">
                    לפירוט של שירותי השיווק לחצו כאן
                  </button>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={server} alt="" className="h-8" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  אחסון והקצאת שרתים
                </h2>
                <p className="leading-relaxed text-base py-3 text-justify">
                  שמרו על אתרים ומידע בבטחה עם שירותי אחסון ושרתים מתקדמים.
                  מבטיחים זמינות גבוהה, מהירות ואמינות לכל פרויקט ועסק.
                </p>
                <Link to="/services">
                  <button className="bg-indigo-500 text-white py-2 px-5 rounded-lg mt-2">
                    לפירוט של אחסון לחצו כאן
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font" id="projects">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                גלרית פרויקטים: צפו ביצירות המובילות שלנו
              </h2>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              <p className="mt-4">כמה מהפרויקטים שלנו</p>
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
            <div className="flex w-full items-center justify-center">
              <Link to="/projects">
                <button className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-indigo-500 hover:bg-opacity-90">
                  More Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-4xl text-gray-800 ">
              המלצות מלקוחות
            </h2>
            <span className="inline-block h-1 w-24 rounded bg-indigo-500 mt-5 mb-7 "></span>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={safe}
                />
                <p className="leading-relaxed text-justify">
                  ממליצה בחום על ברונו! באתר של SafeGarden חיפשתי מתכנת פרונט
                  שיבין את החזון של האתר ואת הצרכים של המערכת. ברונו עבד בצורה
                  מדויקת ומהירה, שאל את השאלות הנכונות וידע בדיוק מה הצרכים של
                  המערכת. השיתוף פעולה איתו היה קליל ומקצועי והכי חשוב אנושי!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Anastacia Tsarfati
                </h2>
                <p className="text-gray-500">בעלים של Safegarden</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/300x300"
                />
                <p className="leading-relaxed text-justify">
                  רציתי להגיד תודה ענקית לעדן והצלחה במיזם החדש וכמובן לכל צוות
                  היידה דיגיטל על העבודה הנפלאה שהם עושים באתר שלנו בקידום
                  אורגני, בכל מה שקשור למערכת קונימבו, כולל הזנת תכנים וטיפול
                  בכל הסוגיות הקיימות, תודה רבה! רואים את התוצאות בענק.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  אופיר
                </h2>
                <p className="text-gray-500">
                  מנהל הדיגיטל של המותג דרור כלי עבודה
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed text-justify">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
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

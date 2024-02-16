import graphic from "../../assets/svg/graphic-design-ruler-svgrepo-com.svg";
import browser from "../../assets/svg/browser-website-svgrepo-com.svg";
import seo from "../../assets/svg/seo-training-marketing-presentation-svgrepo-com.svg";
import server from "../../assets/svg/server-and-people-svgrepo-com.svg";
import { Link } from "react-router-dom";
import PricingPage from "../../components/pricingList2";

const Services = () => {
  return (
    <section className="text-gray-600 body-font" id="services">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            השירות שלנו
          </h2>
          <p className="lg:w-1/2 w-full text-xl my-4 leading-relaxed text-gray-500 text-justify">
            ברוכים הבאים למחלקות העיצוב, הפיתוח, השיווק והשרתים שלנו. המקום שבו
            כל הפתרונות הדיגיטליים נמצאים תחת קורת גג אחת! בחרו עיצוב גרפי
            מרהיב, התקדמו לפיתוח אתרי אינטרנט מתקדמים ושווקו את האתר לקבלת לידים
            איכותיים ואל תשכחו לאחסן את האתר במקום בטוח! הכל כאן, במקום אחד -
            התחילו את המסע שלכם אל ההצלחה הדיגיטלית עכשיו!
          </p>
        </div>
      </div>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mt-8 mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
              to="/services/graphic"
            >
              <img src={graphic} className="w-[150px]" />

              <h2 className="mt-4 text-xl font-bold text-white">עיצוב גרפי</h2>

              <p className="mt-1 text-sm text-gray-300">
                הביאו לחיים את הרעיונות שלכם עם עיצוב גרפי מקצועי: מלוגואים
                ייחודיים, עיצוב אתרים מעוררי השראה וחבילות מיתוג עסקי שמבליטות
                את הזהות והערכים של העסק / המותג.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-indigo-500/10 hover:shadow-indigo-500/10"
              to="/services/web"
            >
              <img src={browser} className="w-[150px]" />

              <h2 className="mt-4 text-xl font-bold text-white">
                פיתוח אתרי אינטרנט
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית - מעמודי
                נחיתה דינמיים ואתרי תדמית בוורדפרס, דרך אתרי ריאקט מתקדמים, ועד
                חנויות מקוונות ופתרונות Saas.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
              to="/services/marketing"
            >
              <img src={seo} className="w-[150px]" />

              <h2 className="mt-4 text-xl font-bold text-white">
                שיווק דיגיטלי
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                הגבירו את הנוכחות הדיגיטלית שלכם עם שיווק דיגיטלי יעיל - באמצעות
                SEO לשיפור מיקום במנועי חיפוש, קמפיינים ממוקדים בפייסבוק
                ואינסטגרם, ופרסום ממומן ב-Google Ads להגדלת המרות.
              </p>
            </Link>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-indigo-500/10 hover:shadow-indigo-500/10"
              href="#"
            >
              <img src={server} className="w-[150px]" />

              <h2 className="mt-4 text-xl font-bold text-white">
                אחסון והקצאת שרתים
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                שמרו על אתרים ומידע בבטחה עם שירותי אחסון ושרתים מתקדמים.
                מבטיחים זמינות גבוהה, מהירות ואמינות לכל פרויקט ועסק.
              </p>
            </a>
          </div>
        </div>
      </section>
      <PricingPage />
    </section>
  );
};

export default Services;

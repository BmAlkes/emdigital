import { Link } from "react-router-dom";

const Seo = () => {
  return (
    <section className="text-gray-600 body-font" id="services">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            שיווק
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    SEO
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות השיוק של הסטודיו 24 מאמינים שההצלחה של העסק שלך בעולם
                    הדיגיטלי מתחילה בנראות חזקה במנועי חיפוש. לכן, הצוות שלנו
                    מספק שירותי SEO מקצועיים, תוך שימת דגש על שיפור נראות האתר
                    שלך במנועי חיפוש והגדלת תנועת הגולשים.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    פרסום בפייסבוק ובאינסטגרם
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות השיווק של הסטודיו 24 מתמחים ביצירת קמפיינים ממומנים
                    בפייסבוק ואינסטגרם, מתוך מחויבות להגביר את החשיפה וההשפעה של
                    העסק שלך בעולם הדיגיטלי ואת נוכחותך ברשתות החברתיות.
                  </p>
                </div>
              </div>

              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    ניהול מתקדם של קמפיינים ב-Google Ads
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות השיווק של הסטודיו 24 מתמחים בניהול מתקדם ואפקטיבי של
                    קמפיינים ב-Google Ads, עם מטרה למקסם את חשיפתך ותוצאותך
                    מהשקעה בפרסום בגוגל.
                  </p>
                  <Link to="/services">
                    <button className="bg-indigo-500 text-white w-[97%] rounded-lg py-3 text-lg mt-3">
                      חוזר לעמוד שירותים
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Seo;

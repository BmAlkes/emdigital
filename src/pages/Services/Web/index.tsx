import { Link } from "react-router-dom";

const Web = () => {
  return (
    <section className="text-gray-600 body-font" id="services">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            פיתוח
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    עמוד נחיתה / מיני סייט
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות הפיתוח של הסטודיו 24 מציעים שירותי פיתוח דף נחיתה ומיני
                    סייטים ברמה גבוהה. אנו מבטיחים עיצוב מותאם אישית שמתאים
                    בדיוק לצרכים שלך ופונקציונליות מתקדמת שתעזור למקסם את שיעורי
                    ההמרה. המטרה שלנו היא ליצור דפי נחיתה ומיני סייטים שלא רק
                    נראים טוב אלא גם מביאים תוצאות מעשיות.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    בניית אתר תדמית בוורדפרס
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות הפיתוח של הסטודיו 24 מתמקד בפיתוח אתרי תדמית במערכת
                    וורדפרס, תוך הצעת פתרונות אלגנטיים ומתקדמים. אנו מתאימים את
                    האתרים לצרכים הייחודיים של כל לקוח, מבטיחים חווית משתמש
                    נעימה ומעוצבת בקפידה. המומחיות שלנו בוורדפרס מאפשרת לנו
                    ליצור אתרים גמישים, נגישים וקלים לניהול, תוך שמירה על רמה
                    גבוהה של אבטחת מידע.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    פיתוח אתר חנות / SaaS
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות הפיתוח של הסטודיו 24 מתמחה בפיתוח אתרי חנות ואתרי -SaaS
                    בקצה החדשנות, מציעים פתרונות דיגיטליים מתקדמים, שמותאמים
                    בקפידה לזהות ולצרכים הייחודיים של עסקך. אנו מבינים את
                    החשיבות של חוויית משתמש מעולה ומממשים אותה בכל פרויקט, כדי
                    להבטיח שהאתר שלך לא רק יראה נהדר, אלא גם יפעל בצורה חלקה
                    ויעילה.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    בניית אתר תדמית בריאקט
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות הפיתוח של הסטודיו 24 מתמחים בפיתוח אתרי תדמית בעזרת
                    טכנולוגיית React, מספקת פתרונות אינטראקטיביים ומודרניים עם
                    פונקציונליות מתקדמת לחווית משתמש מעולה.
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

export default Web;

import { Link } from "react-router-dom";

const Graphic = () => {
  return (
    <section className="text-gray-600 body-font" id="services">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            עיצוב גרפי
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    עיצוב לוגו
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות העיצוב הגרפי של הסטודיו 24 מתמחה בעיצוב לוגו מקצועי
                    ויצירתי. אנו מתחייבים להתאמה מושלמת לזהות המותג שלך, תוך
                    שימוש בכלים עדכניים וטכניקות חדשניות ליצירת לוגו שמשדר את
                    המסר הנכון ומתחבר אל הקהל היעד שלך.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    עיצוב אתר
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות העיצוב הגרפי של הסטודיו 24 מספק שירותי עיצוב אתרים
                    מתקדמים, המותאמים במיוחד לצרכים הייחודיים והאישיים של כל
                    לקוח. אנו מתמקדים ביצירת חווית משתמש נוחה ואסתטיקה מרשימה,
                    תוך שילוב טכנולוגיות חדשניות לאופטימיזציה של הביצועים
                    והתוצאה הסופית.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    מיתוג עסקי
                  </h2>
                  <p className="leading-relaxed text-base">
                    צוות העיצוב הגרפי של הסטודיו 24 מתמחה בתהליך מיתוג עסקי
                    יסודי ומקצועי. צוות המומחים שלנו יעבוד איתך צעד אחר צעד כדי
                    לבנות זהות מותג חזקה ובולטת, שתעמוד בחזית השוק התחרותי. אנו
                    נתמקד בהבנת הערכים והיעדים של העסק שלך ונתרגם אותם לזהות
                    חזותית מרשימה שתדבר בעד עצמה.
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

export default Graphic;

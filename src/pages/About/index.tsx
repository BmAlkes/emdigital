import picOne from "../../assets/programing.png";
import react from "../../assets/reactjs-benefits-1024x512-removebg-preview.png";
import nextjs from "../../assets/next.png";
import elementor from "../../assets/elementor-page-builder-removebg-preview.png";
import firebase from "../../assets/firebase.png";
import redux from "../../assets/redux.png";
import zustand from "../../assets/zustand.png";
import css from "../../assets/css.png";
import node from "../../assets/node-removebg-preview.png";
import Steps from "../../components/steps";
import Reccomend from "../../components/footer";
import ScrollUp from "../../components/scrollup";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AboutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className=" bg-[#030B0F] lg:h-screen h-[600px] mt-[96px] hero">
        <div className="flex items-center justify-center h-full">
          <h2 className="text-[#f4f4f4] lg:text-[102px] text-5xl t text-center font-bold [text-shadow:_3px_3px_0_#000]">
            עושים את זה מדהים
          </h2>
        </div>
      </section>
      <section className="bg-[#030B0F] h-full py-6 ">
        <div className="text-[#f4f4f4] container flex flex-col md:flex-row justify-between items-end  md:mt-20 lg:gap-[281px] gap-8 mt-6">
          <div className="">
            <h3 className="lg:text-6xl md:text-4xl text-2xl font-semibold">
              אנחנו פה בשביל לעזור לעסק שלך לצמוח
            </h3>
            <p className="text-justify lg:text-2xl md:text-xl mt-4">
              בסטודיו שלנו, אנו מתחייבים להיות עמכם מהצעד הראשון, מבטיחים שכל
              פרויקט יהיה לא רק מרהיב ומתקדם, אלא גם מסודר ומאורגן להפליא. כל
              פרויקט ב-<span className="text-[#6FCFED]">Differeacting</span>{" "}
              מתחיל באפיון ועיצוב מדויק,
            </p>
          </div>
          <p className="text-base max-w-[573px] text-justify">
            כאשר אנו מתמקדים בכל פרט ופרט כדי להבטיח שהמוצר הסופי יעמוד בציפיות
            הגבוהות שלנו ושלכם. אחרי העיצוב, אנחנו עוברים לשלב הפיתוח, שבו
            מופעלות הטכנולוגיות המתקדמות ביותר כדי להבטיח שאתרכם יהיה לא רק יפה,
            אלא גם חזק ובעל ביצועים גבוהים.
          </p>
        </div>
        <div className="container mt-8">
          <img src={picOne} alt="" />
        </div>
        <div className="w-full   bg-[#6FCFED]  mt-14 my-4  lg:flex gap-5">
          <div className="wrapper">
            <div className="item">
              <img src={react} alt="react logo" />
            </div>
            <div className="item">
              <img src={css} alt="css logo" />
            </div>
            <div className="item">
              <img src={nextjs} alt="nextjs logo" />
            </div>
            <div className="item">
              <img src={elementor} alt="elementor logo" />
            </div>
            <div className="item">
              <img src={firebase} alt="firebase logo" />
            </div>
            <div className="item">
              <img src={zustand} alt="zustand logo" />
            </div>
            <div className="item">
              <img src={redux} alt="redux logo" />
            </div>
            <div className="item">
              <img src={node} alt="node logo" />
            </div>
          </div>
        </div>
      </section>
      <Steps
        text1="בשלב הראשון התהליך מתחיל בהבנת הצרכים והמטרות של העסק. בשיחה ראשונית עם הלקוח, מתבצע איסוף מידע רחב על העסק, הקהל היעד, המתחרים והמטרות העסקיות"
        text2="לאחר מכן, מתקיים שלב של חקר שוק וניתוח נתונים כדי להבין טוב יותר את הסביבה התחרותית והצרכים של הקהל היעד"
        text3=". בהמשך, מעבירים לשלב העיצוב, בו מפתחים את תכנון הממשק והחוויה המשתמש (UI/UX), בחירת פלטת צבעים, עיצוב לוגו וזהות חזותית, וכן עיצוב הדפים השונים של האתר."
        smallText="התהליך שלנו 01"
        step="שלב ראשון"
        key="1"
      />
      <Steps
        text1="בשלב השני, פיתוח, מתחילים בהקמת התשתית הטכנולוגית של האתר. זה כולל את בחירת פלטפורמת האירוח, הגדרת ארכיטקטורת המידע"
        text2="פיתוח הפרונט-אנד והבק-אנד, והתקנת מערכות ניהול תוכן (CMS) שתאפשר ללקוח לעדכן תוכן באופן עצמאי."
        text3="במהלך פיתוח האתר, מתבצעת גם אופטימיזציה למנועי חיפוש (SEO) כדי לשפר את נראות האתר בתוצאות החיפוש האורגניות."
        smallText="התהליך שלנו 02"
        step="שלב שני"
        key="2"
      />
      <Steps
        text1=" בשלב השלישי, בניית תוכנית שיווקית ומעבר לקידום אורגני, מתמקדים בגיבוש אסטרטגיה שיווקית מקיפה שתכלול את כל ערוצי השיווק הדיגיטליים. זה כולל קידום אתרים במנועי חיפוש (SEO), פרסום ממומן בגוגל אדס וברשתות חברתיות, פיתוח תוכן איכותי וייחודי לבלוגים ולדפי נחיתה, ושימוש באמצעים נוספים כמו שיווק באימייל ושיווק דיגיטלי. חשוב למדוד ולנתח את הביצועים של כל פעילות שיווקית ולבצע אופטימיזציה מתמדת כדי להגדיל את ההגעה וההמרות."
        text2="התהליך כולו מותאם אישית לצרכים ולמטרות של כל עסק, ודורש שיתוף פעולה הדוק בין הלקוח לספק השירותים כדי להבטיח שהאתר המתקבל ישקף את ערכי המותג ויסייע בהשגת היעדים העסקיים."
        text3="לסיכום, תהליך בניית אתר לעסקים הוא מעגל מתמשך של פעילויות הכולל אפיון ועיצוב, פיתוח, שיווק ותחזוקה. כל שלב דורש מומחיות, תשומת לב לפרטים, והתאמה לצרכים המשתנים של העסק ושל השוק. ביצוע נכון של כל השלבים יבטיח שהאתר לא רק יעמוד בציפיות, אלא יעלה עליהן, ויסייע בהשגת המטרות העסקיות."
        smallText="התהליך שלנו 03"
        step="שלב שלישי"
        key="3"
      />

      <Reccomend />
      <ScrollUp />
    </>
  );
};

export default AboutPage;

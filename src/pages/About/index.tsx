import picOne from "../../assets/programing.png";
import react from "../../assets/reactjs-benefits-1024x512-removebg-preview.png";
import nextjs from "../../assets/next.png";
import elementor from "../../assets/elementor-page-builder-removebg-preview.png";
import firebase from "../../assets/firebase.png";
import google from "../../assets/google.png";
import Steps from "../../components/steps";
import Reccomend from "../../components/footer";

const AboutPage = () => {
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
              פרויקט ב-<span className="text-[#6FCFED]">Reffereacting</span>{" "}
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
        <div className="w-full bg-[#6FCFED]  mt-14 ">
          <div className="container flex flex-wrap  items-center justify-center  gap-8 h-full lg:min-h-[200px] ">
            <img src={react} alt="" className=" lg:max-w-[280px]  h-[115px]" />

            <img
              src={nextjs}
              alt=""
              className=" lg:max-w-[280px] max-w-[145px] h-[115px] object-cover"
            />

            <img
              src={elementor}
              alt=""
              className=" lg:max-w-[280px] max-w-[145px] h-[115px] object-cover"
            />

            <img
              src={firebase}
              alt=""
              className=" lg:max-w-[280px] max-w-[165px] h-[115px] object-cover"
            />

            <img
              src={google}
              alt=""
              className=" lg:max-w-[280px] max-w-[145px] h-[115px] object-cover"
            />
          </div>
        </div>
      </section>
      <Steps
        text1="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים."
        text2="קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט"
        text3="קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קונסקטורר אדיפיסינג אלית."
        smallText="התהליך שלנו 01"
        step="שלב ראשון"
        key="1"
      />
      <Steps
        text1="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים."
        text2="קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט"
        text3="קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קונסקטורר אדיפיסינג אלית."
        smallText="התהליך שלנו 02"
        step="שלב שני"
        key="1"
      />
      <Steps
        text1="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים."
        text2="קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט"
        text3="קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קונסקטורר אדיפיסינג אלית."
        smallText="התהליך שלנו 03"
        step="שלב שלישי"
        key="1"
      />
      <Steps
        text1="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים."
        text2="קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט"
        text3="קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קונסקטורר אדיפיסינג אלית."
        smallText="התהליך שלנו 04"
        step="שלב רביעי"
        key="1"
      />
      <Reccomend />
    </>
  );
};

export default AboutPage;

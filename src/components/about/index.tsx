import { Link } from "react-router-dom";
import Secimg from "../../assets/svg/pictureSec.svg";
// npm run dev

const About = () => {
  return (
    <>
      <section className=" lg:pt-5 lg:pb-4 lg:h-screen h-full bg-[#030B0F] relative py-16 lg:py-0  ">
        <div className="container h-full mx-auto flex lg:flex-row-reverse flex-col-reverse items-center lg:justify-between justify-center z-10">
          <div className="">
            <img
              src={Secimg}
              alt=""
              className="w-full max-w-[554px] md:w-[330px] lg:w-[554px] "
            />
          </div>
          <div className="text-[#F4F4F4] max-w-[500px] flex flex-col lg:justify-end justify-center items-center lg:items-start">
            <h3 className="text-[#6FCFED] lg:text-2xl md:text-lg text-sm">
              Differeacting
            </h3>
            <h2 className="lg:text-6xl md:text-3xl text-xl font-semibold text-center lg:text-right">
              הבית של האיכות והחדשנות בעיצוב ופיתוח
            </h2>
            <p className="text-base  my-5  text-justify ">
              בסטודיו שלנו, אנו מתחייבים להיות עמכם מהצעד הראשון, מבטיחים שכל
              פרויקט יהיה לא רק מרהיב ומתקדם, אלא גם מסודר ומאורגן להפליא. כל
              פרויקט ב-EM digital מתחיל באפיון ועיצוב מדויק, כאשר אנו מתמקדים
              בכל פרט ופרט כדי להבטיח שהמוצר הסופי יעמוד בציפיות הגבוהות שלנו
              ושלכם. אחרי העיצוב, אנחנו עוברים לשלב הפיתוח, שבו מופעלות
              הטכנולוגיות המתקדמות ביותר כדי להבטיח שאתרכם יהיה לא רק יפה, אלא
              גם חזק ובעל ביצועים גבוהים.
            </p>
            <Link to="/about">
              <button className="bg-gradient-to-r from-[#6FCFED] w-36 to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]   ">
                <span className="flex w-full bg-[#030B0F] text-white rounded-xl py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] items-center justify-center">
                  אודות
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

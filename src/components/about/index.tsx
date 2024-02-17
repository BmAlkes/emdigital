import Secimg from "../../assets/svg/pictureSec.svg";
import vetor from "../../assets/svg/Vector 18.svg";

const About = () => {
  return (
    <>
      <section className=" pt-5 pb-4 lg:h-screen h-full bg-[#030B0F] relative py-6 ">
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
            <button className="btn">אודות</button>
          </div>
        </div>
        {/* <img
          src={vetor}
          alt=""
          className="w-[350px] absolute left-0  top-[0%] overflow-hidden z-0"
        /> */}
      </section>
    </>
  );
};

export default About;

import { Link } from "react-router-dom";
import { PricingCard } from "../PrincingCard";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white px-4 pb-12 pt-5 dark:bg-dark lg:pb-[90px] lg:pt-[20px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-indigo-500">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-black sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center ">
          <div className="mx-4 flex flex-wrap">
            <PricingCard
              type="מסלול ראשון"
              price="₪"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Personal"
            >
              <List>
                <span className="font-semibold text-indigo-500">עיצוב: </span>על
                פי עיצוב קיים
              </List>
              <List>
                <span className="font-semibold text-indigo-500">סוג אתר: </span>
                עמוד נחיתה / מיני סייט
              </List>
              <List>
                <span className="font-semibold text-indigo-500">שיווק: </span>{" "}
                קמפיין בפייסבוק לבחירה: לאיסוף לידים /יצירת קשר / מבצע / מוצר
                חדש
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">תחזוקה: </span>
                Free updates
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">CRM:</span>חיבור
                למערכת לידים שלנו ושיקוף הנתונים ללקוח
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">
                  מעקב ומדידה:
                </span>
                חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta
                buisiness, gtm, רימרקטינג
              </List>
            </PricingCard>
            <PricingCard
              type="מסלול שני"
              price="₪"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Business"
              active
            >
              <List>
                <span className="font-semibold text-indigo-500">עיצוב: </span>
                עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma
              </List>
              <List>
                <span className="font-semibold text-indigo-500">סוג אתר: </span>
                אתר תדמית וורדפרס עד 6-8 עמודים כולל עמוד צור קשר, אודות,
                שירותים, מותאם להכנה לקידום אורגני כולל אזור בלוג פוסטים
              </List>
              <List>
                <span className="font-semibold text-indigo-500">שיווק: </span>
                SEO טכני בלבד!
              </List>
              <List>
                <span className="font-semibold text-indigo-500">תחזוקה: </span>
                אחסון ותחזוקה, ניהול מלא של צד שרת
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">CRM:</span>חיבור
                חיבור למערכת לידים ושיקוף הנתונים ללקוח{" "}
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">
                  מעקב ומדידה:
                </span>
                חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta
                buisiness, gtm, רימרקטינג, סארצ' קונסול
              </List>
            </PricingCard>
            <PricingCard
              type="מסלול שלישי"
              price="₪"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Professional"
            >
              <List>
                <span className="font-semibold text-indigo-500">עיצוב: </span>על
                עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma
              </List>
              <List>
                <span className="font-semibold text-indigo-500">סוג אתר: </span>
                אתר תדמית בריאקט עד 6-8 עמודים כולל עמוד צור קשר, אודות,
                שירותים, מותאם להכנה לקידום אורגני כולל אזור בלוג פוסטים
              </List>
              <List>
                <span className="font-semibold text-indigo-500">שיווק: </span>{" "}
                SEO טכני בלבד!
              </List>
              <List>
                <span className="font-semibold text-indigo-500">תחזוקה: </span>
                אחסון ותחזוקה, ניהול מלא של צד שרת
              </List>
              <List>
                <span className="font-semibold text-indigo-500">CRM:</span>חיבור
                חיבור למערכת לידים ושיקוף הנתונים ללקוח
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">
                  מעקב ומדידה:
                </span>
                חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta
                buisiness, gtm, רימרקטינג, סארצ' קונסול{" "}
              </List>
            </PricingCard>
            <PricingCard
              type="משלול רביעי"
              price="₪"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Professional"
            >
              <List>
                <span className="font-semibold text-indigo-500">עיצוב: </span>על
                עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma{" "}
              </List>
              <List>
                <span className="font-semibold text-indigo-500">סוג אתר: </span>
                אתר מתקדם מותאם לאתרי חנויות גדולים / saas
              </List>
              <List>
                <span className="font-semibold text-indigo-500">שיווק: </span>{" "}
                חבילת שיווק מלאה: SEO מלא! כולל שוטף ( תוכן וקישורים), קמפיין
                ממומן גוגל אדס ברשת המדיה כולל עיצוב באנרים , חבילת שיווק
                בפייסבוק
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">תחזוקה: </span>
                אחסון ותחזוקה, ניהול מלא של צד שרת
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">CRM:</span>חיבור
                חיבור למערכת לידים ושיקוף הנתונים ללקוח
              </List>
              <List>
                {" "}
                <span className="font-semibold text-indigo-500">
                  מעקב ומדידה:
                </span>
                חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta
                buisiness, gtm, רימרקטינג, סארצ' קונסול, מערכת למעקב מיקומים se
                ranking
              </List>
            </PricingCard>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link to="/services">
          <button className="bg-indigo-500 text-white py-2 px-7 mx-auto rounded-lg mt-2 ">
            מידע נוסף
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Pricing;

const List = ({ children }: any) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};

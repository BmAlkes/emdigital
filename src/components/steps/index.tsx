import { ScrollArea } from "../ui/scroll-area";

const Steps = ({
  text1,
  text2,
  text3,
  step,
  smallText,
}: {
  text1: string;
  text2?: string;
  text3?: string;
  step: string;
  smallText: string;
}) => {
  return (
    <section className="bg-[#030B0F] lg:h-screen  h-[700px]">
      <div className="h-full flex flex-col lg:flex-row  lg:justify-between justify-center container items-center">
        <div>
          <span className="text-sm text-[#f4f4f4]">{smallText}</span>
          <p className="text-[#6fcfed] font-bold text-4xl mt-3 mb-7">{step}</p>
          <h2 className="text-[#f4f4f4] text-6xl font-bold">שם השלב</h2>
        </div>
        <div>
          <ScrollArea className="lg:h-[700px] md:h-[500px] h-[400px] max-w-[727px] rounded  color-[##6FCFED] p-2">
            <div className="p-4">
              <p className="text-[#f4f4f4] lg:text-4xl text-2xl text-right">
                {text1}
              </p>
              <br />
              <p className="text-[#f4f4f4] lg:text-4xl text-2xl text-right">
                {text2}
              </p>
              <br />
              <p className="text-[#888888] lg:text-4xl text-2xl text-right">
                {text3}
              </p>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Steps;

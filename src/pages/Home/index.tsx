import Hero from "../../components/hero";
import About1 from "../../components/about";
import Services from "../../components/services";
import Footer from "../../components/footer";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import NewFooter from "../../components/newFooter";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <About1 /> */}
      {/* <Services /> */}
      <Footer />
      <NewFooter />
      <ScrollUp />
      <WhatsApp />
    </>
  );
};

export default Home;

import Hero from "../../components/hero";
import About from "../../components/about";
import Footer from "../../components/footer";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import NewFooter from "../../components/newFooter";
import NewServices from "../../components/newServices";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <NewServices />
      <Footer />
      <NewFooter />
      <ScrollUp />
      <WhatsApp />
    </>
  );
};

export default Home;

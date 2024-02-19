import Hero from "../../components/hero";
import About from "../../components/about";
import Footer from "../../components/footer";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import NewFooter from "../../components/newFooter";
import NewServices from "../../components/newServices";
import Projects from "../../components/projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <NewServices />
      <Projects />
      <Footer />
      <NewFooter />
      <ScrollUp />
      <WhatsApp />
    </>
  );
};

export default Home;

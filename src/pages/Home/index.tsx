import Hero from "../../components/hero";
import About from "../../components/about";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import NewFooter from "../../components/newFooter";
import NewServices from "../../components/newServices";
import Projects from "../../components/projects";
import Reccomend from "../../components/footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <NewServices />
      <Projects />
      <Reccomend />
      <NewFooter />
      <ScrollUp />
      <WhatsApp />
    </>
  );
};

export default Home;

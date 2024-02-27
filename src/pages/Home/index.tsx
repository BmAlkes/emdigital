import Hero from "../../components/hero";
import About from "../../components/about";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import NewServices from "../../components/newServices";
import Projects from "../../components/projects";
import Reccomend from "../../components/footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Hero />
      <About />
      <NewServices />
      <Projects />
      <Reccomend />

      <ScrollUp />
      <WhatsApp />
    </>
  );
};

export default Home;

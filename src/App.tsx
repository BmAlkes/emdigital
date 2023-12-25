import About1 from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import ScrollUp from "./components/scrollup";
import Services from "./components/services";
import WhatsApp from "./components/whatsappscroll";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About1 />
      <Services />
      <Footer />
      <ScrollUp />
      <WhatsApp />
    </>
  );
}

export default App;

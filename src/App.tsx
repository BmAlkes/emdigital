import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout";

import { useTranslation } from "react-i18next";
import NotFound from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";

AOS.init();

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<ComingSoon />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;

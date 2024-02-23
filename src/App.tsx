import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

import { useTranslation } from "react-i18next";
import NotFound from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";

AOS.init();

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/projects" element={<ComingSoon />} />
          <Route path="/services" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

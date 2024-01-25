import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import { useTranslation } from "react-i18next";

AOS.init();

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

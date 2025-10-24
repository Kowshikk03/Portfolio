  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  import Navbar from "./components/Navbar/Navbar";
  import Hero from "./components/Hero/Hero";
  import About from "./components/About/About";
  import Skills from "./components/Skills/Skills";
  import Projects from "./components/Projects/Projects";
  import Certificates from "./components/Certificates/Certificates";
  import Contact from "./components/Contact/Contact";
  import Footer from "./components/Footer/Footer";

  import MoreProjects from "./components/Projects/More-Projects/More-Projects";
  import MoreCertificates from "./components/Certificates/More-Certificates/More-Certificates";
  import CircularText from "./components/CircularText/CircularText";


  const App = () => {
  return (
    <Router>
      <div className="circular-text-wrapper">
        <CircularText text="KOWSHIKK*PORTFOLIO*" spinDuration={20} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/more-projects" element={<MoreProjects />} />
        <Route path="/more-certificates" element={<MoreCertificates />} />
      </Routes>
    </Router>
  );
};

  export default App;

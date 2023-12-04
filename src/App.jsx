import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import ExperiencePg from "./components/experiencepg/ExperiencePg";
import ExperienceSft from "./components/experiencesft/ExperienceSft";
import Projects from "./components/projects/Projects";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <ExperiencePg />
      {/* <ExperienceSft /> */}
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

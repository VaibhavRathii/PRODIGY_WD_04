import React from "react";
import Hero from "../components/Hero/Hero";
import Certificates from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
// import Contributions from "../components/Contributions/Contributions";
function Home() {
  return (
    <>
      <Hero />
      <Certificates />
      <About />
      {/* <Contributions /> */}
      <Contact />      
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;

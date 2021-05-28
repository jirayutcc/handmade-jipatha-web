import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navber from "../components/Navber";
import VideoSection from "../components/VideoSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import {
  homeObjecOne,
  // homeObjecTwo,
  // homeObjecThree,
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navber toggle={toggle} />
      <VideoSection />
      <InfoSection {...homeObjecOne} />
      <Services />
      <ContactSection />
      {/* <InfoSection {...homeObjecTwo} /> */}
      {/* <InfoSection {...homeObjecThree} /> */}
      <Footer />
    </>
  );
};

export default Home;

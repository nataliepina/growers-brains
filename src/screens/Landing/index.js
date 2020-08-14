import React from "react";
import InfoSection from "./InfoSection";
import Subscribe from "./Subscribe";
import Footer from "../../components/common/Footer";
import HeroSection from "./HeroSection";

const Dashboard = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Dashboard;

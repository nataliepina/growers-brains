import React from "react";
import Navbar from '../../components/common/Navbar/Navbar';
import InfoSection from "./InfoSection";
import Subscribe from "./Subscribe";
import Footer from "../../components/common/Footer";
import HeroSection from "./HeroSection";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Dashboard;
import React from 'react';
import InfoSection from './InfoSection';
import Subscribe from './Subscribe';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <InfoSection />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Dashboard;

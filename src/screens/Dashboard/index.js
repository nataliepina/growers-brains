import React from 'react';
import InfoSection from './InfoSection';
import Subscribe from './Subscribe';
import Footer from './Footer';
import Signup from './Signup';

const Dashboard = () => {
  return (
    <>
      <Signup />
      <InfoSection />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Dashboard;

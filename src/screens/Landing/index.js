import React from 'react';
import InfoSection from './InfoSection';
import Subscribe from './Subscribe';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/commonNB/Navbar';

const Dashboard = () => {

  return (
    <React.Fragment>
      <Navbar />
      <InfoSection />
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
}

export default Dashboard;

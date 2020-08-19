import React from 'react'
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer';
import UserInfo from "./UserInfo"

const Profile = () => {
  return (
    <>
      <Navbar/>
      <UserInfo/>
      <Footer/>
    </>
  );
}

export default Profile;
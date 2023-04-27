import React from "react";
import {
  Header,
  Categories,
  UseSection,
  Cta,
  Footer,
  UserAds,
} from "../../components";
// import { Button } from "../../components";
// import { signOutUser } from "../../Config/firebase";

const Dashboard = () => {
  // const logOut = () => {
  //   signOutUser();
  //   setScreen("signin");
  // };

  return (
    <div>
      <Header />
      <Categories />
      <UserAds />
      <UseSection />
      <Cta />
      <Footer />
    </div>
  );
};

export default Dashboard;

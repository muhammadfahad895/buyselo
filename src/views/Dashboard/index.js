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

const Dashboard = ({ setScreen, user }) => {
  // const logOut = () => {
  //   signOutUser();
  //   setScreen("signin");
  // };

  return (
    <div>
      <Header setScreen={setScreen} user={user} />
      <Categories />
      <UserAds />
      <UseSection />
      <Cta />
      <Footer />
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Categories, UserAds } from "../../components";
// import { Button } from "../../components";
// import { signOutUser } from "../../Config/firebase";

import { useEffect } from "react";
import { auth } from "../../Config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // const logOut = () => {
  //   signOutUser();
  //   setScreen("signin");
  // };

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        // setUser(user);
      } else {
        console.log("no user found");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Categories />
      <UserAds />
    </div>
  );
};

export default Dashboard;

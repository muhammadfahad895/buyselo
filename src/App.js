import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard, Signin, Signup, Login, AddPost } from "./views";
import { auth } from "./Config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [screen, setScreen] = useState("dashboard");

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // setScreen("addpost");
        setScreen("dashboard");
      } else {
        console.log("no user found");
        setScreen("dashboard");
      }
    });
  }, []);

  return (
    <div className="container">
      {screen === "login" && <Login setScreen={setScreen} />}
      {screen === "signup" && <Signup setScreen={setScreen} />}
      {screen === "signin" && <Signin setScreen={setScreen} />}
      {screen === "dashboard" && (
        <Dashboard setScreen={setScreen} user={user} />
      )}
      {screen === "addpost" && <AddPost setScreen={setScreen} />}
    </div>
  );
}

export default App;

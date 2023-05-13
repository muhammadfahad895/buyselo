import "./App.css";

import Routing from "./Config/Routing";

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("dashboard");
  //     } else {
  //       console.log("no user found");
  //       navigate("login");
  //     }
  //   });
  // }, []);

  return (
    // <div className="container">
    //   {screen === "login" && <Login setScreen={setScreen} />}
    //   {screen === "signup" && <Signup setScreen={setScreen} />}
    //   {screen === "signin" && <Signin setScreen={setScreen} />}
    //   {screen === "dashboard" && (
    //     <Dashboard setScreen={setScreen} user={user} />
    //   )}
    //   {screen === "addpost" && <AddPost setScreen={setScreen} />}
    // </div>
    <Routing />
  );
}

export default App;

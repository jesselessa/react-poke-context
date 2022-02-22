import React, { createContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";

// Context : user connection status
export const UserContext = createContext({ isLogged: false });

function App() {
  // State de App.js :
  const [isLogged, setLogged] = useState(false);

  // Function wich changes the context according to the user's connection status :
  const setAuth = () => {
    if (isLogged === false) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  // Context and function saved in a variable :
  const value = {
    isLogged: isLogged,
    setAuth: setAuth,
  };

  return (
    <UserContext.Provider value={value}>
      {/* By setting a value attribute equal to the variable named value in UserContext,the latter will be able to be used by other components */}
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;

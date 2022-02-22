import React, { createContext, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";

// Context : user connection status
export const UserContext = createContext({ isLogged: false });

// Context : Pokemon's history
export const PokemonContext = createContext({
  PokemonsHistory: [],
});

function App() {
  // State from App.js :
  const [isLogged, setLogged] = useState(false);
  const [PokemonsHistory, setPokemonsHistory] = useState([]);

  // Function which changes the context according to the user's connection status :
  const setAuth = () => {
    if (isLogged === false) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  // Function which clears Pokemon's history when the user logs out
  const cleanArray = () => {
    console.log("efface l'historique Pokemon");
    setPokemonsHistory([]);
  };

  // Context and function saved in a variable :
  const value = {
    isLogged: isLogged,
    setAuth: setAuth,
    cleanArray: cleanArray,
    PokemonsHistory: PokemonsHistory,
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

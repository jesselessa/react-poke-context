// React
import { useContext } from "react";

// Libraries
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Contexts
import { UserContext } from "../App";
import { PokemonContext } from "../App";

export default function Login() {
  // Appel du context depuis App.js
  const userState = useContext(UserContext);
  const pokemonState = useContext(PokemonContext);

  // useHistory from react-router-dom
  const history = useHistory();

  // Form syntax by react-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // If the form is valid, the user will be directly sent to the homepage
    history.push("/"); // Calling of function setAuth from App.js
    userState.setAuth();
    // To empty array storage
    userState.cleanArray();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
          name="username"
          maxLength={15}
          placeholder="Username"
        />
        {errors.username && <span>Enter a valid username</span>}
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          name="password"
          minLength={6}
          placeholder="Password"
        />
        {errors.password && <span>Enter a valid password</span>}
        {/* <input type="submit" value="SE CONNECTER" /> */}
        {/*Display login/logout button according to user's connection status */}
        {userState.isLogged ? (
          <button type="submit" onClick={onSubmit}>
            Logout
          </button>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
    </div>
  );
}

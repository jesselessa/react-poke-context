// React
import { useContext } from "react";

// Libraries
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Contexts
import { UserContext } from "../App";
import { PokemonContext } from "../App";

// Login functional component
export default function Login() {
  // Context from App.js
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
    // If user's form is valid, he will be directly sent to homepage
    history.push("/");
    // setAuth function calling from App.js
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

        {/*Display login/logout button according to user's connection status */}
        {userState.isLogged ? (
          <button type="submit">Logout</button>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
    </div>
  );
}

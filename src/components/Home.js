// Import from React
import { useState, useEffect, useContext } from "react";

// Import from App.js :
import { UserContext } from "../App";
import { PokemonContext } from "../App";

// Independent function randomNumber
function randomNumber() {
  return Math.floor(Math.random() * 875) + 1;
}

export default function Home() {
  // Contexts
  const userState = useContext(UserContext);
  const pokemonState = useContext(PokemonContext);

  // Hooks - States
  const [pokemon, setPokemon] = useState({});
  const [randomPokemon, setRandomPokemon] = useState(1);
  const [loading, setLoading] = useState(true);

  // Hooks - componentDidMount/componentDidUpdate

  useEffect(() => {
    // Checking if Pokemon is not already saved in history
    console.log("useEffect");
    if (
      pokemonState.PokemonsHistory.find(
        (pokemon) => pokemon.id === randomPokemon
      ) !== undefined
    ) {
      // console.log("if");
      setPokemon(
        pokemonState.PokemonsHistory.find(
          (pokemon) => pokemon.id === randomPokemon
        )
      );
      setLoading(false);
    } else {
      console.log("else");
      // If not saved, request to API
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((res) => {
          setPokemon(res);
          setLoading(false);
          pokemonState.PokemonsHistory.push(res);
          console.log("Nombre total de Pokemon", pokemonState.PokemonsHistory);
        })
        .catch((err) => console.log(err));
    }
  }, [randomPokemon]);

  // Get a random Pokemon
  const handleClick = () => {
    setRandomPokemon(randomNumber());
  };

  return (
    <>
      {userState.isLogged ? (
        <>
          <button type="submit" onClick={handleClick}>
            GET A POKEMON
          </button>

          {loading ? (
            <p>Content is loading...</p>
          ) : (
            <div className="infos">
              <p>Name : {pokemon.name}</p>
              <p>Height : {pokemon.height}</p>
              <p>Weight : {pokemon.weight}</p>
              {/* Ckeck later to display all different types */}
              <p>Type(s) : {pokemon.types[0]?.type?.name}</p>
            </div>
          )}
        </>
      ) : (
        <p>You need to be logged in</p>
      )}
    </>
  );
}

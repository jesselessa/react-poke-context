import { useState, useEffect } from "react";

function randomNumber() {
  return Math.floor(Math.random() * 875) + 1;
}

export default function Home() {
  // Hooks - States
  const [pokemon, setPokemon] = useState({});
  const [randomPokemon, setRandomPokemon] = useState(1);
  const [loading, setLoading] = useState(true);

  // Hooks - componentDidMount/componentDidUpdate
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [randomPokemon]);

  // Get a random Pokemon
  const handleClick = () => {
    setRandomPokemon(randomNumber());
  };

  return (
    <>
      {loading ? (
        <p>Content is loading...</p>
      ) : (
        <>
          <button type="submit" onClick={handleClick}>
            GET A POKEMON
          </button>
          <div className="infos">
            <p>Id : {randomPokemon}</p>
            <p>Name : {pokemon.name}</p>
            <p>Height : {pokemon.height}</p>
            <p>Weight : {pokemon.weight}</p>
            {/* Ckeck later to display all different types */}
            <p>Type : {pokemon.types[0].type.name}</p>
          </div>
        </>
      )}
    </>
  );
}

import { useState, useEffect } from "react";

export default function Home() {
  // Hooks - States
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  // Hooks - componentDidMount/componentDidUpdate
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [number]);

  // Get a random number
  function randomNumber() {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <>
      {loading ? (
        <p>Content is loading...</p>
      ) : (
        <>
          <button type="submit" onClick={randomNumber}>
            GET A POKEMON
          </button>
          <div className="infos">
            <p>Name : {pokemon.name}</p>
            <p>Height :{pokemon.height}</p>
            <p>Weight : {pokemon.weight}</p>
            <p>Type : {pokemon.types[0].type.name}</p>
          </div>
        </>
      )}
    </>
  );
}

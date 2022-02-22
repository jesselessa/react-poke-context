import { useState, useEffect } from "react";

export default function Home() {
  // Hooks
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        console.log(pokemon);
      })
      .catch((err) => console.log(err));
  }, [number]);

  const getRandomNumber = () => {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <>
      <button type="submit" onClick={getRandomNumber}>
        GET A POKEMON
      </button>
      <div>
        <p>Name : {pokemon.name}</p>
        <p>Height :{pokemon.height}</p>
        <p>Weight : {pokemon.weight}</p>
        <p>Type : {pokemon.types[0].type.name}</p>
      </div>
    </>
  );
}

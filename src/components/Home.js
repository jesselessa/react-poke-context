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

  return <div></div>;
}

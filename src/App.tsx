import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import { Pokemons } from "./common.type";

function App() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.results);
      });
  }, []);

  return (
    <main className="max-w-screen min-h-screen  bg-gradient-to-b from-red-600 to-pink-400 flex flex-col gap-20 p-10">
      <header className=" flex justify-center m-2">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="pokeapi"
          className="flex justify-center"
        />
      </header>

      <section className="grid grid-cols-3 gap-5 md:grid-cols-5">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.url}
              name={pokemon.name}
              url={pokemon.url}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;

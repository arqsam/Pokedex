import { useEffect, useState } from "react";
import { Pokemon } from "../common.type";

interface Props {
  name: string;
  url: string;
}

export default function PokemonCard(props: Props) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((response) => {
        setPokemon(response);
      });
  }, [props.url]);

  return (
    <article className="bg-white/10 bg-opacity-30 backdrop-blur-3xl shadow-lg p-5 flex flex-col justify-center items-center rounded-full min-w-min hover:-translate-y-1 hover:scale-110">
      <img src={pokemon?.sprites?.front_default} alt={props.name} />
      <h2 className="text-white font-display font-bold text-sm uppercase  md:text-ellipsis tracking-[2px] hover:text-sky-900">
        {props.name}
      </h2>
    </article>
  );
}

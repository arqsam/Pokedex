export interface Pokemons {
  name: string;
  url: string;
}

export interface Pokemon {
  sprites: {
    front_default: string;
  };
  /* types?: PokemonType[]; */
}

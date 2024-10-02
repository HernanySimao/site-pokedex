// Interface para a estrutura básica de um Pokémon
export interface Pokemon {
    id: number;
    name: string;
    stats: Array<Stat>;
    types: Array<Type>;
  }
  
  // Interface para os stats do Pokémon
  export interface Stat {
    base_stat: number;
    stat: {
      name: string;
    };
  }
  
  // Interface para os tipos do Pokémon (ex: fogo, água, etc.)
  export interface Type {
    type: {
      name: string;
    };
  }
  
  // Interface para a cadeia de evolução do Pokémon
  export interface EvolutionChain {
    species: {
      name: string;
      url: string;
    };
    evolves_to: EvolutionChain[];
  }
  

  
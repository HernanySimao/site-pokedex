export interface PokemonItem {
    name: string;
    url: string;
  }
  
  export interface SavedItem extends PokemonItem {
    id: string;   
  }
  
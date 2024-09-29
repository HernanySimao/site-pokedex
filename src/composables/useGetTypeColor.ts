import { ref } from 'vue';

type TypeColors = {
  [key: string]: string;
};

export function useGetTypeColor() {
  const typeColors = ref<TypeColors>({
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040B0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#F0B6B6'
  });

  const getTypeColor = (typeName: string): string => {
    return typeColors.value[typeName] || '#FFFFFF';
  };

  return {
    getTypeColor
  };
}

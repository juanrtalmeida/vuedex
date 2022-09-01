type coloursType = {
  [key: string]: { background: string; foreground: string }
}

export const colours: coloursType = {
  normal: {
    background: '#d4cdb9',
    foreground: '#afa485'
  },
  fire: {
    background: '#f1b265',
    foreground: '#e7692e'
  },
  water: { background: '#74ccf4', foreground: '#398fea' },
  electric: { background: '#fceb6f', foreground: '#f3c033' },
  grass: { background: '#a6e170', foreground: '#52b542' },
  ice: {
    background: '#69d4e7',
    foreground: '#b3fbf9'
  },
  fighting: { background: '#b66358', foreground: '#7f342f' },
  poison: { background: '#cb84cd', foreground: '#87429e' },
  ground: { background: '#d6c388', foreground: '#b7904b' },
  flying: { background: '#94b7f4', foreground: '#7aa0f2' },
  psychic: { background: '#f6a8b9', foreground: '#f25384' },
  bug: { background: '#a7b635', foreground: '#829a2a' },
  rock: { background: '#bba181', foreground: '#926746' },
  ghost: { background: '#a78acb', foreground: '#65549d' },
  dragon: { background: '#7a85e7', foreground: '#3c3bbb' },
  dark: { background: '#746361', foreground: '#b66358' },
  steel: { background: '#aca9be', foreground: '#928faa' },
  fairy: { background: '#fbc7f4', foreground: '#f88ae9' }
}

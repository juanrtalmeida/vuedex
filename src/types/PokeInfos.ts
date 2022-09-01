export type pokeInfo = {
  abilities: []
  base_experience: number
  forms: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: []
  name: string
  order: number
  past_types: []
  species: { background: ''; foreground: '' }
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    back_shiny_female: string
    other: {
      dream_world: { front_default: string; front_female: string }
      home: {
        front_default: string
        front_female: string
        front_shiny: string
        front_shiny_female: string
      }
      'official-artwork': { front_default: string }
    }
  }
  stats: []
  types: [
    { slot: number; type: { name: string; url: string } },
    { slot: number; type: { name: string; url: string } }
  ]
  weight: number
}

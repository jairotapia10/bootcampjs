
const pokemons = [
  {
    Pokemon: "pikachu",
    tipo: "electricidad"
  },
  {
    Pokemon: "escuero",
    tipo: "rayo"
  },
  {
    Pokemon:"charmander",
    tipo: "hola"
  },
  {
    Pokemon: "charizard",
    tipo: "fuego"
  }
]

function pokefuego(pokemons){
 for (const pokemon of pokemons) {
  if (pokemon.tipo=="fuego") {
    console.log(pokemon.Pokemon)
  }
 }
    } 

pokefuego(pokemons)
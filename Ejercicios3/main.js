//ejercicio 5

/* const pokemons=["pikachu,","escuero","charizard"];

console.log(pokemons[0],pokemons[1],pokemons[2]);

for (let i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];
    console.log(element);
}
*/

//ejercicio 6

   const pokemons=[
    {
        Nombre:"pikachu",
        tipoDePokemon:"electricidad",
    }
    ,
    {
        Nombre:"escuero",
        tipoDePokemon:"agua",
    }
    ,
    {
        Nombre:"charmander",
        tipoDePokemon:"fuego",
    }

   ]

   
for (let i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];

    if (element.tipoDePokemon==="fuego")                                               {
    console.log("¡Es un pokemon de fuego!")
}
}
    
/*if (pokemons[0].tipoDePokemon=="fuego") {
    console.log("Es un pokemon de fuego")
} 
if (pokemons[1].tipoDePokemon=="fuego") {
    console.log("Es un pokemon de fuego")
}  
if (pokemons[2].tipoDePokemon=="fuego") {
    console.log("Es un pokemon de fuego")
} else {
    console.log("Ninguno es de fuego")
}
*/


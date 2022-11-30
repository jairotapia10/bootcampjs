const persona = [
  {
   id: 1, Nombre: "Jairo", Direccion: "Alpes",Familia: "Tapia",
  },
  {
    id: 2,Nombre: "Juan",   Direccion: "Alpes", Familia: "Lugo",
  },
  {
    id: 3, Nombre: "Brithanny", Direccion: "turbana", Familia: "Lugo",
  },
  {
    id: 4, Nombre: "Mario", Direccion: "troncal", Familia: "LLorindel",
  },
  {
    id: 5, Nombre: "Pedro", Direccion: "anita", Familia: "Lugo",
  },
  {
    id: 6, Nombre: "Julian", Direccion: "allondra", Familia: "Tapia",
 },
];

/* let nomFamilia = []
for (const iterator of persona) {
   if (iterator.Familia ==="Lugo") {
    nomFamilia.push(iterator)
   }
 
}
console.log(nomFamilia)
*/

/*const familialugo = persona.filter(function (personas){
  return personas.Familia === "Lugo" 
  })  

  console.log(familialugo)
  */

  const familialugo = persona.filter((personas) => personas.Familia === "Lugo")  
  
    console.log(familialugo)
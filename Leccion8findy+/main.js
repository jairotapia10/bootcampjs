const persona = [
  {
   id: 1, Nombre: "Jairo", Direccion: "Alpes",Familia: "Tapia", Edad : 24
  },
  {
    id: 2,Nombre: "Juan",   Direccion: "Alpes", Familia: "Lugo", Edad :13
  },
  {
    id: 3, Nombre: "Brithanny", Direccion: "turbana", Familia: "Lugo", Edad : 78
  },
  {
    id: 4, Nombre: "Sebastian", Direccion: "troncal", Familia: "LLorindel", Edad : 45
  },
  {
    id: 5, Nombre: "Pedro", Direccion: "anita", Familia: "Lugo", Edad : 34
  },
  {
    id: 6, Nombre: "Julian", Direccion: "allondra", Familia: "Tapia", Edad : 26
 },
];

/* const amigos = [
  {
   id: 1, Nombre: "Jose", Direccion: "Alpes",Familia: "Tapia",
  },
  {
    id: 2,Nombre: "Anibal",   Direccion: "Alpes", Familia: "Lugo",
  },
  {
    id: 3, Nombre: "Piter", Direccion: "turbana", Familia: "Lugo",
  },
  {
    id: 4, Nombre: "Ana", Direccion: "troncal", Familia: "LLorindel",
  },
  {
    id: 5, Nombre: "Lety", Direccion: "anita", Familia: "Lugo",
  },
  {
    id: 6, Nombre: "Laloxx", Direccion: "allondra", Familia: "Tapia",
 },
];
 */
/* const funmap =(({Nombre, Direccion})=> ({Nombre, Direccion}) )

const funmaphola = personas.map(funmap)


console.log(funmaphola)
  */


const mayorEdad = ((acumulador, personas) => {
  if (acumulador < personas.Edad) {
    return  acumulador
   } else {
      return personas.Edad
    
   }})

   const mayor = persona.reduce(mayorEdad)

   console.log(mayor)



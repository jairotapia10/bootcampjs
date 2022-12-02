/* const palabras = ["As", "B", "a", "c", "armando"];

const palabrascona = (palabras) => palabras.filter((palabra) => 
  palabra.toLowerCase() === "a")
  
console.log(palabrascona(palabras));
 */

const palabras = ["Armando", "Brithanny", "juanperdo", "conscha", "arbolito"];

function filtrasporletra (palabra, letra){
  return palabra.filter((palabra) => palabra[0].toLowerCase() === letra.toLowerCase())
}

console.log(filtrasporletra(palabras, "b"))

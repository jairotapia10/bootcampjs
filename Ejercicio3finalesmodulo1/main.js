/* const esPalindromo = (string) => {
  const stringSinEspacios = string.split(' ').join('');
  const stringRevere = stringSinEspacios.split('').reverse().join('');
  return stringSinEspacios === stringRevere;
};

console.log(esPalindromo('anita lava la tina'));
console.log(esPalindromo('anita lava la tinaa'));
 */

const espalindomo = (palabra)=>{
  const sinespacios = palabra.split(" ").join("")
  const strinenreversa = sinespacios.split("").reverse().join("")
  return strinenreversa
}

console.log(espalindomo("hola que tal todo bien"))
























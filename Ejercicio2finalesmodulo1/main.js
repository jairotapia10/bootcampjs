//const pin = prompt("Ingrese su pin")

const pin = "1234"
let adivinarpin =prompt("Adivine el pin")


let contador = 0

while (contador <3 ) {

  if (adivinarpin == pin) {
    alert("adivinaste felicidades")
    break
  }else{
    alert("Sigue intentando")
    contador++
    adivinarpin = prompt(`le quedan: ${4 - contador}  Intentos`)
  }
}
 
c/* onst pinCorrecto = '1234';
let pin = prompt('Introduce el PIN de 4 números:');
let intentos = 0;

while (intentos < 3) {
  if (pin === pinCorrecto) {
    console.log('¡Eso fue correcto!');
    break;
  } else {
    console.log('Lo siento, eso estaba mal.');
    intentos++;
    pin = prompt(`Te quedan ${4 - intentos} intentos`);
    45;
  }
}
 */
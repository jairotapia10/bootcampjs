

const users = [
  {
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 27,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
];
const arreglo =[1,2,4,5]
//Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.

 //Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.

// function vivir (users){
 // return users
 //.filter((user) => user.age < 25 && user.city==="Madrid")
 //.map((user) => user.name)
//}

//console.log(vivir(users)) 


//primera persona que le guste programar
/* function vivir (users){
  return users.find((user) => user.hobbies.includes("programar"))
}
console.log(vivir(users))
 */

// suma edad usuarios
/* function sumaedad(user){
  return user.reduce((acc,pers) => acc + pers.age, 0)
}

console.log(sumaedad(users)) */

/* Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. La estructura del array debe ser:
function cityAndHobby(user){
  return user
  .map((user) => { 
    return{
    city: user.city,
    hobby: user.hobbies[0]
  } 

  
})}

console.log(cityAndHobby(users)) */
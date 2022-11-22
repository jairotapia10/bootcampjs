
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 19 },
  
    { nombre: 'Pedro', edad: 16 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

  function mayoresdeedad(persona){
    const vectorpersonas= [];
    for (let i = 0; i < personas.length; i++) {
        const element = personas[i];
        if (element.edad >=18) {
            vectorpersonas.push(element.nombre)
        }
        
    }
    return vectorpersonas
  }

  console.log(mayoresdeedad(personas))

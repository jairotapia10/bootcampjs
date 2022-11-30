const persona = {
    Nombre:"Jairo",
    Direccion:"Alpes",
    Numero:"3017790424"
}

for (let i = 0; i < Object.keys(persona).length; i++) {
    const element = Object.keys(persona)[i];
    console.log(persona[element])
}

    //in para los objetos
    // of para arrays
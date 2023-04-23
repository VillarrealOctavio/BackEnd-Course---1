//--CLASE 05 PATO--

/*--PROYECTO DE NODE--
let randonNumber;
let object = {};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let iterador = (min, max) => {
    for(let i = 1;i<=10000;i++){
        randonNumber = getRandomArbitrary(min, max);
        array.push(randonNumber);
    }
};

iterador(1,20);
console.log(object);
*/

/* Crear un array vacío para almacenar los números aleatorios
let numerosAleatorios = [];

// Generar 10000 números aleatorios en un rango de 1 a 20 y almacenarlos en el array
for (let i = 0; i < 10000; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 20) + 1);
}

// Crear un objeto vacío para almacenar las ocurrencias de cada número
let ocurrencias = {};

// Contar la cantidad de ocurrencias de cada número y almacenarlas en el objeto
for (let i = 0; i < numerosAleatorios.length; i++) {
  let numero = numerosAleatorios[i];
  if (ocurrencias[numero]) {
    ocurrencias[numero]++;
  } else {
    ocurrencias[numero] = 1;
  }
}

// Mostrar los resultados por consola
console.log(ocurrencias);
*/
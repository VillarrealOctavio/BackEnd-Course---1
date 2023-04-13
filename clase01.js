/*const number = 1;
number = 2;


const saludo = (nombre) =>{
    console.log(`Hola ${nombre}. ¿Cómo estas?`)
}

//Ejemplo de checkeo de lista
listilla = [1,2,3,4,5,6]
 function checkList(list, object){
    list.forEach(element => {
    });
 }*/

/*Ejemplo de Función
let listaLlena = [1,2,3,4,5,6,7,8,9,10];
let listaVacia = [];
const mostrarLista = (array) =>{
    if (array){
        console.log("La lista está vacía. So sorry")
    } else{
        array.forEach(item => {
            console.log(item);
        })
    }
    console.log(`La lista tiene ${array.lenght} elementos` )
};

mostrarLista(listaLlena);
mostrarLista(listaVacia);
*/

/*Crear un Contador
class Contador {
    static contadorGlobal = 0;
    constructor(name){
        this.responsable = name;
        this.contadorIndividual = 0;
    };
    counting(){
        this.contadorIndividual += 1;
        Contador.contadorGlobal += 1;
    };
    getResponsable(){
        return this.responsable;
    };
    getCuentaIndividual(){
        return this.contadorIndividual;
    };
    getCuentaGrupal(){
        return Contador.contadorGlobal;
    };
}

const nombre1 = new Contador(`Octavio`);
const nombre2 = new Contador(`Javier`);

console.log(nombre1.getCuentaIndividual());
console.log(nombre1.getCuentaGrupal());
console.log(nombre2.getCuentaIndividual());
console.log(nombre2.getCuentaGrupal());
*/





//EJEMPLOS DEL PROFESOR PATO

/*--CHECKLIST--
const myList = [1, 2, 3];

/**
 * Defino checkList usando operaciones entre booleanos
 * @param {Array} list Lista
 * @param {any} objet Elemento a buscar en la lista
 * @returns {Boolean} true si la encuentra
 */
function checkList(list, objet) {
	// Defino mi variable found en falso para poderla operar
	let found = false;
	// Recorro todos los elementos de la lista
	list.forEach((elem) => {
		// Por cada elemento redefino found por:
		// el valor actual o (or ||) [si el elemento actual es el objeto que busco]
		found = found || elem === objet;
	});
	// Retorno el resultado final
	return found;
}

console.log(checkList(myList, 2));
console.log(checkList(myList, 9));
console.log(checkList([8, 12, 3123, 1], 8));

/**
 * Defino checkListWhitIf usando un if
 * @param {Array} list Lista
 * @param {any} objet Elemento a buscar en la lista
 * @returns {Boolean} true si la encuentra
 */
function checkListWhitIf(list, objet) {
	// Defino que no encontre el elemento antes de buscarlo
	let found = false;
	// Recorro toda la lista
	list.forEach((elem) => {
		// Por cada elemento pregunto si NO lo econtre (!found)
		// es decir que pregunto si found es falso
		if (!found) {
			// Si no lo encontre entonces me guardo si el actual es (puede ser true o false)
			found = elem === objet;
		}
		// En el caso de que ya lo encontre no voy a chequear el actual por lo cual quedara en true
	});
	// Retorno el valor final
	return found;
}


//--CLASE CONTADOR--
class Contador {
	// Creo la Variable Estatica contadorGrupal
	// para contado
	static contadorGrupal = 0;

	/**
	 *
	 * @param {String} name Nombre del responsable del contador
	 */
	constructor(name) {
		// Cada instancia sabe el nombre de su responsable
		this.responsable = name;
		// Cada instancia tiene un contador individual que inicia en 0
		this.contadorIndividual = 0;
	}

	// Defino el Metodo contar
	contar() {
		// Incremento en 1 el contador individual
		this.contadorIndividual += 1;
		// Incremento en 1 el contador grupal
		Contador.contadorGrupal += 1;
	}

	// Defino el Metodo getResponsable
	getResponsable() {
		return this.responsable;
	}

	// Defino el Metodo getCuentaIndividual
	getCuentaIndividual() {
		return this.contadorIndividual;
	}

	// Defino el Metodo getCuentaGlobal
	getCuentaGlobal() {
		return Contador.contadorGrupal;
	}
}

// Creo una instancia de Contador en la constante pepe
// Dicha instancia toma como nombre Pepe
const pepe = new Contador('Pepe');

// Creo una instancia de Contador en la constante jose
// Dicha instancia toma como nombre Maria
const jose = new Contador('Maria');

// Imprimo los estados internos y globales de pepe y jose
// a modo de chequeo
console.log(pepe.getCuentaGlobal());
console.log(pepe.getCuentaIndividual());
console.log(jose.getCuentaGlobal());
console.log(jose.getCuentaIndividual());

// Pepe cuenta 2 veces
pepe.contar();
pepe.contar();

// Imprimo estado global e individual de pepe
console.log(pepe.getCuentaGlobal()); // 2
console.log(pepe.getCuentaIndividual()); // 2

// Maria cuenta 4 veces
jose.contar();
jose.contar();
jose.contar();
jose.contar();

// Imprimo estado global e individual de jose
console.log(jose.getCuentaGlobal()); // 6
console.log(jose.getCuentaIndividual()); // 4

//--CLASE PERSONA
class Persona {
	// Defino una variable ESTATICA que le pertenece a PERSONA
	static especie = 'Humano';

	/**
	 * Constructor
	 * @param {String} nombre Nombre de la Persona
	 */
	constructor(nombre) {
		// Cada instancia conoce su nombre
		this.nombre = nombre;
	}

	sayName() {
		// Cada instancia puede decir su nombre
		console.log(this.nombre);
	}

	sayEspecie() {
		// Cada instancia puede decir la Especie de Persona
		// Aunque no sea un estado interno de la instancia
		console.log(Persona.especie);
	}
}

// Creo una instancia de Persona en la constante pepe
// Dicha instancia toma como nombre Pepe
const nombre3 = new Persona('Pepe');

// Creo una instancia de Persona en la constante jose
// Dicha instancia toma como nombre Maria
const nombre4 = new Persona('Maria');

nombre3.sayName();
nombre3.sayEspecie();
nombre4.sayName();
nombre4.sayEspecie();


//--CLOUSURE--
const add = (function () {
	// Defino la variable "privada" counter
	// Usamos var para ejemplificar antiguas practicas
	var counter = 0;

	//Esta funcion retorna otra funcion
	return function () {
		// Esta funcion incrementa en 1 el valor de counter
		counter += 1;
		// Y retorna el valor de counter
		return counter;
	};
})();

// ATENCION: Solo usamos console.log para poder imprimir en pantalla el valor retornado
console.log(add());
console.log(add());
console.log(add());

// ¿Que paso?

// Al mantener la funcion add siempre viva su variable interna se mantiene viva mas alla de que la funcion que retorna se ejecute y termine


//--FUNCIONES--
// -------------------------------------------------
// --                Funcion Comun                --
// -------------------------------------------------

/** Defino la funcion saludaPorTerminal
 * @param {string} nombre
 * tiene un parametro que es un string que representa el nombre de la persona a la que se saluda
 */
function saludaPorTerminal(nombre) {
	// Imprimo por terminal "Hola " + el nombre de la persona
	console.log('Hola ' + nombre);
}

saludaPorTerminal('Mariano');

// -------------------------------------------------
// --               Funcion Flecha                --
// -------------------------------------------------

/** Defino una funcion en la constante saludaPorTerminal2
 * @param {string} nombre
 * tiene un parametro que es un string que representa el nombre de la persona a la que se saluda
 */
const saludaPorTerminal2 = (nombre) => console.log('Hola ' + nombre); // en una linea

saludaPorTerminal2('Valentino');


//--MOSTRAR LISTA--
/* 
* @param {Array} list Lista a mostrar
* @returns {String} Cantidad de elementos
*/
function mostrarLista(list) {
    // Defino como constante la cantidad de elemntos de la lista enviada por paramentro
    const cantElem = list.length;
 
    // Pregunto "Si (cantidad de elementos)" dado que en JavaScript el 0 se toma como
    // falso por lo cual si tiene 1 o mas lo tomara como true
    if (cantElem) {
        // Si tiene 1 elemento o mas
        // Recorro los elementos de la lista
        list.forEach((element) => {
            // Por cada elemento  lo muestro en la terminal
            console.log(element);
        });
    } else {
        // Si no tiene elementos informo que esta vacia
        console.log('Lista vacia');
    }
 
    // Retorno la cantidad de elementos
    return `Cantidad de Elementos: ${cantElem}`;
 }
 
 console.log(mostrarLista([]));
 console.log(mostrarLista([1, 'pepe']));
 console.log(mostrarLista([1, 'pepe', null, undefined]));


 //--MUTABILIDAD--
// Defino una constante con una Lista vacia

const myList = [];

// Muestro la lista
console.log(myList);

// Intento modificar la variable de la lista y obtengo error
// Descomentar linea para poder ver error
//myList = [1, 10, 5]

// Inserto  3 elemento a la lista
myList.push(1);
myList.push(10);
myList.push(5);

// Si bien la lista es la misma, muto y ahora tiene 3 elementos
console.log(myList);

// Si bien no podemos cambiar la lista si podemos cambiar un elemento de ella
// ATENCION: El primer elemento es el indice 0, el segundo es el indice 1, etc...
myList[0] = 12378712;

// Si bien la lista es la misma, muto y ahora el 1 elemento es diferente
console.log(myList);

//--SCOPE--
// -------------------------------------------------
// --               Scope correcto                --
// -------------------------------------------------

function scopeCorrecto() {
	// Inicia scope de function
	// La variable i vive dentro del scope de function
	let i = 0;
	if (true) {
		// Inicia scope de if
		// i se puede reasignar porque el if esta dentro del scope de function
		i = 1;
		// Finaliza scope de if
	}
	// Podemos mostrar el valor de i porque estamos dentro de function
	console.log(i);
	// Finaliza scope de function
}

scopeCorrecto();

// -------------------------------------------------
// --              Scope incorrecto               --
// -------------------------------------------------

function scopeIncorrecto() {
	// Inicia scope de function
	if (true) {
		// Inicia scope de if
		// La variable i vive dentro del scope de if
		// i se puede reasignar porque el if esta dentro del scope
        let i = 0;
        i = 1;
		// Finaliza scope de if
	}
	// No podemos mostrar el valor de i porque estamos dentro de if
	console.log(i); // Error
	// Finaliza scope de function
}

scopeIncorrecto();

//--TEMPLATE STRINGS--
/**
 * Defino saludaPorTerminal3
 * @param {String} nombre Nombre de la persona a saludar
 * @param {String} apellido Apellido de la persona a saludar
 */
function saludaPorTerminal3(nombre, apellido) {
	// Concatenado comun de string
	console.log('Hola ' + nombre + ' ' + apellido + ' ' + (2 + 45));
	// Template String con variables
	console.log(`Hola ${nombre} ${apellido} ${2 + 45}`);
}

saludaPorTerminal3('Mariano', 'Serra');

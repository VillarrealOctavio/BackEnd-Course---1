//EJEMPLOS CLASE02 PATO

/*--OPERADOR EXPONENCIAL Y ARRAY.INCLUDE--
let valoresBase = [1,2,3,4,5,6,7,8,9];
let listaElevada = valoresBase.map((num, index)=>num**index);
console.log(listaElevada);

let invitado = ["Marcos", "Octavio", "María", "Julieta"];

const  checkInvites = (list, person) =>{
	if(list.includes(person)){
		console.log("This person is on the list");
	}else{
		console.log("I am sorry. You are not here");
	}
}

console.log(checkInvites(invitado, "María"));
console.log(checkInvites(invitado, "Ramón"));
*/


/*--OBJECT.ENTRIES, OBJECT.VALUES, OBJECT.KEYS--
const compras = {
	verdura: 200,
	fruta: 100,
	carne: 400,
}

let claveValor = Object.entries(compras);
let values = Object.values(compras);
let keys = Object.keys(compras);

console.log(claveValor);
console.log(values);
console.log(keys);

let finalPrice = values.reduce((value,acum)=>value+acum);
console.log(finalPrice);
*/

/*--REST OPERATOR, SPREAD OPERATOR

const object1 = {
	nota1: 10,
	nota2: 3,
	nota3: 7,
	nota4: 4, 
};

const object2 = {
	nota1: 8,
	nota2: 6,
	nota3: 9,
};

let {nota1, nota2} = object2;
console.log(nota1);
console.log(nota2);

const object3 = {...object1,...object2}; 
console.log(object3);

const food = {
	meat: 100,
	fruits: 50,
	vegetables: 70,
};

let {meat, ...rest} = food;
console.log(meat);
console.log(rest);
*/






/*--PRÁCTICA ES6-ES9---(NO FUNCIONA)
const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

const food = [];
const checkList = (list) => {
	let thing1; 
	list.forEach(obj => {
		thing1 = Object.keys(obj);
		thing1.forEach((thing)=>{
			if(!food.includes(thing)) food.push(thing)
		})
	});
	console.log(food);
};

console.log(checkList(objetos));

let finalPrice = 0;

const finalValue = (list) => {
	list.forEach((obj)=>{
		const values = Object.values(obj);
		finalPrice += values.reduce((price, acum)=>price+acum);
	})	
	console.log(finalPrice);
};

console.log(finalValue(objetos));
*/


/*--APLANADO  Y TRIM--
let cadena = "          hello";
console.log(cadena);
console.log(cadena.trim());

let intencionDeSms = "     ";
if(intencionDeSms.trim()>0){
	console.log("Este mensaje es útil");
}else{
	console.log("Este mensaje no sirve");
};

let arrayAnidado = [1,2,3,[4,5,6],7,8,9];
console.log(arrayAnidado);
console.log(arrayAnidado.flat());
*/


/*--OPERADOR NULLISH Y VARIANLE PRIVADA--
let prueba = 0;
let variableOR = prueba || "Sin valor";
console.log(variableOR);
let variableNullish = prueba ?? "Sin valor";
console.log(variableNullish);
*/


/*--REGISTRADOR DE TICKETS DE EVENTOS--

class TicketManager {

	#precioBaseDeGanancia = 0.15;
	#id = 0;

	constructor(){
		this.eventos = [];
	};
	getEventos(){
		return this.eventos;
	};
	agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()){
		const evento = {
			nombre,
			lugar,
			precio: precio + precio * this.#precioBaseDeGanancia,
			capacidad,
			fecha,
			participantes: [],
			id: this.#getID(),
		}
		this.eventos.push(evento);
	};
	#getID(){
		this.#id++;
		return this.#id;
	};
	agregarUsuario(idEvento, idUsuario){
		const eventoIndex = this.eventos.findIndex(
			(evento) => evento.id === idEvento
		);
		if (eventoIndex === -1){
			console.log("El evento no existe");
			return;
		}
		const evento = this.eventos[eventoIndex];
		if(evento.participantes.includes(idUsuario)){
			console.log("El usuario ya está en dicho evento");
			return;
		}
		evento.participantes.push(idUsuario);
	};
	ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
		const eventoIndex = this.eventos.findIndex(
			(evento) => evento.id === idEvento
		);
		if(eventoIndex === -1){
			console.log("No existe el evento");
			return;
		}
		const evento = this.eventos[eventoIndex];
		const nuevoEvento = {
			...evento, 
			lugar: nuevaLocalidad ?? evento.lugar,
			fecha: nuevaFecha ?? evento.fecha,
			id: this.#getID,
			participantes: [],
		}
		this.eventos.push(nuevoEvento);
	};
};


// Pruebas
const ticketManager = new TicketManager();
ticketManager.agregarEvento('Evento Coder', 'Portugal', 200, 50);
ticketManager.agregarUsuario(1, 1);
ticketManager.agregarUsuario(1, 685);
ticketManager.ponerEventoEnGira(1, 'Mexico', new Date());
ticketManager.agregarUsuario(2, 927);
ticketManager.agregarUsuario(2, 10);
ticketManager.agregarUsuario(2, 859);

console.log(ticketManager.getEventos());

*/
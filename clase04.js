//--EJEMPLOS CLASE PATO--

/*--SET TIME OUT--
const temporizador = (callback) => {
    setTimeout(()=>{
        callback()
    },5000)
};

let operacion = () => console.log("Realizando operación");

console.log("Iniciando tarea");
temporizador(operacion);
console.log("Finalizando tarea");
*/

/*--SET INTERVAL--
let contador = () => {
    let counter = 1;
    console.log(`Realizando operación`);
    let timer = setInterval(()=>{
        console.log(counter++);
        if(counter>5){
            clearInterval(timer)
        };
    }      
        ,1000)
};
console.log(`Iniciando operación`);
contador();
console.log(`Finalizando operación`);
*/

/*--FS SYNC--
const fs = require(`fs`);
fs.writeFileSync(`./fsSync.txt`,`Estoy escribiendo un archivo \n`);
if(fs.existsSync(`./fsSync.txt`)){
    let contenido = fs.readFileSync(`./fsSync.txt`, `utf-8`);
    console.log(contenido);
    
    fs.appendFileSync(`./fsSync.txt`,`Soy una nueva oración`)
    contenido = fs.readFileSync(`./fsSync.txt`, `utf-8`);
    console.log(contenido);

    fs.writeFileSync(`./fsSync.txt`,`Sobreescribiendo lo anterior :)`);

    contenido = fs.readFileSync(`./fsSync.txt`, `utf-8`);
    console.log(contenido);
};
*/

/*--FS CALLBACK--(NO FUNCIONA)
const fs = require(`fs`);
fs.writeFile(
    `./fsSync.txt`,
    `Estoy escribiendo un archivo con Callback \n`,
    (err) => {
        if(err) return console.log(`Algo salió mal 1`)
        
        fs.readFile(`./fsSync.txt`, `utf-8`, (err, contenido) => {
            if(err) return console.log(`Algo salió mal 2`);
            console.log(contenido);

            fs.appendFile(
                `./fsSync.txt`,
                `Soy una nueva oración`, 
                (err)=>{
                if(err) return console.log(`Algo salió mal 3`);

                fs.readFile(`./fsSync.txt`, `utf-8`, (err, contenido) => {
                    if(err) return console.log(`Algo salió mal 4`);
                    console.log(contenido);

                    fs.unlink(`./fsSync.txt`, (err) => {
                        if(err) return console.log(`Algo salió mal 5`)
                    })
            })
        });  
    }
);
*/

/*--ALMACENAR FECHA Y HORA CON CALLBACK--
const fs = require('fs');
fs.writeFile(
	'./fsSync.txt',
	`${new Date()}`,
	(err) => {
		if (err) return console.log('No se puede escribir ni hora ni fecha.');

		fs.readFile('./fsSync.txt', 'utf-8', (err, contenido) => {
			if (err) return console.log('No se puede leer ni fecha ni hora.');
			console.log(`HORA-FECHA: ${contenido}`); 

            fs.unlink('./fsSync.txt', (err)=>{
              if(err) return console.log(`No se puede borrar fecha ni hora.`)
            })
		});
	}
)
*/

/*--FS PROMISES--
const fs = require('fs');

const opAsync = async () => {
	try {
		fs.promises.writeFile(
			'./fsPromises.txt',
			'Estoy escribiendo un Archivo con Promesas \n'
		);

		// Guardo en la variable contenido, la lectura del archivo.
		let contenido = await fs.promises.readFile('./fsPromises.txt', 'utf-8');
		console.log(contenido); // Imprimo en pantalla

		// Agrego al archivo './fsPromises.txt' el texto 'Aca agrego algo mas'
		await fs.promises.appendFile('./fsPromises.txt', 'Aca agrego algo mas');

		// Guardo en la variable contenido, la lectura del archivo.
		contenido = await fs.promises.readFile('./fsPromises.txt', 'utf-8');
		console.log(contenido); // Imprimo en pantalla

		// Elimino el archivo
		await fs.promises.unlink('./fsPromises.txt');
	} catch (err) {
		// Imprimo un error en pantalla
		console.log('Algo malio sal');
	}
};

// Ejecuto la funcion asincronica
opAsync();
*/

//--JASON PARSE Y STRINGIFY--

//--HANDS ON LAB--
// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

// Creo la clase UserManager
class UserManager {
	// Seteo el constructor
	constructor() {
		// Si no existe ./users.json
		if (!fs.existsSync('./users.json')) {
			// escribo el archivo de forma sincronica con un array vacio
			fs.writeFileSync('./users.json', JSON.stringify([]));
		}
	}

	/**
	 * Permite agregar un usuario persistente
	 * @param {object} user Usuario a agregar en el array
	 */
	async addUser(user) {
		// Intento...
		try {
			// Obtengo los usuarios actuales
			const actualUsers = await this.getUsers();
			// Agrego el nuevo usuario
			actualUsers.push(user);

			// Escribo nuevamente le archivo ./users.json
			await fs.promises.writeFile(
				'./users.json',
				JSON.stringify(actualUsers) // Transformo el array en string
			);
		} catch (err) {
			// Si hay error imprimo el error en consola
			console.log('No puedo agregar usuarios');
		}
	}

	/**
	 * Permite obtener los usuarios
	 * @returns Un array con los usuarios
	 */
	async getUsers() {
		// Intento...
		try {
			// Guardo en actualUsers el contenido de ./users.json
			const actualUsers = await fs.promises.readFile(
				'./users.json',
				'utf-8'
			);
			// Retorno actualUsers parseado
			return JSON.parse(actualUsers);
		} catch (err) {
			// Si hay error imprimo el error en consola
			console.log('No puedo darte usuarios');
		}
	}
}

// Creo una instancia de User Manger
const users = new UserManager();

// Creo una funcion asincronica
const test = async () => {
	// intento
	try {
		// Agregar usuario
		await users.addUser({
			nombre: 'Pato',
			apellido: 'Decima',
			edad: 27,
			curso: 43330,
		});
		// Agregar usuario
		await users.addUser({
			nombre: 'Julian',
			apellido: 'Fuentes',
			edad: 23,
			curso: 43330,
		});

		// Imprimo los usuarios que administra
		console.log(await users.getUsers());
	} catch (err) {
		// Si hay error imprimo el error en consola
		console.log('Salio mal el Test');
	}
};

// Ejecuto el test
test();
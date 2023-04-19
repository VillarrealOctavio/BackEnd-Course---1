//--EJEMPLOS CLASE03 PATO--PROGRAMACIÓN SINCRÓNICA Y ASINCRÓNICA--

/*-MAP--
let myArray = [1,2,3,4,5];

let values = myArray.map((num)=>num**2);

console.log(values);

const myFunction = (x) => {
   if(x % 2 == 0){
    return x ** 3;
   }else{
    return (x + 3) ** 2;
   };
}

let values2 = myArray.map(myFunction);
console.log(values2);
*/

/*-HACIENDO NUESTRO PROPIO MAP--
let myArray = [1,2,3,4,5,6];
const myMap = (array, callback) =>{
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let newValue = callback(array[i])
        newArray.push(newValue);
    };
    /*I can use "forEach", insted of using "for".
    array.forEach(el => {
      let newValue = callback(el)
        newArray.push(newValue);
    });
    
    return newArray;
}

const myFunction = (x) =>{
        return `Hola ${x}`; 
};

let values = myMap(myArray, myFunction);
console.log(values);

Array.prototype.myMap = function (callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        let newValue = callback(array[i])
        newArray.push(newValue);
    };
    return newArray;
};

let values2 = myMap(myArray, myFunction);
console.log(values2);
*/

/*--CALCULADORA--
const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculadora = (num1, num2, callback) =>{
    const rdo = callback(num1, num2);
    return rdo;
};

console.log(calculadora(2,2,sumar));
console.log(calculadora(2,2,restar));
console.log(calculadora(2,2,mul));
console.log(calculadora(2,2,div));
*/

/*-- DE PROMESA--
const div = (dividendo, divisor) => {
    return new Promise((resolve, rejected)=>{
        if(divisor == 00){
            rejected(`No se divide por 0`);
        }else{
            resolve(dividendo/divisor);
        }
    })
};

div(9,0).then((x)=>{
    console.log(`El rdo. es ${x}`)
}).catch((err)=>{
    console.log(`Esto salió mal: ${err}`)
})

div(9,3).then((x)=>{
    console.log(`El rdo. es ${x}`)
}).catch((err)=>{
    console.log(`Esto salió mal: ${err}`)
})
*/

/*--ASYNC/AWAIT--
const div = (dividendo, divisor) => {
    return new Promise((resolve, rejected)=>{
        if(divisor == 00){
            rejected(`No se divide por 0`);
        }else{
            resolve(dividendo/divisor);
        }
    })
};
//async function lalala (){}; ESTA ES OTRA FORMA DE ESCRIBIR LA FUNCIÓN ASINCRÓNICA

const funcionAsincronica = async()=>{
    try{
        let result = await div(123,0);
        console.log(`Dió ${result}`);
    } catch(err){
        console.log(`Algo salió mal`);
        console.log(err); 
    }
};

funcionAsincronica();
*/

/*-HANDSONLAB--
const suma = (num1, num2) => {
   return new Promise((resolve, rejected)=>{
    if(num1 === 0 || num2 === 0){
        rejected(`Algunos de los números en esta suma es 0. ¡INCORRECTO!`)
    }else{
        let result = num1 + num2;
        if(result < 0){
            rejected(`Únicamente se aceptan resultado positivos en esta suma. ¡INCORRECTO!`)
        }else{
            resolve(`La suma es correcta, ya que dió ${result}`)
        }

    }
   })
};

const resta = (num1, num2) => {
    return new Promise((resolve, rejected)=>{
     if(num1 === 0 || num2 === 0){
         rejected(`Algunos de los números en esta resta es 0. ¡INCORRECTO!`)
     }else{
         let result = num1 - num2;
         if(result < 0){
             rejected(`Únicamente se aceptan resultado positivos en la resta. ¡INCORRECTO!`)
         }else{
             resolve(`La resta es correcta, ya que dió ${result}`)
         }
 
     }
    })
 };

 const mul = (num1, num2) => {
    return new Promise((resolve, rejected)=>{
     if(num1 < 0 || num2 < 0){
         rejected(`Algunos de los números en esta multiplicación es negativo. ¡INCORRECTO!`)
     }else{
         let result = num1 * num2;
         if(result <= 0){
             rejected(`Únicamente se aceptan resultado positivos en la multiplicación. ¡INCORRECTO!`)
         }else{
             resolve(`La multiplicación es correcta, ya que dió ${result}`)
         }
     }
    })
 };

 const div = (dividendo, divisor) => {
    return new Promise((resolve, rejected)=>{
     if(divisor === 0){
         rejected(`No se puede dividir por 0. ¡INCORRECTO!`)
     }else{
         let result = dividendo / divisor;
         if(result < 0){
             rejected(`Únicamente se aceptan resultado positivos en la división. ¡INCORRECTO!`)
         }else{
             resolve(`La multiplicación es correcta, ya que dió ${result}`)
         }
     }
    })
 };

 const calc = async(num1, num2, operation) => {
    try{
        const result = await operation(num1, num2)
        console.log(`El resultado, es ${result}`)
        return result;
    }
    catch (err){
        console.log(`El error es el siguiente: ${err}`);
    }
 };

 calc(3,0,suma);
 calc(3,-5,suma);
 calc(3,7,suma);
 calc(3,0,resta);
 calc(3,7,resta);
 calc(3,1,suma);
 calc(3,0,mul);
 calc(3,-6,mul);
 calc(3,7,mul);
 calc(3,0,div);
 calc(3,-5,div);
 calc(3,3,div);
 */
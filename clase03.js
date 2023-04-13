//--EJEMPLOS CLASE03 PATO--PROGRAMACIÓN SINCRÓNICA Y ASINCRÓNICA--

/*--MAP--
let myArray = [1,2,3,4,5];

let values = myArray.map((num)=>num**2);

console.log(values);

const myFunction = (x) => {
   if(){
    return x ** 3;
   }else{
    return (x + 3) ** 2;
   };
}

let values2 = myArray.map(myFunction);
console.log(values2);
*/

//-HACIENDO NUESTRO PROPIO MAP--
let myArray = [1,2,3,4,5,6];
const myMap = (array, callback) =>{
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let newValue = callback(array[i])
        newArray.push(newValue);
    };
    return newArray;
}

const myFunction = (x) =>{
        return `${x} LALALA`; 
};

let values = myMap(myArray, myFunction);
console.log(values);

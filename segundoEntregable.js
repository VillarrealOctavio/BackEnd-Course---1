const fs = require(`fs`);

class ProductManager {

    //VARIABLES PRIVADAS
    #id = 0;
    
    constructor(){
        this.path = `./products.json`
        fs.promises.writeFile(this.path,JSON.stringify([]))
    };

    //MÉTODOS

    /*En el método "getProducts" creo una variable llamada actualProducts, la cual me permite almacenar el array 
    con sus elementos (objetos, en este caso). Dicho array lo traigo del archivo creado, aplicándo JSON.parse*/
    async getProducts(){
        try{
            const actualProducts = await fs.promises.readFile(this.path,`utf-8`)
            return JSON.parse(actualProducts);
        }
        catch{
            console.log(`We could not get the array of products.`)
        }
    };

    /* */
    async addProduct(title, description, price, thumbnail, code, stock = 50){
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,  
            id: this.#getID(),
          };

          try{
            if(title && description && price && thumbnail && code && stock){
                const productArray = await this.getProducts();
                const findCode = await productArray.findIndex(
                    (obj) => obj.code === code
                );
                if (findCode != -1){
                    console.log("The product alredy exists")
                    return;
                };
                productArray.push(product);
                await fs.promises.writeFile(this.path, JSON.stringify(productArray))
            } else {
                console.log("Something went wrong. Fill in every parameter");
            }
          }

          catch(err){
            console.log("It is not possible to add new products.")
          }
    };

    async #getID() {
        await this.#id++
        return this.#id;
    };

    /*En el método "getProductById" busco un producto (objeto) en el array. Dicho arreglo lo obtengo mediante
    this.getProducts(), guardándolo en la variable foundArray. Luego comienzo a operarlo.*/
    async getProductById(idProduct){
        try{
            const foundArray = await this.getProducts();
            let productIndex = await foundArray.findIndex(
                (product) => product.id === idProduct
            );
            if(productIndex === -1){
                console.log("¡Not Found!");
                return;  
            };
            const product = await foundArray[productIndex]; 
            console.log(product);
        }
        catch(err){
            console.log(`It is not possible to get a product by its Id.`)
        }
    };

    /* */
    async updateProduct(idProduct, about){
        try{
            const newUpdatedProduct = about;
            const arrayOfProducts = await this.getProducts();
            const oldProduct = await arrayOfProducts.find((product) => product.id === idProduct);
            if(oldProduct == undefined){
                console.log(`The product you are trying to modify, does not exist.`)
                return;
            }
            const mergedProduct = {...oldProduct,...newUpdatedProduct}; 
            await this.deleteProduct(idProduct);
            arrayOfProducts = await this.getProducts();
            await arrayOfProducts.push(mergedProduct);
            await fs.promises.writeFile(this.path, JSON.stringify(arrayOfProducts))
        }
        catch (err) {
            console.log(`It was not possible to modify the object.`);
        } 
    };

    /* */
    async deleteProduct(idProduct){
        try{
        const arrayUnderStudy = await this.getProducts();
        const indexOfProduct = arrayUnderStudy.findIndex((product) => product.id === idProduct)
        if(indexOfProduct != -1){
            const productToDelete = await arrayUnderStudy[indexOfProduct];
            const arrayFiltered = await arrayUnderStudy.filter((product) => product != productToDelete)
            await fs.promises.writeFile(this.path, JSON.stringify(arrayFiltered))
        }else{
            console.log(`The product does not exist.`)
        }
        }
        catch{
            console.log(`We could not delete the product by its id.`)
        }
    };
}

const mates = new ProductManager();
mates.addProduct("Mate","Mate de Plástico", 200,`ruta a definir`, 8, 50);
const test = async () => {
	// intento
	try {
		// Agregar mate
		await mates.addProduct("Mate","Mate de Plástico", 200,`ruta a definir`, 8, 50);
		// Agregar termo
        await mates.addProduct("Mate","Mate de Vidrio", 400,`ruta a definir`, 5, 50);
		// Imprimo los productos que administra
		console.log(await mates.getProducts());
	} catch (err) {
		// Si hay error imprimo el error en consola
		console.log('Salio mal el Test');
	}
};

// Ejecuto el test
test();

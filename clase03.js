class ProductManager {

    //VARIABLES PRIVADAS
    #id = 0;
    
    constructor(){
        this.products = [];
    };

    //MÉTODOS

    getProducts(){
        return this.products;
    };

    addProduct(title, description, price, thumbnail, code, stock = 50){
        const product = {
          title,
          description,
          price,
          thumbnail,
          code,
          stock,  
          id: this.#getID,
        };
        this.products.push(product);
    };

    #getID(){
        this.#id++
        return this.#id;
    };

    getProductById(idProduct){
        productIndex = this.products.findIndex(
            (product) => product.id === idProduct
        );
        if(productIndex === -1){
            console.log("¡Not Found!");
            return;  
        }

        const product = this.products[productIndex]; 
        console.log(product);
        this.products.push(product);

    };
}

const productManager = new ProductManager();
productManager.addProduct("Mate","Mate de Plástico", 200,`ruta a definir`, 8, 50);
console.log(productManager.getProducts());

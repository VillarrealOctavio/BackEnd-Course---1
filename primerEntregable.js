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
            id: this.#getID(),
          };
        if(title && description && price && thumbnail && code && stock){
            const findCode = this.products.findIndex(
                (obj) => obj.code === code
            );
            if (findCode != -1){
                console.log("The product alredy exists")
                return;
            };
            this.products.push(product);
        } else {
            console.log("Something went wrong. Fill in every parameter");
        }
    };

    #getID(){
        this.#id++
        return this.#id;
    };

    getProductById(idProduct){
        let productIndex = this.products.findIndex(
            (product) => product.id === idProduct
        );
        if(productIndex === -1){
            console.log("¡Not Found!");
            return;  
        };
        const product = this.products[productIndex]; 
        console.log(product);
    };
}

const productManager = new ProductManager();
productManager.addProduct("Mate","Mate de Plástico", 200,`ruta a definir`, 8, 50);
productManager.addProduct("Termo","Termo rojo", 500,`ruta a definir`, 16, 50);
productManager.addProduct("Bolso","Bolso Desarmable", 1000,`ruta a definir`, 8, 50);
productManager.addProduct("Mate","Mate de Alpáca",`ruta a definir`, 8, 50);
productManager.getProductById(3);
productManager.getProductById(2);
console.log(productManager.getProducts());

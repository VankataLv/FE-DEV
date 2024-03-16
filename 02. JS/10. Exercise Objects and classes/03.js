function solve(curProducts, orderedProducts) {
    let storeStock = [];

    class Product {
        constructor(name, qty) {
            this.name = name
            this.qty = Number(qty)
        }

        addToQty(numToAdd) {
            this.qty += Number(numToAdd)
        }

        displayInfo() {
            console.log(`${this.name} -> ${this.qty}`)
        }
    }

    for (let i = 0; i <= curProducts.length - 2; i += 2) {
        let newProduct = new Product(curProducts[i], curProducts[i + 1]);
        storeStock.push(newProduct)
    }

    for (let i = 0; i <= orderedProducts.length - 2; i += 2) {
        let productAlreadyExists = false;
        for (let product of storeStock) {
            if (product.name == orderedProducts[i]) {
                productAlreadyExists = true;
                product.addToQty(orderedProducts[i + 1])
            }
        }

        if (!productAlreadyExists) {
            let newProduct = new Product(orderedProducts[i], orderedProducts[i + 1]);
            storeStock.push(newProduct)
        }
    }
    for (let product of storeStock) {
        product.displayInfo()
    }

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
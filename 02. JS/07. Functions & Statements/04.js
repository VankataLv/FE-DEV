function orders(product, qty) {
    let totalPrice = 0

    if (product === "coffee") {
        totalPrice = 1.5 * qty;
    }
    else if (product === "water") {
        totalPrice = 1 * qty;
    }
    else if (product === "coke") {
        totalPrice = 1.4 * qty;
    }
    else if (product === "snacks") {
        totalPrice = 2 * qty;
    }
    console.log(totalPrice.toFixed(2))
}

orders("water", 5)
orders("coffee", 2)
function price(fruit, weight, pricePerGram) {

    let totalPrice = weight * pricePerGram/1000;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}

price('orange', 2500, 1.80);
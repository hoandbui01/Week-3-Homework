const pizzaToppings = ['cheese', 'pepperoni', 'mushroom', 'tomatoes', 'green peppers', 'pineapple'];

// function greetCustomer() {
//     console.log = `Welcome to Pizza House, our toppings are ${pizzaToppings}`
// }

function greetCustomer() {
    const greeting = `Welcome to Pizza House, our toppings are ${pizzaToppings}`
    console.log(greeting);
}

function getPizzaOrder(size, crust, pizzaToppings) {
    console.log('Your pizza will be coming up shortly!');
    console.log(`One ${size} ${crust} ${pizzaToppings} is your order`);
    return [size, crust, pizzaTopping];
}

function preparePizza([size, crust, pizzaToppings]) {
    console.log('Cooking Pizza')
    return {
        size: size,
        crust: crust,
        toppings: pizzaToppings,
    };
 }

 function servePizza (pizza) {
    console.log('Pizza is ready')
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}`)
    return pizza;
 }

const hoanPizza = preparePizza(['small', 'deep dish', ['cheese', 'peporoni']]);
// console.log(hoanPizza);
servePizza(hoanPizza);

const pizzaToppings = [
  "cheese",
  "pepperoni",
  "mushroom",
  "tomatoes",
  "green peppers",
  "pineapple",
];


function greetCustomer() {
  const greeting = `Welcome to Pizza House, our toppings are ${pizzaToppings}`;
  console.log(greeting);
}

function getPizzaOrder(size, crust, pizzaToppings) {
  console.log("Your pizza will be coming up shortly!");
  console.log(`One ${size} ${crust} ${pizzaToppings} is your order`);
  return [size, crust, pizzaTopping];
}

function preparePizza([size, crust, pizzaToppings]) {
  console.log("Cooking Pizza");
  return {
    size: size,
    crust: crust,
    toppings: pizzaToppings,
  };
}

function servePizza(pizza) {
  console.log("Pizza is ready");
  console.log(
    `Order up! Here's your ${pizza.size} ${
      pizza.crust
    } crust pizza with ${listToppings(pizza.toppings)}`
  );
  return pizza;
}

function listToppings(listToppings) {
  let sentence = "";
  for (let index = 0; index < listToppings.length; index++) {
    const word = listToppings[index];
    if (index === listToppings.length - 1) {
      sentence = `${sentence}, and ${word}.`;
    } else if (index === 0) {
      sentence = `${word}`;
    } else {
      sentence = `${sentence}, ${word}`;
    }
  }
  console.log(`Our toppings are ${sentence}`);
  return sentence;
}

const hoanPizza = preparePizza([
  "small",
  "deep dish",
  ["cheese", "pepporoni", "ham"],
]);
// console.log(hoanPizza);
servePizza(hoanPizza);

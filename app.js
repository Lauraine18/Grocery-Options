//Numbers wanted to add 
const itemsWanted = prompt('Enter numbers separated by commas for the ids of the items you want to add to your cart')

const listedItems = console.log ('These are the following items selected:')

//FILTER to check if item is available
const idNumbers = [1,4,3,7,];
const foundItems = idNumbers.filter(idNumbers => idNumbers > 6);
const idItems = prompt('Enter the id of an item you are trying to find')
    console.log(`The item with id ${foundItems} is out of stock`)

//FIND price availability 
const priceItem = [ "$32", "$50", "$75" ];
const findPrice = priceItem.find((price) => {
    return price === "$32";
})
const displayPrice = prompt('Enter the name of an item to find the price of')
console.log(`The price an apple is: ${findPrice}`)

//MAP through the inventory 
const inventoryPrice = ["$2", "$8", "$9", "$1"]
const totalInventory = inventoryPrice.map(x => x + 2);
const displayInventory = prompt ("Check the console to map through the total price of the inventory")
console.log(`The total price of the inventory is ${totalInventory}`)

//SLICE the category 
const categoryItem = ["Apple", "Banana", "Berrys", "WaterMelon"]
const itemSearch = categoryItem.slice(3);
const displayCatergory = prompt("Check the console for category 2!")
console.log (`The items in category 2 is: ${itemSearch}`)

//FOREACH cart items
const cartItems = ["milk", "cereal", "coke", "pizza", "chocolate"]
const itemsOptions = cartItems.forEach(() =>{
    console.log(`The cart items are: ${cartItems}`);
});
const displayCart = prompt("Check console to see how many items are in cart")

//REDUCE price of cart
const reduceCart = [22 , 32, 8, 2]
const initialValue = 75;
const restWithInitial = reduceCart.reduce(
    (accumulator, currentValue) => accumulator - currentValue, initialValue
);
const totalPrice = prompt("Check console for the total price of the cart")
console.log(`The total price of the items in your cart is: $${restWithInitial}`)
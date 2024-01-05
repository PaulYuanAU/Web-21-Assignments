// 1. initialise shopping list array
let shoppingList = ['Milk', 'Eggs', 'Bread'];

// 2.
// 2.1 add two items to the shopping list
shoppingList.push('Butter', 'Cheese');
console.log(shoppingList);

// 2.2 remove the last item from the shopping list
shoppingList.pop();
console.log(shoppingList);

// 3.
// 3.1 function: check whether the shopping list is full
function isListFull() {
    if (shoppingList.length > 5) {
        console.log('Your shopping cart is full');
    } else {
        console.log('You can keep shopping');
    }
}

isListFull();
shoppingList.push('Orange', 'Apple');
isListFull();

// 3.2 print the shopping list with the item number
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// 4.
// 4.1 function: check whether the item is already in the shopping list
function isItemInList(item) {
    return shoppingList.includes(item);
}

console.log(isItemInList('Milk'));
console.log(isItemInList('Chocolate'));

// 4.2 define a shopping list item object
function ShoppingListItem(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

let milk = new ShoppingListItem('Milk', 12, 1);
console.log(`Item: ${milk.name}, Price: $${milk.price}, Quantity: ${milk.quantity}`);

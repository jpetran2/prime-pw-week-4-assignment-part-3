console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5;


function addItem(item,basket) {
    if (isFull(basket)) { //implements 5 item limit
        return false;
    }
    basket.splice(basket.length, 0, item); 
        //inserts item at end of basket[]
    return true;
} //end addItem

function listItems(basket) {
    const length = basket.length;
    if (length === 0) {
        console.log(`Your basket is empty!`);
        return
    }
    console.log(' ');
    console.log(`The basket contains:`);
    for (const item of basket) {
        console.log(item);
    }
    console.log(`and that's it!`);
    console.log(' ');
    return;
} //end listItems

function empty(basket) {
    const length = basket.length;
    basket.splice(0,length);
    return;
} // end empty


//stretch goals:

function isFull(basket) {
    if (basket.length >= maxItems) {
        return true;
    }
    return false;
} //end isFull

//******************testing and output section******************

let basket = [];
console.log(`Basket is ${basket}`);

//read empty basket test
listItems(basket);
//it works


//add one item test
console.log(`Adding pears! (expect true)`, addItem('pears',basket));
console.log(`Basket contains ${basket}`);
//add one item works

//add multiple items test
console.log('adding peaches & pecans...');
addItem('peaches', basket);
addItem('pecans', basket);
console.log(`Basket contains ${basket}`);
//add multiple items works

//read basket test
listItems(basket);
//it works

//test empty basket function
empty(basket);
console.log(`Basket contains ${basket}`);

listItems(basket);
//it works, basket is now empty


//maxItems test
let basket2 = [];
console.log(`adding to basket...should be true: `, addItem('food1',basket2));
console.log(`adding to basket...should be true: `, addItem('food2',basket2));
console.log(`adding to basket...should be true: `, addItem('food3',basket2));
console.log(`adding to basket...should be true: `, addItem('food4',basket2));
console.log(`adding to basket...should be true: `, addItem('food5',basket2));
console.log(`adding to basket...should be false: `, addItem('food6',basket2));

listItems(basket2);
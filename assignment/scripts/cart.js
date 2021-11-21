console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


function addItem(item,basket) {
    let length = basket.length;
    basket.splice(length-1, 0, item); 
        //inserts item at end of basket[]
    return true;
} //end addItem

function listItems(basket) {
    for (const item of basket) {
        console.log(item);
    }
    return;
} //end listItems

function empty(basket) {
    basket = [];
    return;
} // end empty


let basket = [];
console.log(`Basket is ${basket}`);
console.log(`Adding pears! (expect true)`, addItem('pears',basket));
console.log(`Basket contains ${basket}`);

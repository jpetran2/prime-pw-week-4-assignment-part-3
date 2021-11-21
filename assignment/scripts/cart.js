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

empty(basket);
console.log(`Basket contains ${basket}`);

listItems(basket);
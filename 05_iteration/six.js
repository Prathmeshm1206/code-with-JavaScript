const myNums = [1,2,3]

//******************* Reduce Function **********************

//const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 1999
    } ,
    {
        itemName: "mob dev",
        price: 3999
    }
    
]
    //  Total price of item from itemcart

const priceToPay = shoppingCart.reduce((acc ,item) => (acc + item.price),0)

console.log(priceToPay);
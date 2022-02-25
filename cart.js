let cart = []
let shirt = 'shirt'
let underthere = 'underwear'



function myCart(key){

    switch(key){
        case "clear": 
        // Clear Cart
            newCart = []
            console.log(newCart)
            break;
        case "remove 1": 
        // Remove single Item
            console.log(cart.pop())
            cart.pop()
            newCart = cart
            console.log(newCart)
            break;
        case "add": 
        // Add Items
            newCart = cart
            cart.push(shirt);
            cart.push(underthere);
            newCart = cart;
            console.log(newCart);
            break;
        case "remove all": 
        // Remove All Items
            newCart = []
            console.log(newCart)
            break;

    }
};


myCart("add")
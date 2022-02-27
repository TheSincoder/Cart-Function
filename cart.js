

let item = {
    shirt: "Graphic T-Shirt",
    shoes: "Air Jordans",
    socks: "Stance Socks",
    hat: "Hat depicting your favorite game/tv show",
    underthere: "underwear"
}



function myCart(key, item, cart){
    
    switch(key){
        case "clear": 
            // Clear Cart
            newCart = []            
            return newCart;
        
        case "remove_1": 
        // Remove single Item        
            newCart = [...cart]
            newCart.splice(newCart.indexOf(item),1)     
            return newCart;     

        case "add": 
        // Add Items
            newCart = [...cart, item] 
            return newCart;
        
        case "remove_all": 
        // Remove All Items
            newCart = []
            for (let i of cart){
                
                if (i != item){
                    newCart.push(i)
                    console.log(newCart)
                };
            };
            return newCart;
        
        
    };
    
};

let leCart = []

let aCart = myCart("add", item.socks, leCart)
console.log(aCart)
aCart = myCart("add", item.socks, aCart)
console.log(aCart)
aCart = myCart("add", item.shirt, aCart)
console.log(aCart)
aCart = myCart("add", item.hat, aCart)
console.log(aCart)
aCart = myCart("remove_all", item.socks, aCart)
console.log(aCart)
aCart = myCart("add", item.underthere, aCart)
console.log(aCart)
aCart = myCart("add", item.underthere, aCart)
console.log(aCart)
aCart = myCart("add", item.shirt, aCart)
console.log(aCart)
aCart = myCart("remove_1", item.underthere, aCart)
console.log(aCart)
aCart = myCart("add", item.shoes, aCart)
console.log(aCart)
aCart = myCart("clear", item.shoes, aCart)
console.log(aCart)


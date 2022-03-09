let name = [];
//make an object via class. 

let hotdog = {
    "item": 'hotdog', 
    "qty": 0, 
    "price": 4.00
};

let fries = {
    "item": "fries", 
    "qty": 0, 
    "price": 3.50
};

let sauerkraut = {
    "item": "sauerkraut", 
    "qty": 0, 
    "price": 1.00
};

let soda = {
    "item": "soda", 
    "qty": 0, 
    "price": 1.50
};


// // fries made using function obj
// let fries = {}

// function priceFries(obj) {
//    obj.item = "fries"; 
//    obj.qty = 0
//    obj.price = 3.50;
// }
// priceFries(fries); 

// // sauerkraut is a simple object. 
// let sauerkraut = {
//     item: "sauerkraut", 
//     qty: 0,
//     price: 3.50
// }


// let soda = {
//     "item": "soda", 
//     "qty": 0,
//     "price": 1.50
// }

// grab all elements 
const friesBtn = document.getElementById('friesBtn');
const hotdogBtn = document.getElementById('hotdogBtn');
const sauerBtn = document.getElementById('sauerBtn');
const sodaBtn = document.getElementById('sodaBtn');
const submitOrd = document.getElementById('submitOrd');
friesBtn.addEventListener("click", orderFries);
hotdogBtn.addEventListener("click", orderHotdog);
sauerBtn.addEventListener("click", orderSauer);
sodaBtn.addEventListener("click", ordersoda);
submitOrd.addEventListener("click", submitOrder);

// 1 function per item attached to button if item ele.qty grater than 1 item is deleted and regenerated with correct amounts. Pushes to name array so all named ele can be deleted when finalized. 

function orderFries() {
    const listfries = document.getElementById('fries');
    if (fries.qty < 1) {
        fries.qty+= 1
        name.push("fries")
        display(fries.item, fries.qty, fries.price)
    } else {
        listfries.remove()
        fries.qty += 1;
        display(fries.item, fries.qty, fries.price)
    }
    
}

function orderHotdog() {
    const listhotdog = document.getElementById('hotdog');
    if (hotdog.qty < 1) {
        hotdog.qty+= 1
        name.push("hotdog")
        display(hotdog.item, hotdog.qty, hotdog.price)
    } else {
        listhotdog.remove()
        hotdog.qty += 1;
        display(hotdog.item, hotdog.qty, hotdog.price)
    }
}

function orderSauer() {
    const listsauerkraut = document.getElementById('sauerkraut');
    if (sauerkraut.qty < 1) {
        sauerkraut.qty+= 1
        name.push('sauerkraut')
        display(sauerkraut.item, sauerkraut.qty, sauerkraut.price)
    } else {
        listsauerkraut.remove()
        sauerkraut.qty+= 1
        display(sauerkraut.item, sauerkraut.qty, sauerkraut.price)
    }
}

function ordersoda() {
    const listsoda = document.getElementById('soda');
    if (soda.qty < 1) {
        soda.qty+= 1
        name.push('soda')
        display(soda.item, soda.qty, soda.price)
    } else {
        listsoda.remove()
        soda.qty+= 1
        display(soda.item, soda.qty, soda.price)
    }
}

//submit displays total as a confirm 

function submitOrder() {
   let totalFries = (fries.qty * fries.price);
   let totalHotdog = (hotdog.qty * hotdog.price);
   let totalSauer = (sauerkraut.qty * sauerkraut.price);
   let totalSoda = (soda.qty * soda.price);
   let total = totalFries + totalHotdog + totalSauer + totalSoda;
   let check = confirm(`Your total is $${total} click on to finalize.`);
   if (!check) {
    alert("What else would you like to add?")
   } else {
    alert("thank you for your order.")
    reset()
   }
}


// display make all items but does not get called 
function display(item, qty, price){
    var ul = document.getElementById("foodOrder");
    var li = document.createElement("li");
    li.id = `${item}`
    li.appendChild(document.createTextNode(`qty ${qty} item: ${item} price: $${parseFloat(price * qty)}`));
    ul.appendChild(li);

}

// uses name array to only remove those elements that were added. 

function reset(){ 
    for(let i= 0; i < name.length; i++) {
        let el = `${name[i]}`
        //el.qty -= el.qty;
        //console.log(el.qty);
        let gone = document.getElementById(`${el}`);
        gone.remove()
    }
    fries.qty = 0;
    hotdog.qty = 0;
    sauerkraut.qty = 0;
    soda.qty = 0;
    name = [];
}
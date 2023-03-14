// const myname= 'alex'
// const place= 'tvm'

// const user = {
//     name : myname,
//     place : place,
//     country : 'India',


// }
// console.log("USER",user);
//-------------------------------------
const product ={
    label : 'Red notebook',
    price : 3,
    stock : 201,
    salePrice : undefined
}

const {label, price, stock} = product
console.log("LABel",label);

const transaction = (type, {label, price})=>{
    console.log("LABEL & price",label,price);
}

transaction('order', product)
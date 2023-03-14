// let i=0

// let id=setInterval(()=>{
// console.log("Repeat",i++);
// },1000)

// if(i ===10){
// clearInterval(id)
// }
//----------------------------
// let i=0;
// function add(a,b){
//     console.log("ADD" +a + " & " + b + "= "+ (a+b) +"," + i++);
// }


// setInterval(add,1000 ,4,6);
//-------------------------------
// let i=0
// let timerId = setInterval(() => {
//     console.log('tick',i++)},
//     400);
// console.log("to SETTimeot",i);

// if(i===10){

//  console.log("value of i",i);
//     clearInterval(timerId)
// }

// setTimeout(() => {
//          clearInterval(timerId)
  
// }, 10000);
// setTimeout(() => { 
//     clearInterval(timerId); 
//     console.log('stop'); 
// }, 2000);
// console.log("AFEERT timeourt");

//---------------------------
let count = 1;
const intervalId = setInterval(() => {
  console.log(count);
  if (count === 500) {
    clearInterval(intervalId);
  }
  count++;
}, 100);